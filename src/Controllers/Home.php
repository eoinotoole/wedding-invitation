<?php

namespace App\Controllers;

class Home extends Base
{
    public function get()
    {
        $this->renderView(dirname(__DIR__, 1) . '/Views/Home.php', ['title' => 'The wedding of Maeve O\'Toole & William Pipe']);
    }
}
