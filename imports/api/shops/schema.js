import SimpleSchema from "simpl-schema";
import Shops from "/imports/api/shops/shops.js";


const shopSchema = new SimpleSchema({
  uzytkownikId: {
    type: String,
    label: "ID użytkownika",
    min: 1,
    optional: false,
    denyUpdate: true,
  },
  nazwa: {
    type: String,
    label: "Pełna nazwa",
    min: 1,
    max: 100,
    optional: false,
  },
  nip: {
    type: String,
    label: "NIP",
    min: 1,
    max: 100,
    optional: false,
  },
  regon: {
    type: String,
    label: "REGON",
    min: 1,
    max: 100,
    optional: true,
  },
  pesel: {
    type: String,
    label: "PESEL",
    min: 1,
    max: 100,
    optional: true,
  },
  adres: {
    type: Object,
  },
  "adres.kraj": {
    type: String,
    label: "Kraj",
    min: 1,
    max: 100,
    optional: false,
  },
  "adres.wojewodztwo": {
    type: String,
    label: "Województwo",
    min: 1,
    max: 100,
    optional: false,
  },
  "adres.gminaDzielnica": {
    type: String,
    label: "Gmina/dzielnica",
    min: 1,
    max: 100,
    optional: true,
  },
  "adres.ulica": {
    type: String,
    label: "Ulica",
    min: 1,
    max: 100,
    optional: true,
  },
  "adres.nrDomu": {
    type: String,
    label: "Numer domu",
    min: 1,
    max: 100,
    optional: true,
  },
  "adres.nrLokalu": {
    type: String,
    label: "Numer lokalu",
    min: 1,
    max: 100,
    optional: true,
  },
  "adres.miejscowosc": {
    type: String,
    label: "Miejscowość",
    min: 1,
    max: 100,
    optional: false,
  },
  "adres.kodPocztowy": {
    type: String,
    label: "Kod pocztowy",
    min: 1,
    max: 100,
    optional: false,
  },
  "adres.poczta": {
    type: String,
    label: "Poczta",
    min: 1,
    max: 100,
    optional: false,
  },
  "adres.skrytkaPocztowa": {
    type: String,
    label: "Skrytka pocztowa",
    min: 1,
    max: 100,
    optional: true,
  },
  telefon: {
    type: String,
    label: "Telefon",
    min: 1,
    max: 100,
    optional: true,
  },
  email: {
    type: String,
    label: "E-mail",
    min: 1,
    max: 100,
    optional: true,
  },
  dodatkoweInformacje: {
    type: String,
    label: "Dodatkowe informacje",
    max: 300,
    optional: true,
  },
  dataUtworzenia: {
    type: Date,
    label: "Data utworzenia",
    optional: true,
    denyUpdate: true,
  },
  dataModyfikacji: {
    type: Date,
    label: "Data modyfikacji",
    optional: true,
  },
});


Shops.attachSchema(shopSchema);
