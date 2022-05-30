<?php

namespace App\Controllers;

class Error extends Base
{
    public function get()
    {
        $view = new \App\Views\Error();
        $view->create(['title' => 'Page not found - Will & Maeve']);
        $view->render($this->req, '404');
    }
}
