<?php

namespace App\Controllers;

class Base
{
    protected \App\Http\Request $req;

    protected string $method;

    public function __construct(\App\Http\Request $req)
    {
        $this->req = $req;
        $this->method = strtolower($this->req->getMethod());
    }

    public function callMethod()
    {
        if (!method_exists($this, $this->method)) {
            $res = new \App\Http\Response($this->req);
            $res->sendNotAllowed();
            return;
        }

        $this->{$this->method}();
    }
}
