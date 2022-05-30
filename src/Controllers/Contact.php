<?php

namespace App\Controllers;

class Contact extends Base
{
    public function get()
    {
        $view = new \App\Views\Contact();
        $view->create(['title' => 'contact - William Pipe & Maeve O\'Toole']);
        $view->render($this->req);
    }
}
