<?php

namespace App\Controllers;

class Home extends Base
{
    public function get()
    {
        $this->renderView(__DIR__ . '/../views/Home.php', ['title' => 'HOME TITLE']);
    }
}
