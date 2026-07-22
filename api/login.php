<?php
require_once __DIR__ . '/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Method not allowed'], 405);
}

$body = json_body();
$username = trim($body['username'] ?? '');
$password = (string) ($body['password'] ?? '');

if ($username === '' || $password === '') {
    json_response(['error' => 'Username and password are required.'], 400);
}

if ($username !== ADMIN_USERNAME || !password_verify($password, ADMIN_PASSWORD_HASH)) {
    json_response(['error' => 'Invalid credentials.'], 401);
}

start_admin_session();
session_regenerate_id(true);
$_SESSION['admin'] = true;

json_response(['success' => true]);
