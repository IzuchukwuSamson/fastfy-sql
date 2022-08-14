const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const db = require('./utils/db');
const chalk = require('chalk');

db.authenticate()
  .then(() => console.log(chalk.yellow('DB Connected Successfully')))
  .catch((err) => console.log(chalk.red(err)));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(chalk.blueBright(`App running on port ${port}...`));
});
