<?php
session_start();
if (isset($_GET['action'])) {
    $action = $_GET['action'];
    switch ($action) {
        case "getuser":
            echo json_encode($_SESSION['user']);
            break;
        case "setuser":
            $_SESSION['user'] = array(
                "username" => "narendra",
                "email" => "narensgh@gmail.com"
            );
            break;
        default:
            break;
    }
    exit;
}

?>
<!doctype html>
<html lang="en">
    <head>
        <!--<title>Falconide Delivery Monitor</title>-->            
        <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all">

        <!-- CSS -->        
        <link type="text/css" rel="stylesheet" href="./css/font-awesome.min.css">
        <link type="text/css" rel="stylesheet" href="./css/simple-line-icons.min.css">
        <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css">
        <link id="style_components" type="text/css" rel="stylesheet" href="./css/components-md.min.css">

        <link type="text/css" rel="stylesheet" href="./css/layout.min.css">
        <link id="style_color" type="text/css" rel="stylesheet" href="./css/green.min.css">
        <link type="text/css" rel="stylesheet" href="./css/custom.css">

        <!-- JS -->
        <script type="text/javascript" src="./js/jquery.min.js"></script>
        <script type="text/javascript" src="./js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./js/app.min.js"></script>
        <script type="text/javascript" src="./js/layout.min.js"></script>
        <script src="js/delivery.js"></script>
    </head>
    <body class="page-sidebar-closed-hide-logo page-container-bg-solid page-md page-header-fixed page-footer-fixed page-sidebar-closed">
    </body>
</html>



