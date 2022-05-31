class Answers {
  _email = "";
  _isAttending;
  _isStayingTheNight;
  _comments = "";
  _guests = [];

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }

  getIsAttending() {
    return this._isAttending;
  }

  setIsAttending(isAttending) {
    this._isAttending = isAttending;
  }

  getIsStayingTheNight() {
    return this._isStayingTheNight;
  }

  setIsStayingTheNight(isStayingTheNight) {
    this._isStayingTheNight = isStayingTheNight;
  }

  getComments() {
    return this._comments;
  }

  setComments(comments) {
    this._comments = comments;
  }

  getGuests() {
    return this._guests;
  }

  setGuests(guests) {
    this._guests = guests;
  }

  _getGuestsForSend(guests) {
    return guests.map(
      ({ _name, _menu, _dietaryRequirements, _entree, _main, _dessert }) => ({
        name: _name,
        menu: _menu,
        dietaryRequirements: _dietaryRequirements,
        entree: _entree,
        main: _main,
        dessert: _dessert,
      })
    );
  }

  getAnswers() {
    return {
      email: this._email,
      isAttending: this._isAttending,
      isStayingTheNight: this._isStayingTheNight,
      comments: this._comments,
      guests: this._getGuestsForSend(this._guests),
    };
  }

  setAnswers({ email, isAttending, isStayingTheNight, comments, guests }) {
    this._email = email;
    this._isAttending = isAttending;
    this._isStayingTheNight = isStayingTheNight;
    this._comments = comments;
    this._guests = guests;
  }
}

export default Answers;
