<?php
namespace http;

class Request {
    const API_PATH = 'api';

    public $request;

    public function __construct()
    {
        $this->request = $_SERVER;
    }

    public function getParsedPath()
    {
        $rawPath = $this->request['REQUEST_URI'];
        $splitPath = explode('/', $rawPath);
        $resourceTwo = isset($splitPath[2]) ? '/' . $splitPath[2] : '';
        return "{$splitPath[1]}{$resourceTwo}";
    }

    public function getMethod()
    {
        return $this->request['REQUEST_METHOD'];
    }

    public function getHost()
    {
        return $this->request['HTTP_HOST'];
    }
}