import { Template } from "meteor/templating";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { ReactiveVar } from "meteor/reactive-var";
import Offices from "/imports/api/offices/offices.js";
import { sortHandler } from "/imports/util/client/client-functions.js";
import "/imports/ui/components/list_placeholder/list_placeholder_T.js";
import "/imports/ui/components/loading/loading_T.js";
import "/imports/ui/components/list_menu/list_menu_add_T.js";
import "./offices_T.html";


Template.offices_T.onCreated(() => {
  Template.instance().subscribe("offices.private", "");
  // TODO: ustawianie wartości domyślnej
  Template.instance().sorfField = new ReactiveVar("dataModyfikacji");
  Template.instance().sortOrder = new ReactiveVar("1");
});


Template.offices_T.helpers({
  getSubscriptionDataH() {
    const selector = {};
    selector[Template.instance().sorfField.get()] = Template.instance().sortOrder.get();
    return Offices.find({}, { sort: selector });
  },
  numberOfElementsH() {
    return Offices.find().count();
  },
  isEmptyCollectionH() {
    return Offices.find().count() === 0;
  },
  getLabelH(field) {
    return Offices.simpleSchema().label(field);
  },
});


Template.offices_T.events({
  submit(event) {
    event.preventDefault();
  },
  "click tr": (event) => {
    FlowRouter.go("offices.office", { _id: event.currentTarget.id });
  },
  "click th": (event, template) => sortHandler(event, template),
});