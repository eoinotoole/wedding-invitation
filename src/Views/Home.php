<?php

include __DIR__ . '/utils/location-links.php';
require_once __DIR__ . '/includes/header.php';

?>

<div class="page">
    <!-- <button class="menu-button">Menu</button>
    <div class="menu">
        <menu class="menu-list">
            <li class="menu-list__item"><button class="menu-list__button">order of the day</button></li>
            <li class="menu-list__item"><button class="menu-list__button">accommodation</button></li>
            <li class="menu-list__item"><button class="menu-list__button">venue</button></li>
            <li class="menu-list__item"><button class="menu-list__button">travel</button></li>
        </menu>
    </div> -->
    <main>
        <section class="intro">
            <img class="intro__leaves" src="/static/images/leaves1.svg" alt="Hanging leaves illustration" />
            <img class="intro__leaves-2" src="/static/images/leaves2.svg" alt="Hanging leaves illustration" />
            <div class="container">
                <div class="intro__content">
                    <h5 class="intro__small">The wedding of</h5>
                    <h1 class="intro__large display lower">Maeve O’Toole <br />&<br /> William Pipe</h1>
                    <h2 class="intro__info">
                        <span class="intro-info__date">Sunday 6th November 2022</span>
                        <span class="intro-info__venue">Ashley Park House</span>
                        <span class="intro-info__town">Nenagh, Co. Tipperary</span>
                    </h2>
                    <button class="intro__button button button--lg button--rsvp-trigger">RSVP</button>
                </div>
            </div>
        </section>

        <section class="schedule">
            <div class="container">
                <h3 class="heading">Order of the day</h3>
                <div class="schedule__dates">
                    <div class="schedule-date">
                        <div class="schedule-date__date">
                            <time class="schedule-date__time">Sunday 6th November</time>
                        </div>
                        <ul class="schedule-list">
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">2.00pm</div>
                                <div class="schedule-list-item__activity">Arrival at Ashley House Park for check-in</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">3:00pm</div>
                                <div class="schedule-list-item__activity">Take your seats in the Ceremony Room</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">3:30pm</div>
                                <div class="schedule-list-item__activity">Check-in (for guests staying at AHP) Drinks and Canapés</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">6:00pm</div>
                                <div class="schedule-list-item__activity">Wedding breakfast; head to the Pavillion</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">9:00pm</div>
                                <div class="schedule-list-item__activity">Hitting the dancefloor</div>
                            </li>
                        </ul>
                    </div>
                    <div class="schedule-date">
                        <div class="schedule-date__date">
                            <time class="schedule-date__time">Monday 7th November</time>
                        </div>
                        <ul class="schedule-list">
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">8:30am</div>
                                <div class="schedule-list-item__activity">Breakfast in the Pavillion</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">11:00am</div>
                                <div class="schedule-list-item__activity">Check out and departure</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="accommodation">
            <div class="container">
                <img class="accommodation__leaves" src="/static/images/leaves5.svg" width="140" height="79" alt="Leaves illustration" />
                <h3 class="heading">Accommodation</h3>
                <p>All wedding guests have a room reserved for the night of the wedding.
                    If a room is not required, please let us know asap.</p>
                <p>All rooms are onsite and have large double beds with ensuite bathrooms.
                    Some rooms are family rooms and can accommodate more than a couple sharing
                    (friends staying together etc). We (Maeve & Will) will be allocating all rooms for our guests.
                    Therefore, please do not contact the venue with any specific requests, just let us know and we
                    will do our best to ensure your request is met.</p>
                <p>Rates for the room are €95per person for Bed & Breakfast. All rooms are paid for on check-out
                    on Monday 7th Nov.</p>
            </div>
        </section>

        <section class="venue">
            <img class="venue__leaves-1" src="/static/images/leaves3.svg" alt="Hanging leaves illustration" />
            <img class="venue__leaves-2" src="/static/images/leaves4.svg" alt="Hanging leaves illustration" />
            <div class="container">
                <h3 class="heading">About the venue</h3>
                <p>See website:
                    <a href="https://ashleypark.com/our-history" target="_blank">https://ashleypark.com/our-history</a>
                </p>
            </div>
        </section>

        <section class="travel">
            <div class="container">
                <h3 class="heading">Travel</h3>
                <div class="travel-info">
                    <h5 class="travel-info__heading">Overseas</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div class="travel__locations travel__grey-wrap">
                <div class="container container--lg">
                    <ul class="travel-list">
                        <li class="travel-list__item">Shannon (nearest airport) <br />1 hour drive to Ashley Park House<a class="travel-list__link" href="<?php echo LOCATION_SHANNON; ?>" target="_blank">See map</a></li>
                        <li class="travel-list__item">Dublin airport <br /> 1 hour 50 mins drive<a class="travel-list__link" href="<?php echo LOCATION_DUBLIN; ?>" target="_blank">See map</a></li>
                        <li class="travel-list__item">Nenagh (nearest town) <br /> 10 min drive<a class="travel-list__link" href="<?php echo LOCATION_NENAGH; ?>" target="_blank">See map</a></li>
                        <li class="travel-list__item">Limerick (nearest city) <br /> 35 min drive<a class="travel-list__link" href="<?php echo LOCATION_LIMERICK; ?>" target="_blank">See map</a></li>
                    </ul>
                </div>
            </div>
            <div class="container">
                <p>If you are travelling to Ireland on Saturday, we recommend staying in Limerick on the Saturday night.
                    There are numerous hotels, restaurants to enjoy a nice meal out on Sat night, and a multitude of hairdressers
                    and beauty parlour for those who want to “glam up” the morning of the Big Day.</p>
                <p>A taxi can be arranged by your hotel to get from Limerick to the venue (approx. cost of €x)</p>
            </div>
            <div class="travel__taxis travel__grey-wrap">
                <div class="container container--lg">
                    <ul class="travel-list">
                        <li class="travel-list__item">All route taxis <br />+353 61 311111<a class="travel-list__link" href="+353 61 311111">Call</a></li>
                        <li class="travel-list__item">Fixed price taxis <br />+353 61 313131<a class="travel-list__link" href="+353 61 313131">Call</a></li>
                        <li class="travel-list__item">Shannon airport taxis <br /> +353 61 332266<a class="travel-list__link" href=" +353 61 332266">Call</a></li>
                    </ul>
                </div>
            </div>
</div>
</section>
</main>
</div>
<?php require_once __DIR__ . '/includes/footer.php';
