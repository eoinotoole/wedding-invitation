<?php

namespace App\Controllers;

class Gifts extends Base
{
    public function get()
    {
        $view = new \App\Views\Gifts();
        $view->create(['title' => 'Gifts - William Pipe & Maeve O\'Toole']);
        $view->render($this->req);
    }
}
