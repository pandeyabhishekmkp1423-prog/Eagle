<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

function slugify(string $text): string {
    $slug = strtolower(trim($text));
    $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
    $slug = trim($slug, '-');
    return $slug !== '' ? $slug : 'post-' . substr(md5((string) mt_rand()), 0, 8);
}

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $stmt = $pdo->prepare('SELECT * FROM blog_posts WHERE id = :id');
        $stmt->execute(['id' => $_GET['id']]);
        $post = $stmt->fetch();
        if (!$post || ((int) $post['published'] !== 1 && !is_admin())) {
            json_response(['error' => 'Not found'], 404);
        }
        json_response($post);
    }

    if (!empty($_GET['all']) && is_admin()) {
        $stmt = $pdo->query('SELECT * FROM blog_posts ORDER BY post_date DESC');
    } else {
        $stmt = $pdo->query('SELECT * FROM blog_posts WHERE published = 1 ORDER BY post_date DESC');
    }
    json_response($stmt->fetchAll());
}

// Everything below is admin-only.
require_admin();
$body = json_body();

if ($method === 'POST') {
    $title = trim($body['title'] ?? '');
    if ($title === '') {
        json_response(['error' => 'Title is required.'], 400);
    }

    $id = trim($body['id'] ?? '') ?: slugify($title);
    $stmt = $pdo->prepare(
        'INSERT INTO blog_posts (id, title, excerpt, content, category, read_time, author, image, published, post_date)
         VALUES (:id, :title, :excerpt, :content, :category, :read_time, :author, :image, :published, :post_date)'
    );
    $stmt->execute([
        'id' => $id,
        'title' => $title,
        'excerpt' => $body['excerpt'] ?? '',
        'content' => $body['content'] ?? '',
        'category' => $body['category'] ?? 'Home Building Guide',
        'read_time' => $body['readTime'] ?? '5 Min Read',
        'author' => $body['author'] ?? 'Eagle Tiger Team',
        'image' => $body['image'] ?? '',
        'published' => !empty($body['published']) ? 1 : 0,
        'post_date' => $body['date'] ?? date('Y-m-d'),
    ]);
    json_response(['success' => true, 'id' => $id], 201);
}

$id = $_GET['id'] ?? '';
if ($id === '') {
    json_response(['error' => 'Missing id'], 400);
}

if ($method === 'PATCH') {
    $fields = [
        'title' => $body['title'] ?? null,
        'excerpt' => $body['excerpt'] ?? null,
        'content' => $body['content'] ?? null,
        'category' => $body['category'] ?? null,
        'read_time' => $body['readTime'] ?? null,
        'author' => $body['author'] ?? null,
        'image' => $body['image'] ?? null,
        'published' => isset($body['published']) ? (int) (bool) $body['published'] : null,
        'post_date' => $body['date'] ?? null,
    ];

    $sets = [];
    $params = ['id' => $id];
    foreach ($fields as $col => $val) {
        if ($val !== null) {
            $sets[] = "$col = :$col";
            $params[$col] = $val;
        }
    }
    if (!$sets) {
        json_response(['error' => 'No fields to update'], 400);
    }

    $stmt = $pdo->prepare('UPDATE blog_posts SET ' . implode(', ', $sets) . ' WHERE id = :id');
    $stmt->execute($params);
    json_response(['success' => true]);
}

if ($method === 'DELETE') {
    $stmt = $pdo->prepare('DELETE FROM blog_posts WHERE id = :id');
    $stmt->execute(['id' => $id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
