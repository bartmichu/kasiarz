import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";


Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: "kasiarz",
      password: "kasiarz",
      profile: {
        daneOsobowe: {
          imie: "Imię",
          nazwisko: "Nazwisko",
        },
      },
    });

    Accounts.createUser({
      username: "test",
      password: "test",
      profile: {},
    });
  }
});
