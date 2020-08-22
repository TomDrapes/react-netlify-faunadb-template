import { query, Client } from 'faunadb';

export function addDocument(collection: any, data: any) {
  const q = query;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  };

  const { firstName, lastName, email, password } = data;

  const client = new Client({
    secret: process.env.FAUNADB_SERVER_SECRET ?? '',
  });

  return client
    .query(
      q.Create(q.Collection(collection), {
        credentials: {
          password: password,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
      }),
    )
    .then((res) => {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: 'Added document successfully',
          response: res,
        }),
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          message: 'Internal Server Error',
          error: err,
        }),
      };
    });
}
