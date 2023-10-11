<?php
$host = "127.0.0.1";
$dbUsername = "root";
$dbPassword ="root";
$dbName = "enter";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['signup'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email already exists in the signup table
    $checkSql = "SELECT * FROM signup WHERE email = ?";
    $checkStmt = $conn->prepare($checkSql);
    $checkStmt->bind_param("s", $email);
    $checkStmt->execute();
    $checkResult = $checkStmt->get_result();

    if ($checkResult->num_rows > 0) {
        echo "This email is already registered.";
    } else {
        // Email is not registered, insert the new signup record
        $insertSql = "INSERT INTO signup (name, email, password) VALUES (?, ?, ?)";
        $insertStmt = $conn->prepare($insertSql);
        $insertStmt->bind_param("sss", $name, $email, $password);

        if ($insertStmt->execute()) {
            // Sign up successful, redirect to the login form
            header("Location: register.html#signIn"); // Redirect to the login form on the same page
            exit();
        } else {
            echo "Error: " . $insertSql . "<br>" . $conn->error;
        }
    }
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn->close();
?>
