import { github } from "./github";
import { discord } from "./discord";
import { facebook } from "./facebook";
import { youtube } from "./youtube";

export const i: { [key: string]: () => string } = {
  github,
  discord,
  facebook,
  youtube,
};
