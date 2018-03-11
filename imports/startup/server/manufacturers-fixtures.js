/**
 * TODO: usunąć w wersji produkcyjnej
 */

import { Meteor } from "meteor/meteor";
import Manufacturers from "/imports/api/manufacturers/manufacturers.js";


Meteor.startup(() => {
  if (Manufacturers.find().count() === 0) {
    const userId = Meteor.users.findOne({ username: "demo" })._id;
    const dummyData = [
      {
        nazwa: "Envire",
        adres: {
          ulica: "Melrose Street",
          miejscowosc: "Longoria",
          kodPocztowy: 94947,
        },
      },
      {
        nazwa: "Rodeology",
        adres: {
          ulica: "Kossuth Place",
          miejscowosc: "Brule",
          kodPocztowy: 28515,
        },
      },
      {
        nazwa: "Hopeli",
        adres: {
          ulica: "Sheffield Avenue",
          miejscowosc: "Dellview",
          kodPocztowy: 40579,
        },
      },
      {
        nazwa: "Ultrasure",
        adres: {
          ulica: "Fuller Place",
          miejscowosc: "Vienna",
          kodPocztowy: 17384,
        },
      },
      {
        nazwa: "Zilla",
        adres: {
          ulica: "Montgomery Street",
          miejscowosc: "Chestnut",
          kodPocztowy: 73989,
        },
      },
      {
        nazwa: "Unia",
        adres: {
          ulica: "Duryea Place",
          miejscowosc: "Detroit",
          kodPocztowy: 86526,
        },
      },
    ];

    dummyData.forEach((manufacturer) => {
      manufacturer.uzytkownikId = userId;

      manufacturer.dataUtworzenia = new Date();
      manufacturer.dataModyfikacji = manufacturer.dataUtworzenia;

      manufacturer.dodatkoweInformacje = "dummy data";

      Manufacturers.insert(manufacturer);
    });
  }
});
