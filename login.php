<?php
$host = "127.0.0.1";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "enter";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM signup WHERE email = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Insert login data into the "login" table
        $insertSql = "INSERT INTO login (email, password) VALUES (?, ?)";
        $insertStmt = $conn->prepare($insertSql);
        $insertStmt->bind_param("ss", $email, $password);
        $insertStmt->execute();
        
        header("Location: index.html"); // Redirect to home page on successful login
    } else {
        echo "Invalid login credentials.";
    }
}

$conn->close();
?>
