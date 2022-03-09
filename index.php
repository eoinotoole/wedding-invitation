<?php

require_once realpath('vendor/autoload.php');

$req = new \App\Http\Request();
$res = new \App\Http\Response($req);

$isControllerAvailable = class_exists($req->getController());

// Temporary redirect - remove if more routes required
if (!$isControllerAvailable || $req->shouldRedirectToHome()) {
    $res->redirect('');
}

$controller = $req->getController();
new $controller();
