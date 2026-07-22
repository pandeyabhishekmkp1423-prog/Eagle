<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/db.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

if ($method === 'POST') {
    $body = json_body();

    // Honeypot: real visitors never fill this hidden field. Silently accept so bots don't learn.
    if (!empty($body['company_website'])) {
        json_response(['success' => true]);
    }

    $name = trim($body['name'] ?? '');
    $phone = trim($body['phone'] ?? '');
    $email = trim($body['email'] ?? '');

    if ($name === '' || $phone === '') {
        json_response(['error' => 'Name and phone are required.'], 400);
    }

    $stmt = $pdo->prepare(
        'INSERT INTO leads (name, phone, email, plot_location, service_type, message, source)
         VALUES (:name, :phone, :email, :plot_location, :service_type, :message, :source)'
    );
    $stmt->execute([
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'plot_location' => trim($body['plotLocation'] ?? '') ?: null,
        'service_type' => trim($body['serviceType'] ?? '') ?: null,
        'message' => trim($body['message'] ?? '') ?: null,
        'source' => trim($body['source'] ?? '') ?: 'contact_form',
    ]);

    json_response(['success' => true], 201);
}

// Everything below is admin-only.
require_admin();

if ($method === 'GET') {
    $status = $_GET['status'] ?? null;
    if ($status) {
        $stmt = $pdo->prepare('SELECT * FROM leads WHERE status = :status ORDER BY created_at DESC');
        $stmt->execute(['status' => $status]);
    } else {
        $stmt = $pdo->query('SELECT * FROM leads ORDER BY created_at DESC');
    }
    json_response($stmt->fetchAll());
}

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
if (!$id) {
    json_response(['error' => 'Missing id'], 400);
}

if ($method === 'PATCH') {
    $body = json_body();
    $status = $body['status'] ?? null;
    $allowed = ['new', 'contacted', 'won', 'lost'];
    if (!in_array($status, $allowed, true)) {
        json_response(['error' => 'Invalid status'], 400);
    }
    $stmt = $pdo->prepare('UPDATE leads SET status = :status WHERE id = :id');
    $stmt->execute(['status' => $status, 'id' => $id]);
    json_response(['success' => true]);
}

if ($method === 'DELETE') {
    $stmt = $pdo->prepare('DELETE FROM leads WHERE id = :id');
    $stmt->execute(['id' => $id]);
    json_response(['success' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
