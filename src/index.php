<?php
    require_once 'utils/autoload.php';
    require_once 'utils/home-redirect.php';
    
    $request = new http\Request();
    $response = new http\Response($request);

    // $response->setHeader('Access-Control-Allow-Origin: *');
    // $response->setHeader("Access-Control-Allow-Methods: GET, POST");
    // $response->setHeader('Content-Type: application/json; charset=UTF-8');

    $parsedPath = $request->getParsedPath() ?: 'Home';
    $controller = "controllers\\{$parsedPath}";
    
    // Temporary redirect - remove if more routes required
    // if(shouldRedirectToHome($parsedPath)) {
    //     $response->redirect('');
    // }


    if(class_exists($controller)) {
        $controller = new $controller();
    }

    


    // $response->send();

