<?php

namespace App\Views;

class Base
{
    protected $templateName = 'home';

    protected $template;

    /**
     * Creates our view from html templates. 
     * ob_start string from include statement and prevents it from
     * being output straight away. We can manipulate however we want.
     * Once ready store in $template property.
     * Base::render handles creating and sending response.
     * 
     * @param array<string> $templateData
     */

    public function create(array $templateData)
    {
        $templatePath = __DIR__ . '/templates/' . $this->templateName . '.php';
        ob_start();
        include $templatePath;
        $template = ob_get_contents();
        ob_end_clean();
        $this->template = $template;
    }

    public function render(\App\Http\Request $req, $statusCode = '200')
    {
        $res = new \App\Http\Response($req);
        $res->setHeader("HTTP/1.x $statusCode");
        $res->setHeader('Content-Type: text/html; charset=UTF-8');
        $res->setOutput($this->template);
        $res->send();
    }
}
