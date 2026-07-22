<?php
require_once __DIR__ . '/config.php';

function start_admin_session(): void {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_name(SESSION_NAME);
        session_set_cookie_params([
            'lifetime' => 60 * 60 * 24 * 7,
            'path' => '/',
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        session_start();
    }
}

function is_admin(): bool {
    start_admin_session();
    return !empty($_SESSION['admin']);
}

function json_response($data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function require_admin(): void {
    if (!is_admin()) {
        json_response(['error' => 'Unauthorized'], 401);
    }
}

function json_body(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return [];
    }
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}
