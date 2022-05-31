<?php

require 'vendor/autoload.php';

class FrontController
{
    private $req;

    public function __construct()
    {
        $this->req = new \App\Http\Request();
    }

    public function run()
    {
        if ($this->req->shouldRedirectToHome()) {
            $res = new \App\Http\Response($this->req);
            $res->redirect('');
            return;
        }

        $controllerClass = $this->getController();

        if (!class_exists($controllerClass)) {
            $controller = new \App\Controllers\Error($this->req);
            $controller->get();
            return;
        }

        $controller = new $controllerClass($this->req);
        $controller->callMethod();
    }

    private function getController()
    {
        $splitPath = $this->req->getSplitPath($this->req->path);
        $controller = ucfirst($splitPath[0]) . (isset($splitPath[1]) ? '\\' . ucfirst($splitPath[1]) : '') ?: 'Home';
        return "App\Controllers\\{$controller}";
    }
}

$frontController = new FrontController();
$frontController->run();
