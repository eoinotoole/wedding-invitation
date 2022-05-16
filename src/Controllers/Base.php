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

        if (!method_exists($this, $this->method)) {
            // send error
            return;
        }

        // if ($this->req->isApiPath()) {
        //     $this->res->prepareResponse();
        // }

        $this->{$this->method}();
    }
}
