<?php

namespace App\Controllers;

class Faqs extends Base
{
    public function get()
    {
        $view = new \App\Views\Faqs();
        $view->create(['title' => 'FAQs - William Pipe & Maeve O\'Toole']);
        $view->render($this->req);
    }
}
