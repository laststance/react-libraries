import type { categories } from "./categories.ts";

export type CategoryId = (typeof categories)[number]["id"];

export interface Library {
  id: string;
  name: string;
  monogram: string;
  category: CategoryId;
  kind: string;
  description: string;
  goodFor: string;
  caveat?: string;
  implementation?: string;
  /** Verified first-party documentation, when available for this entry. */
  documentation?: string;
  official: string;
  keywords: string[];
  /** Original URL numbers in the immutable migration inventory. */
  sourceIds: number[];
  references: string[];
  sourceStatus: "available" | "unavailable" | "unconfirmed";
}
