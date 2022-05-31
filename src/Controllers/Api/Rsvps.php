<?php

namespace App\Controllers\Api;

use Config;

class Rsvps extends \App\Controllers\Base
{
    public function post()
    {
        $reqBody = json_decode(file_get_contents($this->req::REQ_URL), true);
        $this->sendAdminEmails($reqBody);

        $res = new \App\Http\Response($this->req);
        $res->setHeader("HTTP/1.x 200");
        $res->setHeader('Content-Type: application/json; charset=UTF-8');
        $res->setOutput("ok");
        $res->send();
    }

    private function sendAdminEmails($reqBody): void
    {
        var_dump(getenv('SENDGRID_API_KEY'));

        // mail(\App\Config::ADMIN_EMAILS[0], 'test', 'Hello');
    }
}
