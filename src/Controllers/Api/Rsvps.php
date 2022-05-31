<?php

namespace App\Controllers\Api;

class Rsvps extends \App\Controllers\Base
{
    public function post()
    {
        $reqBody = json_decode(file_get_contents($this->req::REQ_URL), true);
        $this->sendAdminEmails($reqBody);
        $this->sendGuestConfirmationEmail($reqBody);

        $res = new \App\Http\Response($this->req);
        $res->setHeader("HTTP/1.x 200");
        $res->setHeader('Content-Type: application/json; charset=UTF-8');
        $res->setOutput("ok");
        $res->send();
    }

    private function sendAdminEmails($reqBody): void
    {
        $primaryGuest = $reqBody['guests'][0]['name'];
        $primaryEmail = $reqBody['email'];
        $isAttending = $reqBody['isAttending'] ? 'Yes' : 'No';
        $isStayingTheNight = $reqBody['isStayingTheNight'] ? 'Yes' : 'No';
        $comments = $reqBody['comments'];
        $guestsMarkup = $isAttending === 'Yes' ? $this->getGuestsMarkup($reqBody['guests']) : '';

        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("admin@willandmaevesayido.com", "Admin");
        $email->setSubject("RSVP Received");
        $email->addTo("eoinjamesotoole@gmail.com", "Eoin");
        $email->addContent(
            "text/html",
            "
            <h1>Maeve & Will's Wedding 2022</h1>
            <h2>New RSVP Received</h2>
            <hr>
            <h3>User submitted the following details</h3>
            <p><strong>Party leader:</strong> $primaryGuest</p>
            <p><strong>Email:</strong> $primaryEmail</p>
            <p><strong>Is attending:</strong> $isAttending</p>
            <p><strong>Is staying the night:</strong> $isStayingTheNight</p>
            <p><strong>Additional comments:</strong> $comments</p>
            <br>
            $guestsMarkup
            "
        );
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $sendgrid->send($email);
        } catch (\Exception $e) {
            // TODO handle error
        }
    }

    private function sendGuestConfirmationEmail($reqBody)
    {
        $primaryEmail = $reqBody['email'];
        $isAttending = $reqBody['isAttending'] ? 'Yes' : 'No';
        $isStayingTheNight = $reqBody['isStayingTheNight'] ? 'Yes' : 'No';
        $comments = $reqBody['comments'];
        $guestsMarkup = $isAttending === 'Yes' ? $this->getGuestsMarkup($reqBody['guests']) : '';
        $text = $isAttending === 'Yes' ? 'We look forward to seeing you on the 6th of November 2022!' : 'It`s a shame you won\'t be able to make it but we hope to see you soon!';

        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("admin@willandmaevesayido.com", "Admin");
        $email->setSubject("RSVP Submitted");
        $email->addTo("eoinjamesotoole@gmail.com", "Eoin");
        $email->addContent(
            "text/html",
            "
            <h1>Maeve & Will's Wedding 2022</h1>
            <h2>RSVP Submitted</h2>
            <hr>
            <p>Thank you for your submission!</p>
            <p>$text</p>
            <p>All the best</p>
            <p>Will & Maeve</p>
            <hr>
            <h3>You submitted the following details</h3>
            <p><strong>Email:</strong> $primaryEmail</p>
            <p><strong>Is attending:</strong> $isAttending</p>
            <p><strong>Is staying the night:</strong> $isStayingTheNight</p>
            <p><strong>Additional comments:</strong> $comments</p>
            $guestsMarkup
            "
        );

        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        try {
            $sendgrid->send($email);
        } catch (\Exception $e) {
            // TODO handle error
        }
    }

    private function getGuestsMarkup($guests)
    {
        $markup = "<h3>Guest Selections</h3>";

        foreach ($guests as $guest) {
            $name = $guest['name'];
            $menu = $guest['menu'];
            $entree = $menu === 'standard' ? $guest['entree'] : 'set entree';
            $main = $menu === 'standard' ? $guest['main'] : 'set main';
            $dessert = $menu === 'standard' ? $guest['dessert'] : 'set dessert';
            $dietaryRequirements = $guest['dietaryRequirements'];

            $markup .= "
            <div>
                <h4>$name</h4>
                <p><strong>Chosen menu:</strong> $menu</p>
                <p><strong>Entree:</strong> $entree</p>
                <p><strong>Main:</strong> $main</p>
                <p><strong>Dessert:</strong> $dessert</p>
                <p><strong>Dietary requirements:</strong> $dietaryRequirements</p>
            </div>
            <br>
            ";
        }
        return $markup;
    }
}
