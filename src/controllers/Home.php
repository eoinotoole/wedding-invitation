<?php
namespace controllers;

class Home extends Base {

    public function get()
    {
        $this->renderView('views/Home.php', ['title' => 'HOME TITLE']);
    }
}