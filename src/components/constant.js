import moment from "moment";

export const HEADERS = {
  testDriveDate: "Hvornår skal kunden prøvekøre?",
  enterDriverCPR: "Skriv førerens CPR-nummer",
  manualDriverInfo: "Skriv førerens oplysninger manuelt",
  missingInformation: "Indtast de manglende oplysninger",
  enterSamplePlateToMount: "Indtast den prøveplade du vil montere på bilen",
  takePicture: "Vi skal bruge et billede af kørekortet",
  flipPhoneToSign: "Vend telefonen om for at underskrive køresedlen",
  termsAndConditions: "Det her er vigtigt! Betingelser og samtykke",
  done: "Færdig!"
};

export const DANISH_MONTHS = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December"
];

export const DANISH_WEEKS = [
  "Mandag",
  "Tirsdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lørdag",
  "Søndag"
];

export const ONE_LETTER_WEEKS = ["M", "T", "C", "T", "F", "L", "S"];

export const DAYS_LIST_IN_WEEK = [1, 2, 3, 4, 5, 6, 7];

export const CURRENT_DATE_FORMAT = {
  year: moment().year(),
  month: moment().month(),
  week: moment().day(),
  day: moment().date(),
  weekNo: moment().week()
};

export const DAYS_INDEX = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6
};

export const SUB_HEADERS = {
  latestLicensePlates: "Seneste anvendte prøveplader",
  termsAndConditions: "Vilkår og betingelser"
};
export const INPUT_LABELS = {
  ssn: "CPR-nummer",
  name: "Navn Navnesen",
  address: "Adresse",
  cityZipcode: "Postnr By",
  phone: "Telefonnummer",
  email: "E-mailadresse",
  duration: "Varighed (Normalt 30 min)",
  firstName: "Navn",
  lastName: "Efternavn",
  street: "Gade",
  house: "Husnummer",
  zipCode: "Postnummer",
  city: "By",
  samplePlate: "Prøveplade"
};

export const BUTTON_LABELS = {
  addAppointment: "Add appointment",
  startCalendar: "Start Calendar",
  private: "Privat",
  advanced: "Erhverv",
  continue: "Fortsæt",
  addMoreDrivers: "Tilføj flere førere",
  search: "Søg",
  manual: "Manuel indtastning",
  camera: "Kamera",
  close: "Luk",
  yes: "Ja",
  no: "Nej",
  saveAndClose: "Gem og luk"
};

export const DESCRIPTIONS = {
  takePicture:
    "Vi skal kunne dokumentere prøvekørslen overfor de ansvarlige myndigheder og derfor skal vi bede dig om, at tage et billede af førerens kørekort med kameraet i din smartphone.",
  success:
    "Prøvekørslen er nu oprettet og køresedlen er sendt som en SMS til det oplyste telefonnummer.",
  termsAndConditions: [
    "Vi vil gerne have lov til at kontakte dig efter din prøvekørsel, for at følge op på din oplevelse, og sende vores nyhedsbrev, med nyheder, tilbud og artikler fra BMW.",
    "Herudover indsamler vi data til brug for dokumentation og analyse.",
    "Ovenstående er det grundlæggende i vores Vilkår og Betingelser.",
    "Du kan læse mere om vores vilkår og betingelser her.",
    "Vil Du acceptere vores vilkår og betingelser?"
  ]
};

export const BUTTON_MODES = {
  confirm: "confirm",
  manual: "manual",
  private: "private",
  advanced: "advanced"
};
