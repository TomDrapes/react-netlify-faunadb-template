import { addDocument } from "utils";

export const handler = async (event: { body: any }) => {
  return addDocument("User", JSON.parse(event.body));
};
