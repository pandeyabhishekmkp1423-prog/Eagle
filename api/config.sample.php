<?php
// Copy this file to config.php and fill in real values.
// config.php is gitignored -- never commit real credentials.

// --- Database (MySQL) ---
define('DB_HOST', 'localhost');
define('DB_NAME', 'eagle_tiger');
define('DB_USER', 'root');
define('DB_PASS', '');

// --- Admin login ---
// Generate a hash for your chosen password with:
//   php -r "echo password_hash('yourpassword', PASSWORD_BCRYPT), PHP_EOL;"
define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD_HASH', '$2y$10$replace.with.a.real.bcrypt.hash.generated.above');

// --- Session cookie name ---
define('SESSION_NAME', 'eagletiger_admin');
