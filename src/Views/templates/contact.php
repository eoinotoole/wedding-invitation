<?php include_once __DIR__ . '/header.php' ?>
<div class="page">
    <div class="container">
        <main>
            <h1 class="heading heading--page">Contact us</h1>
            <p>We are happy to help you out with any questions you may have about our wedding and upcoming event.</p>
            <form class="form form--contact" autocomplete="off">
                <div class="form__separation-wrap">
                    <div class="form__element">
                        <input class="rsvp-form__guest-input" type="text" name="name" placeholder="Guest name" autocomplete="off">
                    </div>
                </div>
                <div class="form__separation-wrap">
                    <div class="form__element">
                        <input type="email" name="email" placeholder="Email address">
                    </div>
                </div>
                <div class="form__separation-wrap">
                    <div class="form__element">
                        <h5>Your message</h5>
                        <textarea name="comments" rows="4" maxlength="350" placeholder="Your message"></textarea>
                    </div>
                </div>
                <div class="form__button-container">
                    <button class="button button--form form__button">Submit</button>
                </div>
            </form>
        </main>
    </div>
</div>
<?php require_once __DIR__ . '/footer.php';
