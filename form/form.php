<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    
    // You can perform further processing here, such as sending an email or storing the data in a database
    
    echo "Thank you for submitting the form, $name!";
}
?>
