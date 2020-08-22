/* bootstrap database in your FaunaDB account */
const faunadb = require("faunadb");
const chalk = require("chalk");
const insideNetlify = insideNetlifyBuildContext();
const q = faunadb.query;

console.log(chalk.cyan("Creating your FaunaDB Database...\n"));

// 1. Check for required enviroment variables
if (!process.env.FAUNADB_SERVER_SECRET) {
  console.log(
    chalk.yellow(
      "Required FAUNADB_SERVER_SECRET enviroment variable not found."
    )
  );
  console.log(
    `Make sure you have created your Fauna databse with "netlify addons:create fauna"`
  );
  console.log(`Then run "npm run bootstrap" to setup your database schema`);
  if (insideNetlify) {
    process.exit(1);
  }
}

// Has var. Do the thing
if (process.env.FAUNADB_SERVER_SECRET) {
  createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
    console.log("Fauna Database schema has been created");
    console.log('Claim your fauna database with "netlify addons:auth fauna"');
  });
}

/* idempotent operation */
function createFaunaDB(key) {
  console.log("Create the fauna database schema!");
  const client = new faunadb.Client({
    secret: key,
  });

  return client
    .query(
      q.Create(q.Collection("User"), {
        data: {
          firstName: "John",
          lastName: "Algernon",
          email: "john@email.com",
          password: "password",
          isVerified: true,
        },
      })
    )
    .then(() => console.log("Seeded John Algernon"))
    .catch((err) => console.log(chalk.red("Failed to seed data"), err));
}

/* util methods */

// Test if inside netlify build context
function insideNetlifyBuildContext() {
  if (process.env.DEPLOY_PRIME_URL) {
    return true;
  }
  return false;
}
