<?php

namespace App\Controllers;

class Base
{
    protected $req;

    protected $res;

    protected $method;

    public function __construct()
    {
        $this->req = $GLOBALS['req'];
        $this->res = $GLOBALS['res'];
        $this->method = strtolower($this->req->getMethod());

        if (!method_exists($this, $this->method)) {
            // send error
            return;
        }

        if ($this->req->isApiPath()) {
            $this->res->prepareResponse();
        }

        $this->{$this->method}();
    }

    protected function renderView(string $viewPath, array $data)
    {
        require_once $viewPath;
    }
}
