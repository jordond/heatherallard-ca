import shortid from "shortid";

export function key() {
  return { key: shortid.generate() };
}

export const { generate } = shortid;
