class Countdown {
  _container;
  _weddingDayTime = 1667692800000; // 06/11/2022:00:00 converted to milliseconds
  _timeLeft; // milliseconds until _weddingDayTime
  _daysLeft;
  _hoursLeftToday;
  _leftOverMinutes;
  _leftOverSeconds;
  _tick;

  constructor() {
    const container = document.querySelector(".countdown__container");
    if (!container) return;

    this._container = container;
    this._init();
  }

  _init() {
    const currentTime = new Date().getTime();
    this._timeLeft = this._weddingDayTime - currentTime;

    if (this._timeLeft < 1) {
      this._endCountdown();
      return;
    }

    this._setDisplayValues();
    this._render();
    this._tick = setInterval(this._handleTick.bind(this), 1000);
  }

  _handleTick() {
    if (this._timeLeft < 1) {
      clearInterval(this._tick);
      this._endCountdown();
      return;
    }

    this._setDisplayValues();
    if (this._leftOverSeconds === 59) this._render();
    this._timeLeft -= 1000;
  }

  _setDisplayValues() {
    const msDay = 1000 * 60 * 60 * 24;
    const todayMs = new Date().setHours(0, 0, 0, 0);
    const tomorrowMs = todayMs + msDay;
    const currentTimeMs = new Date().getTime();
    const msLeftToday = tomorrowMs - currentTimeMs;

    if (this._timeLeft < 1) {
      this._endCountdown();
      return;
    }

    const msHour = 1000 * 60 * 60;
    const msMin = 1000 * 60;
    const msSec = 1000;
    this._daysLeft = Math.floor(this._timeLeft / msDay);
    this._hoursLeftToday = Math.floor(msLeftToday / msHour);
    this._leftOverMinutes = Math.floor((msLeftToday % msHour) / msMin);
    this._leftOverSeconds = Math.floor((msLeftToday % msMin) / msSec);

    // console.log(
    //   this._daysLeft,
    //   this._hoursLeftToday,
    //   this._leftOverMinutes,
    //   this._leftOverSeconds
    // );
  }

  _render() {
    const daysEl = document.querySelector(".countdown__value--days");
    const hoursEl = document.querySelector(".countdown__value--hours");
    const minsEl = document.querySelector(".countdown__value--mins");

    daysEl.innerHTML =
      this._daysLeft < 10 ? `0${this._daysLeft}` : this._daysLeft;
    hoursEl.innerHTML =
      this._hoursLeftToday < 10
        ? `0${this._hoursLeftToday}`
        : this._hoursLeftToday;
    minsEl.innerHTML =
      this._leftOverMinutes < 10
        ? `0${this._leftOverMinutes}`
        : this._leftOverMinutes;
  }

  _endCountdown() {
    this._daysLeft = 0;
    this._hoursLeftToday = 0;
    this._leftOverMinutes = 0;
    this._render();
  }
}

export default Countdown;
