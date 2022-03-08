<?php

namespace App\Http;

class Request
{
    private const DEFAULT_PATH = 'home';

    private const API_PATH = 'api/';

    public $req;

    public $parsedPath;

    public function __construct()
    {
        $this->req = $_SERVER;
        $this->parsedPath = $this->getParsedPath($this->req['REQUEST_URI']);
    }

    public function getSplitPath($path)
    {
        return explode('/', $path);
    }

    public function getParsedPath(string $rawPath): string
    {
        $splitPath = $this->getSplitPath($rawPath);
        $resourceTwo = isset($splitPath[2]) ? '/' . $splitPath[2] : '';
        $path = "{$splitPath[1]}{$resourceTwo}";
        return $path ?: self::DEFAULT_PATH;
    }

    public function shouldRedirectToHome(): bool
    {
        $splitPath = $this->getSplitPath($this->parsedPath);
        $isAlreadyHome = $splitPath[0] === self::DEFAULT_PATH;

        if ($isAlreadyHome || $this->isApiPath()) {
            return false;
        }

        return true;
    }

    public function isApiPath(): bool
    {
        $splitPath = $this->getSplitPath($this->parsedPath);
        $resourceOne =  $splitPath[0] ?? '';
        $resourceTwo = $splitPath[1] ?? '';

        if ($resourceOne === self::API_PATH || strlen($resourceTwo) >= 1) {
            return true;
        }

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

    public function getController()
    {
        $parsedPath = $this->parsedPath ?: self::DEFAULT_PATH;
        $splitPath = $this->getSplitPath($parsedPath);
        $controller = isset($splitPath[1]) ? ucfirst($splitPath[0]) . '\\' .
        ucfirst($splitPath[1]) : ucfirst($parsedPath);
        return "App\Controllers\\{$controller}";
    }
}
