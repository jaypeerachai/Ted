<?php session_start();
    $host = 'localhost'; 
    $user='root'; 
    $pass=''; 
    $db = 'ted'; 
    $con = new mysqli($host,$user,$pass,$db);  

    if(isset($_SESSION['count']) == FALSE)
    {
        $_SESSION['count'] = 0;
    }

    $_name = $_GET['name'];
    $_email = $_GET['email'];
    $_comment = $_GET['comment'];

    if($con) 
    {
        $_SESSION['count']++;
        $cid = 'c'.$_SESSION['count'];
        echo 'connected successfully to mydb database'; 
    }
    $sql = "INSERT INTO comment (cid,fullname,email,comment) VALUES ('$cid','$_name','$_email','$_comment')"; 
    if ($con->query($sql) === TRUE) 
    {
        echo "New record created successfully";
    } 
    else
    {
        $_SESSION['count']--;
        echo "Error: " . $sql . "<br>" . $con->error;
    }
?>