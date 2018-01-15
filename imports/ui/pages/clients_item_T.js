import { Session } from "meteor/session";
import { Template } from "meteor/templating";
import { Tracker } from "meteor/tracker";
import { $ } from "meteor/jquery";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { getAddingModeFromRoute, setEditMode, setFormLabels, setFormValues, setDirty, jqEscapeAndHash } from "/imports/util/client/client-functions.js";
import voivodeships from "/imports/util/dictionaries/voivodeships.js";
import Clients from "/imports/api/clients/clients.js";
import "/imports/ui/components/loading/loading_T.js";
import "/imports/ui/components/item_menu/item_menu_cancel_T.js";
import "/imports/ui/components/item_menu/item_menu_close_T.js";
import "/imports/ui/components/item_menu/item_menu_delete_T.js";
import "/imports/ui/components/item_menu/item_menu_edit_T.js";
import "/imports/ui/components/item_menu/item_menu_save_T.js";
import "/imports/ui/components/list_placeholder/list_placeholder_T.js";
import "/imports/ui/components/list_menu/list_menu_add_T.js";
import "/public/semantic/semantic.min.js";
import "./clients_item_T.html";


Template.clients_item_T.onCreated(() => {
  setEditMode(getAddingModeFromRoute());
});


Template.clients_item_T.rendered = () => {
  const template = Template.instance();
  if (getAddingModeFromRoute()) {
    setFormLabels();
    $(jqEscapeAndHash("dropdown-adres.wojewodztwo")).dropdown({
      onChange() {
        if (Session.equals("isEditMode", true)) {
          setDirty(true);
        }
      },
    });
  } else {
    const clientId = FlowRouter.getParam("_id");
    template.subscribe("clients.private", clientId, () => {
      Tracker.afterFlush(() => {
        setFormLabels();
        setFormValues();
        $(jqEscapeAndHash("dropdown-adres.wojewodztwo")).dropdown({
          onChange() {
            if (Session.equals("isEditMode", true)) {
              setDirty(true);
            }
          },
        });
      });
    });
  }
};


Template.clients_item_T.helpers({
  getDataH() {
    return Clients.findOne({ _id: FlowRouter.getParam("_id") });
  },
  voivodeshipsH() {
    return voivodeships;
  },
});


Template.clients_item_T.events({
  submit(event) {
    event.preventDefault();
  },
  "input input, input textarea": () => {
    if (Session.equals("isEditMode", true)) {
      setDirty(true);
    }
  },
  "blur input, blur textarea": (event) => {
    event.target.value = event.target.value.trim();
  },
});