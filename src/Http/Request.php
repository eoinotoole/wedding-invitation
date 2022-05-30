<?php

namespace App\Http;

class Request
{
    public const DEFAULT_PATH = 'home';

    private const API_PATH = 'api/';

    private $req;

    public $path = self::DEFAULT_PATH;

    public function __construct()
    {
        $this->req = $_SERVER;
        $this->path = $this->req['REQUEST_URI'];
    }

    public function getSplitPath($path)
    {
        $splitPath = explode('/', $path);
        array_shift($splitPath);
        return $splitPath;
    }

    public function shouldRedirectToHome(): bool
    {
        $isHomePath = $this->getSplitPath($this->path)[0] === self::DEFAULT_PATH;
        if ($isHomePath) return true;
        return false;
    }

    public function getMethod()
    {
        return $this->req['REQUEST_METHOD'];
    }

    public function getHost()
    {
        return $this->req['HTTP_HOST'];
    }
}
