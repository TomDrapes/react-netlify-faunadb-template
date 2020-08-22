# React-Native-Netlify-Template

Quick start boilerplate code for building react native apps using netlify

## Getting Started

This app is built using the jamStack and utilises Netlify and FaunaDb to allow for a serverless but stateful app.

### Requirements for local development

#### Install Netlify CLI

You will need Netlify CLI
`npm install -g netlify-cli`

You will need to be logged in on Netlify CLI
`netlify login`

### Create a database

Login to the FaunaDb Cloud console, then:

- Click 'New Database'
- Name the database
- Click 'Save'

### Create a database access key

In the Fauna Cloud Console:

- Click “Security” in the left navigation
- Click “New Key”
- Make sure that the “Database” field is set to “Netlify”
- Make sure that the “Role” field is set to “Admin”
- Enter “Netlify” as the “Key Name”
- Click “Save”

### Save the database access key

You need to save the access key somewhere safe, because there is no way to
retrieve it after you close the browser tab.

copy and rename the `.example.env` file to `.env` and replace the placeholder with your secret key. Make sure you don't commit this file.

### Set the database access key in your terminal environment

cd into `/api` and run the following command:
`export FAUNADB_SERVER_SECRET=YourFaunaDbSecretHere`

This will allow your app to use the secret key in your dev environment via `process.env.FAUNADB_SERVER_SECRET`

### Import GraphQL schema

In your FaunaDb Cloud console go to the GraphQl Tab for your newly created database and upload `schema.gql` found in the schema directory.

### Run Bootstrap

This will seed your FaunaDb database with John Algernon
`yarn bootstrap`

### Run the app

In the client directory run `yarn start`

### Resources

- https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/#setup-run-locally
- https://dev.to/studio_hungry/jamstack-and-the-power-of-serverless-with-faunadb-17ec
- https://www.apollographql.com/docs/react/get-started/
