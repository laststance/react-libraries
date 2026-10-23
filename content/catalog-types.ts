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
  official: string;
  keywords: string[];
  /** Original URL numbers in the immutable migration inventory. */
  sourceIds: number[];
  references: string[];
  sourceStatus: "available" | "unavailable" | "unconfirmed";
}
