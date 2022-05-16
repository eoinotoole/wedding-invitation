<?php

namespace App\Controllers;

class Home extends Base
{
    public function get()
    {
        $view = new \App\Views\Home();
        $view->create(['title' => 'The wedding of William Pipe & Maeve O\'Toole']);
        $view->render($this->req);
    }
}
