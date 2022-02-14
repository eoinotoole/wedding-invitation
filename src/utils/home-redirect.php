<?php

function shouldRedirectToHome(string $path)
{
    $splitPath = explode('/', $path);
    $isAlreadyHome = $splitPath[0] === 'home';

    if($isAlreadyHome || isApiPath($splitPath)) {
        return false;
    }

    return true;
}

function isApiPath(array $splitPath): bool
{
    $resourceOne = isset($splitPath[0]) ? $splitPath[0] : '';
    $resourceTwo = isset($splitPath[1]) ? $splitPath[1] : '';

    if($resourceOne !== http\Request::API_PATH || strlen($resourceTwo) < 1) {
        return false;
    }

    return true;
}