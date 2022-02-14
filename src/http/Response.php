<?php
namespace http;

class Response {
    private $request;

    private $headers = [];

    private $output;

    const STATUS_TEXTS = [
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

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function setHeader(string $header): void
    {
        $this->headers[] = $header;
    }

    public function redirect(string $redirectPath): void
    {
        $host = $this->request->getHost();
        header("Location: http://{$host}/{$redirectPath}");
        exit();
    }

    public function setOutput($data): void
    {
        $this->output = $data;
    }

    public function getStatusCodeText(int $code): string {
        return (string) isset($this->statusTexts[$code]) ? $this->statusTexts[$code] : 'unknown status';
    }

    public function sendStatus($code) {
        $this->setHeader(sprintf('HTTP/1.1 ' . $code . ' %s' , $this->getStatusCodeText($code))); 
    }

    public function send(): void
    {
        echo $this->output;
    }
}