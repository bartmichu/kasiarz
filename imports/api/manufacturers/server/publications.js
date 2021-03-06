import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { isNonEmptyString } from "/imports/util/server/server-functions.js";
import Manufacturers from "/imports/api/manufacturers/manufacturers.js";


Meteor.publish("manufacturers.list", function publishFunction() {
  const actualUserId = Meteor.userId();
  if (actualUserId) {
    const data = Manufacturers.find({ uzytkownikId: actualUserId }, { fields: { nazwa: 1, "adres.miejscowosc": 1, "adres.ulica": 1, dataModyfikacji: 1 } });

    if (data) {
      return data;
    }
  }

  return this.ready();
});


Meteor.publish("manufacturers.basic", function publishFunction() {
  const actualUserId = Meteor.userId();
  if (actualUserId) {
    const data = Manufacturers.find({ uzytkownikId: actualUserId }, { fields: { nazwa: 1 } });

    if (data) {
      return data;
    }
  }

  return this.ready();
});


Meteor.publish("manufacturers.one", function publishFunction(manufacturerId) {
  const actualUserId = Meteor.userId();
  if (actualUserId) {
    check(manufacturerId, isNonEmptyString);

    const data = Manufacturers.find({ uzytkownikId: actualUserId, _id: manufacturerId });

    if (data) {
      return data;
    }
  }

  return this.ready();
});
