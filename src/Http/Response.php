<?php

namespace App\Http;

class Response
{
    private $req;

    private $headers = [];

    private $output;

    private const STATUS_TEXTS = [
        // SUCCESS CODES
        200 => 'OK',
        // REDIRECTION CODES
        301 => 'Moved Permanently',
        // CLIENT ERROR
        400 => 'Bad Request',
        401 => 'Unauthorized',
        404 => 'Not Found',
        // SERVER ERROR
        500 => 'Internal Server Error',
    ];

    public function __construct(Request $req)
    {
        $this->req = $req;
    }

    public function setHeader(string $header): void
    {
        $this->headers[] = $header;
    }

    public function redirect(string $redirectPath): void
    {
        $host = $this->req->getHost();
        header("Location: http://{$host}/{$redirectPath}");
        exit();
    }

    public function setOutput($data): void
    {
        $this->output = $data;
    }

    public function prepareResponse(): void
    {
        $this->setHeader('Access-Control-Allow-Origin: *');
        $this->setHeader("Access-Control-Allow-Methods: GET, POST");
        $this->setHeader('Content-Type: application/json; charset=UTF-8');
    }

    public function getStatusCodeText(int $code): string
    {
        return (string) isset($this->statusTexts[$code]) ? $this->statusTexts[$code] : 'unknown status';
    }

    public function sendStatus($code)
    {
        $this->setHeader(sprintf('HTTP/1.1 ' . $code . ' %s', $this->getStatusCodeText($code)));
    }

    public function send(): void
    {
        echo $this->output;
    }
}
