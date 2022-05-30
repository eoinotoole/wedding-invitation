class Answers {
  _email = "";
  _isAttending;
  _isStayingTheNight;
  _comments = "";
  _guests = [];

  getEmail() {
    return this._email;
  }

  getIsAttending() {
    return this._isAttending;
  }

  getIsStayingTheNight() {
    return this._isStayingTheNight;
  }

  getComments() {
    return this._comments;
  }

  getGuests() {
    return this._guests;
  }

  getAnswers() {
    return {
      email: this._email,
      isAttending: this._isAttending,
      isStayingTheNight: this._isStayingTheNight,
      comments: this._comments,
      guests: this.guests,
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
