<?php
namespace controllers;

class Base {
    protected $request;

    protected $response;

    protected $method;

    public function __construct() {
        $this->request = $GLOBALS['request'];
        $this->response = $GLOBALS['response'];
        $this->method = strtolower($this->request->getMethod());
        
        if(!method_exists($this, $this->method)) {
            // send error
            return;
        }

        $this->{$this->method}();
    }

    protected function renderView(string $viewPath, array $data)
    {
        require_once $viewPath;
    }
}