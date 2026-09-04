import { GeistSans } from "geist/font/sans";
import {
  Rubik,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const rubik = Rubik({ subsets: ["latin"], display: "swap", variable: "--font-rubik" });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  rubik: { loader: rubik, cssVar: "var(--font-rubik)" },
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
