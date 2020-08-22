import { Client, QueryOptions, Expr } from 'faunadb';

export function queryDB(faunaQuery: Expr, queryOptions?: QueryOptions) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  };

  const client = new Client({
    secret: queryOptions?.secret ?? process.env.FAUNADB_SERVER_SECRET ?? '',
  });

  return client
    .query(faunaQuery)
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
