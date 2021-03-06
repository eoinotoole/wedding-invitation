<?php

namespace App\Http;

class Response
{
    private $req;

    private $headers = [];

    private $output;

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

    public function sendNotAllowed()
    {
        $this->setHeader('HTTP/1.x 405');
        $this->setHeader('Content-Type: application/json; charset=UTF-8');
        $this->send();
    }

    public function send(): void
    {
        foreach ($this->headers as $header) {
            header($header);
        }

        echo $this->output;
    }
}
