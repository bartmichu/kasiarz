import { Session } from "meteor/session";
import { FlowRouter } from "meteor/kadira:flow-router";
import { $ } from "meteor/jquery";


const setDirty = state => Session.set("isDirty", state);


const setEditMode = (state) => {
  Session.set("isDirty", false);
  Session.set("isEditMode", state);
};


const getAddingModeFromRoute = () => FlowRouter.current().route.name.split(".").reverse()[0] === "add";


const resetSessionVariables = () => {
  Session.set("previousUrl", "");
  Session.set("isDirty", false);
  Session.set("isEditMode", false);
};


const routeBack = () => {
  FlowRouter.go(Session.get("previousUrl") || "index");
};


const setFormLabels = (schema) => {
  $("label").each((index, element) => {
    const label = $(element);
    if (label.attr("id") && (label.attr("id").split("-")[0] === "etykieta_pola")) {
      $(label).text(schema.label(label.attr("for")));
    }
  });
};


export {
  setDirty,
  resetSessionVariables,
  setEditMode,
  getAddingModeFromRoute,
  setFormLabels,
  routeBack,
};
