import { IBabyNames } from "../IBabyNames";

/**
 *
 * @param arr | array of BabyNames objects
 * @param searchTerm | string to filter name on
 * @param bannedTerms | list of banned names to exclude from list
 * @returns | array of BabyName objects where name includes search term
 */
export function applyNameSearchFilter(
  arr: IBabyNames[],
  searchTerm: string,
  bannedTerms?: string[]
): IBabyNames[] {
  return arr
    .filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((x) => (bannedTerms ? bannedTerms.indexOf(x.name) === -1 : true));
}
