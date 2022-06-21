<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Description" />

    <title><?php echo $templateData['title']; ?></title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="static/images/favicon.png">
    <link rel="stylesheet" href="/static/main.1.0.css" />
</head>

<body>
    <div class="page">
        <img class="intro__leaves" src="/static/images/new-leaves1.png" alt="Hanging leaves illustration" />
        <?php include_once __DIR__ . '/nav.php'; ?>
        <div class="modal-container"></div>