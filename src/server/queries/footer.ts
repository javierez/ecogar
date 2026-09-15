
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Inmobiliaria Ecogar",
  "description": "Estas a un paso de acceder a tu nueva vida",
  "socialLinks": {

},
  "officeLocations": [],
  "quickLinksVisibility": {
  "inicio": false,
  "propiedades": false,
  "nosotros": false,
  "reseñas": true,
  "contacto": false,
  "comprar": false,
  "alquilar": false,
  "vender": false
},
  "propertyTypesVisibility": {
  "pisos": true,
  "casas": true,
  "locales": true,
  "solares": true,
  "garajes": false
},
  "copyright": "© 2026 Inmobiliaria Ecogar"
} as FooterProps | null;
}
