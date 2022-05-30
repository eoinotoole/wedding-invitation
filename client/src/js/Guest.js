class Guest {
  _name;
  _menu;
  _dietaryRequirements;
  _entree;
  _main;
  _dessert;

  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setMenu(menu) {
    this._menu = menu;
  }

  getMenu() {
    return this._menu;
  }

  setDietaryRequirements(dietaryRequirements) {
    this._dietaryRequirements = dietaryRequirements;
  }

  getDietaryRequirements() {
    return this._dietaryRequirements;
  }

  setEntree(entree) {
    this._entree = entree;
  }

  getEntree() {
    return this.entree;
  }

  setMain(main) {
    this._main = main;
  }

  getMain() {
    return this.main;
  }

  setDessert(dessert) {
    this._dessert = dessert;
  }

  getDessert() {
    return this.dessert;
  }
}

export default Guest;
