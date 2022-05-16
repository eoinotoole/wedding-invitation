<?php

require_once realpath('vendor/autoload.php');

class FrontController
{
    private $req;

    private $controller;

    public function __construct()
    {
        $this->req = new \App\Http\Request();
    }

    public function run()
    {
        $controllerClass = $this->getController();

        if (!class_exists($controllerClass)) {
            // Handle Error, show error page
            exit(1);
        }

        $this->controller = $controllerClass;
        new $this->controller($this->req);
    }

    private function getController()
    {
        $parsedPath = $this->req->parsedPath ?: $this->req::DEFAULT_PATH;
        $splitPath = $this->req->getSplitPath($parsedPath);
        $controller = isset($splitPath[1]) ? ucfirst($splitPath[0]) . '\\' .
            ucfirst($splitPath[1]) : ucfirst($parsedPath);
        return "App\Controllers\\{$controller}";
    }
}

$frontController = new FrontController();
$frontController->run();
