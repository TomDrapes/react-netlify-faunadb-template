import { query, Client } from "faunadb";
import { queryDB } from "utils";

interface LoginData {
  email: string;
  password: string;
}

export const handler = async (event: { body: string }) => {
  const { Login, Match, Index } = query;
  const data: LoginData = JSON.parse(event.body);

  const loginQuery = Login(Match(Index("users_by_email"), data.email), {
    password: data.password,
  });

  return queryDB(loginQuery);
};
