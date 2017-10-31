import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import "/imports/ui/components/application_menu/application_menu_T.js";
import "/imports/ui/layouts/body_T.js";
import "/imports/ui/pages/login_T.js";
import "/imports/ui/pages/placeholder_T.js";
import "/imports/ui/pages/manufacturers_T.js";
import "/imports/ui/pages/manufacturers_item_T.js";
import "/imports/ui/pages/models_T.js";
import "/imports/ui/pages/models_item_T.js";


function setPreviousUrl() {
  const previousUrl = Session.get("previousUrl");
  const currentUrl = FlowRouter.current().path.split("?")[0];
  Session.set("previousUrl", previousUrl === currentUrl ? previousUrl : currentUrl);
}


FlowRouter.triggers.exit([setPreviousUrl]);


function redirectIfLoggedIn(context, redirect) {
  if (Meteor.userId() !== null) {
    // TODO: przekierowanie pod ostatnio odwiedzony url?
    redirect("/");
  }
}


FlowRouter.route("/", {
  name: "index",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "placeholder_T",
    });
  },
});


FlowRouter.route("/logowanie", {
  name: "login",
  triggersEnter: [redirectIfLoggedIn],
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "",
      app_main_section: "login_T",
    });
  },
});


const manufacturers = FlowRouter.group({
  prefix: "/producenci",
  name: "manufacturers",
});

manufacturers.route("/", {
  name: "manufacturers",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "manufacturers_T",
    });
  },
});

manufacturers.route("/id/:_id", {
  name: "manufacturers.manufacturer",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "manufacturers_item_T",
    });
  },
});

manufacturers.route("/dodaj", {
  name: "manufacturers.add",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "manufacturers_item_T",
    });
  },
});


const models = FlowRouter.group({
  prefix: "/modele",
  name: "models",
});

models.route("/", {
  name: "models",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "models_T",
    });
  },
});

models.route("/id/:_id", {
  name: "models.model",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "models_item_T",
    });
  },
});

models.route("/dodaj", {
  name: "models.add",
  action() {
    BlazeLayout.render("body_T", {
      app_menu_section: "application_menu_T",
      app_main_section: "models_item_T",
    });
  },
});
