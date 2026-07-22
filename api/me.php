<?php
require_once __DIR__ . '/auth.php';

json_response(['loggedIn' => is_admin()]);
