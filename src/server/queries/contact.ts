

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
  /**
   * Set by the CRM contact config. Unused by this template, but declared so the
   * generated site — which inlines contact_props verbatim as a typed literal —
   * still compiles.
   */
  whatsappNumber?: string;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos esperando tu llamada",
  "messageForm": true,
  "address": false,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": false,
  "offices": [{
  "id": "OlnINS_CmHQ_Co3xHJmpg",
  "name": "Inmobiliaria Ecogar",
  "address": {
  "street": "C/ Isaac Peral 1, entreplanta, oficina - 24402 Ponferrada",
  "city": "Ponferrada",
  "state": "Ponferrada",
  "country": "España",
  "postalCode": "24402"
},
  "phoneNumbers": {
  "main": "+34665203040",
  "sales": ""
},
  "emailAddresses": {
  "info": "hola@ecogar.es",
  "sales": ""
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: 9:00 - 20:00",
  "saturday": "Sábados: 9:00 - 14:00",
  "sunday": "Domingos: Cerrado"
},
  "mapUrl": "google.com",
  "isDefault": true
}],
  "whatsappNumber": "+34665203040"
} as ContactProps | null;
}
