<?php include_once __DIR__ . '/header.php' ?>
<div class="page page--home">
    <main>
        <section class="intro">
            <!-- <img class="intro__leaves" src="/static/images/leaves1.svg" alt="Hanging leaves illustration" /> -->
            <!-- <img class="intro__leaves-2" src="/static/images/leaves2.svg" alt="Hanging leaves illustration" /> -->
            <div class="container">
                <div class="intro__content">
                    <span>Together with their families</span>
                    <h1 class="intro__large">William Pipe & <br /> Maeve O’<span class="intro__toole-hack">Toole</span></h1>
                    <div class="intro__section">
                        <span>Request the pleasure of your company</span>
                        <span>To celebrate their marriage at</span>
                    </div>
                    <div class="intro__section">
                        <span class="intro-info__venue">Ashley Park House</span>
                        <span>Nenagh, Co. Tipperary</span>
                        <span>Sunday <span class="number-size-hack">6</span><sup>th</sup> November <span class="number-size-hack">2022</span> at <span class="number-size-hack">3</span>pm</span>
                    </div>
                    <button class="intro__button button button--lg rsvp-trigger">RSVP</button>
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
                                <div class="schedule-list-item__activity">Guests have the ability to arrive from 2pm for early check-in</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">2:45pm</div>
                                <div class="schedule-list-item__activity">Take your seats in the Boathouse/Ceremony room</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">3:00pm</div>
                                <div class="schedule-list-item__activity">Ceremony starts</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">3:40pm</div>
                                <div class="schedule-list-item__activity">Check-in (for guests staying at AHP) Drinks and Canapes</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">6:00pm</div>
                                <div class="schedule-list-item__activity">Wedding breakfast; head to the Pavillion</div>
                            </li>
                            <li class="schedule-list-item">
                                <div class="schedule-list-item__time">9:00pm</div>
                                <div class="schedule-list-item__activity">Time to show off your moves, and hit the dancefloor (until late)</div>
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
                                <div class="schedule-list-item__activity">Breakfast in the pavillion (until 10:30am)</div>
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
        <section class="countdown">
            <div class="container">
                <h3 class="heading">Countdown to the big day</h3>
                <div class="countdown__container">
                    <div class="countdown__col">
                        <span class="countdown__value countdown__value--days"></span>
                        <span class="countdown__label">Days</span>
                    </div>
                    <span class="countdown__dots">:</span>
                    <div class="countdown__col">
                        <span class="countdown__value countdown__value--hours"></span>
                        <span class="countdown__label">Hours</span>
                    </div>
                    <span class="countdown__dots">:</span>
                    <div class="countdown__col">
                        <span class="countdown__value countdown__value--mins"></span>
                        <span class="countdown__label">Minutes</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="venue">
            <div class="container">
                <h3 class="heading">About the venue</h3>
                <p>See website:
                    <a href="https://ashleypark.com/our-history" target="_blank">https://ashleypark.com/our-history</a>
                </p>
            </div>
        </section>
    </main>
</div>
<?php require_once __DIR__ . '/footer.php';
