const FIELD_MENU_ITEM_MAP = {
  standard: {
    entree: [
      {
        name: "pate",
        heading: "Homemade Chicken Liver Pate",
        description:
          "Served with brioche bread, redcurrant purée and fresh garden salad (1,9,11)",
      },
      {
        name: "cheese",
        heading: "Baked Goat’s Cheese & Avocado",
        description:
          "Wrapped in filo pastry & served with basil pesto (1,8,9,11)",
      },
    ],
    main: [
      {
        name: "bass",
        heading: "Pan fried seabass",
        description: "With a red pepper and sun dried tomato sauce (3,4,9)",
      },
      {
        name: "lamb",
        heading: "Roast lamb",
        description: "With garlic and rosemary jus (13)",
      },
    ],
    dessert: [
      {
        name: "brule",
        heading: "Crème Brûlée",
        description: "With a sugar crust & berry compote (3,9)",
      },
      {
        name: "torte",
        heading: "Pear and almond torte",
        description: "With vanilla bean ice cream (1,3,8,9)",
      },
    ],
  },
  vegan: {
    entree: [
      {
        name: "",
        heading: "House Salad",
        description: "With sun dried tomatoes & chickpeas (11)",
      },
    ],
    main: [
      {
        name: "",
        heading: "Roast Vegetable Wellington",
        description: "With mild sriracha, ginger & tomato sauce (1,3)",
      },
    ],
    dessert: [
      {
        name: "",
        heading: "Vegan Chocolate Cake",
        description: "With a vegan coconut ice cream (8)",
      },
    ],
  },
  children: {
    entree: [
      {
        name: "",
        heading: "House Salad",
        description: "With sun dried tomatoes & chickpeas (11)",
      },
    ],
    main: [
      {
        name: "",
        heading: "Roast Vegetable Wellington",
        description: "With mild sriracha, ginger & tomato sauce (1,3)",
      },
    ],
    dessert: [
      {
        name: "",
        heading: "Vegan Chocolate Cake",
        description: "With a vegan coconut ice cream (8)",
      },
    ],
  },
};

export const getChosenDishFromFieldMap = (menu, course, choice) => {
  if (menu === "standard")
    return FIELD_MENU_ITEM_MAP[menu][course].find(
      (item) => item.name === choice
    );
  return FIELD_MENU_ITEM_MAP[menu][course][0];
};

export const getAvailableDishesFromFieldMap = (menu, course) =>
  FIELD_MENU_ITEM_MAP[menu][course];
