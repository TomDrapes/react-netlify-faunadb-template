import { addDocument } from "../utils/src";

export const handler = async (event: { body: any }) => {
  return addDocument("User", JSON.parse(event.body));
};
