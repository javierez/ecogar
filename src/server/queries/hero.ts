import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountId?: bigint): string[] => {
  return ["Ponferrada"] as string[];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "COMPRA TU LIBERTAD",
  "subtitle": "No solo cambiaras de casa. Cambiaras de vida.",
  "backgroundMedia": [],
  "backgroundImage": "",
  "backgroundVideo": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/122/hero/background_1778175262077_Q6iIkg.mp4",
  "backgroundType": "video",
  "findPropertyButton": "AQUI ESTA TU HOGAR",
  "contactButton": "AQUI ESTAMOS NOSOTROS"
} as HeroProps | null;
}
