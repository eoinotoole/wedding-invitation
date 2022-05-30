<?php

namespace App\Controllers;

class Travel extends Base
{
    public function get()
    {
        $view = new \App\Views\Travel();
        $view->create(['title' => 'Travel - William Pipe & Maeve O\'Toole']);
        $view->render($this->req);
    }
}
