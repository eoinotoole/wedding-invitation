<?php

namespace Tests;

use PHPUnit\Framework\TestCase;

final class RequestTest extends TestCase
{
    public static function setUpBeforeClass(): void
    {
        $_SERVER['REQUEST_URI'] = '/';
    }

    private function mockUri(string $uri): void
    {
        $_SERVER['REQUEST_URI'] = $uri;
    }

    public function testGetSplitPath()
    {
        $req = new \App\http\Request();

        $this->assertSame([0 => ''], $req->getSplitPath(''));
        $this->assertSame([0 => '', 1 => 'home'], $req->getSplitPath('/home'));
        $this->assertSame([0 => '', 1 => 'api', 2 => 'rsvps'], $req->getSplitPath('/api/rsvps'));
        $this->assertSame([0 => '', 1 => 'api', 2 => ''], $req->getSplitPath('/api/'));
        $this->assertSame([0 => '', 1 => 'api'], $req->getSplitPath('/api'));
    }

    public function testGetParsedPath()
    {
        $req = new \App\http\Request();

        $this->assertSame('home', $req->getParsedPath('/'));
        $this->assertSame('home', $req->getParsedPath('/home'));
        $this->assertSame('about', $req->getParsedPath('/about'));
        $this->assertSame('api/', $req->getParsedPath('/api/'));
        $this->assertSame('api/rsvp', $req->getParsedPath('/api/rsvp'));
        $this->assertSame('api', $req->getParsedPath('/api'));
    }

    public function testShouldRedirectToHome()
    {
        $req = new \App\http\Request();
        $this->assertFalse($req->shouldRedirectToHome());

        $this->mockUri('/home');
        $req = new \App\http\Request();
        $this->assertFalse($req->shouldRedirectToHome());

        $this->mockUri('/about');
        $req = new \App\http\Request();
        $this->assertTrue($req->shouldRedirectToHome());

        $this->mockUri('/anything');
        $req = new \App\http\Request();
        $this->assertTrue($req->shouldRedirectToHome());

        $this->mockUri('/api');
        $req = new \App\http\Request();
        $this->assertTrue($req->shouldRedirectToHome());

        $this->mockUri('/api/');
        $req = new \App\http\Request();
        $this->assertTrue($req->shouldRedirectToHome());

        $this->mockUri('/api/anything');
        $req = new \App\http\Request();
        $this->assertFalse($req->shouldRedirectToHome());

        // Reset URL
        $this->mockUri('/');
    }

    public function testIsApiPath()
    {
        $req = new \App\http\Request();
        $this->assertFalse($req->isApiPath());

        $this->mockUri('/anything');
        $req = new \App\http\Request();
        $this->assertFalse($req->isApiPath());

        $this->mockUri('/api');
        $req = new \App\http\Request();
        $this->assertFalse($req->isApiPath());

        $this->mockUri('/api/');
        $req = new \App\http\Request();
        $this->assertFalse($req->isApiPath());

        $this->mockUri('/api/anything');
        $req = new \App\http\Request();
        $this->assertTrue($req->isApiPath());

        // Reset URL
        $this->mockUri('/');
    }

    public function testGetController()
    {
        $req = new \App\http\Request();
        $this->assertSame('App\Controllers\Home', $req->getController());

        $this->mockUri('/about');
        $req = new \App\http\Request();
        $this->assertSame('App\Controllers\About', $req->getController());

        $this->mockUri('/api/rsvps');
        $req = new \App\http\Request();
        $this->assertSame('App\Controllers\Api\Rsvps', $req->getController());
    }
}
