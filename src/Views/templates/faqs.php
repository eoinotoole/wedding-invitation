<?php
require_once dirname(__DIR__, 1) . '/utils/faq-list.php';
include_once __DIR__ . '/header.php';

const PLUS_ICON = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52' xml:space='preserve'><path d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z'/><path d='M38.5 25H27V14a1 1 0 1 0-2 0v11H13.5a1 1 0 1 0 0 2H25v12a1 1 0 1 0 2 0V27h11.5a1 1 0 1 0 0-2z'/></svg>";
const MINUS_ICON = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52' xml:space='preserve'><path d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z'/><path d='M39 25H13a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z'/></svg>";
?>

<div class="container">
    <main class="article-page">
        <h1 class="heading heading--page">FAQs</h1>
        <div class="faqs">
            <ul class="faq-list">
                <?php
                foreach (FAQ_LIST as $faq) {
                    $question = $faq['question'];
                    $answer = $faq['answer'];

                    echo "
                        <li class='faq-list__item'>
                            <dl class='faq-dropdown'>
                                <dt class='faq-dropdown__q'>
                                    $question
                                    <div class='faq-dropdown__icon'>" . PLUS_ICON . "</div>
                                </dt>
                                <dd class='faq-dropdown__a'><p>$answer</p></dd>
                            </dl>
                        </li>
                        ";
                }
                ?>
            </ul>
        </div>
    </main>
</div>
</div>
<?php require_once __DIR__ . '/footer.php';
