import { IBabyNames } from "../IBabyNames";

export function compareBabyNames(a: IBabyNames, b: IBabyNames): number {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
