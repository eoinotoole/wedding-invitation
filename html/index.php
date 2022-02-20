<?php

require_once realpath('vendor/autoload.php');

$req = new App\Http\Request();
$res = new \App\Http\Response($req);

    // Temporary redirect - remove if more routes required
if ($req->shouldRedirectToHome()) {
    $res->redirect('');
}

if (class_exists($controller = $req->getController())) {
    new $controller();
}
