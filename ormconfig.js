console.log('process.env.DATABASE_URL :>> ', process.env.DATABASE_URL);
module.exports = {

  "type": "mysql",
  // "url" : "mysql://root:root@localhost:3306/oni",
  "host":"localhost",
  "port":"3306",
  "username": "root",
  "password": "root",
  "database": "oni",
  "logging": true,
  "entities": [
    //"dist/models/**/*.js"
    "src/models/**/*.ts"
 ],
 "migrations": [
  //"dist/database/migrations/**/*.js"
  "src/database/migrations/**/*.ts"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models/"
  }
}
