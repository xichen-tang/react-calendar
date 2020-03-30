export const PAGE_INDEX = {
  START_PAGE: 0,
  MONTH_VIEW_1_2: 1,
  MONTH_VIEW_2_2: 2,
  DAY_VIEW_1_2: 3,
  DAY_VIEW_2_2: 4,
  SEARCH_CUSTOMER: 5,
  ENTER_CUSTOMER_MANUALLY: 6,
  CHOOSE_LICENSE_PLATE: 7,
  LAST_INFORMATIONS: 8,
  PICTURE: 9,
  TERMS_AND_CONDITIONS: 10,
  SIGNATURE: 11,
  NEW_APPOINTMENT: 12,
  APPOINTMENT_1: 13,
  APPOINTMENT_2_1: 14,
  APPOINTMENT_2_2: 15,
  DONE: 16
};

export const HEADERS = {
  calendar: "Kalender",
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

export const FLOW_MODES = {
  flow1: "Add-Appointment-Flow",
  flow2: "Start-Calendar-Flow"
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

export const ONE_LETTER_WEEKS = ["M", "T", "O", "T", "F", "L", "S"];

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
  manual: "manual"
};

export const PERSONAL_MODES = ["private", "advanced"];

export const DAYS_COUNT_IN_WEEK = 7;

export const DAY_LENGTH = 24;

export const SLOT_CONFIG = {
  nextSlot: 30,
  startTime: "00:00",
  endTime: "23:59",
  heightPerThirtyMins: 36
};
