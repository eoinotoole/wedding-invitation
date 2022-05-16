<?php

namespace App\Views;

class Base
{
    protected const TEMPLATE = 'home';

    protected $template;

    public function create(array $templateData)
    {
        $templatePath = __DIR__ . '/templates/' . self::TEMPLATE . '.php';
        ob_start();
        include $templatePath;
        $template = ob_get_contents();
        ob_end_clean();
        $this->template = $template;
    }

    public function render(\App\Http\Request $req)
    {
        $res = new \App\Http\Response($req);
        $res->setHeader('HTTP/1.x 200');
        $res->setHeader('Content-Type: text/html; charset=UTF-8');
        $res->setOutput($this->template);
        $res->send();
    }
}
