import { Template } from "meteor/templating";
import { Session } from "meteor/session";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { formatDate } from "/imports/util/client/client-functions.js";
import uimap from "/imports/util/client/uimap.js";


Template.registerHelper("isDirtyGH", () => Session.get("isDirty"));


Template.registerHelper("isEditModeGH", () => Session.get("isEditMode"));


Template.registerHelper("isAddingModeGH", () => FlowRouter.current().route.name.split(".").reverse()[0] === "add");


Template.registerHelper("setRequiredGH", (schema, fieldName) => {
  let returnValue = "";
  if (Session.equals("isEditMode", true)) {
    returnValue = schema.getDefinition(fieldName, ["optional"]).optional ? "" : "required";
  }
  return returnValue;
});


Template.registerHelper("setDisabledAttributeGH", () => (Session.equals("isEditMode", true) ? "" : "disabled"));


Template.registerHelper("formatDateGH", date => (typeof date === "undefined" ? "brak" : formatDate(date)));


Template.registerHelper("sectionHeaderTextGH", () => uimap[Session.get("uiSection")].header);
