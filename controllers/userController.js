const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({
    status: true,
    message: 'sucess',
    result: users.length,
    users,
  });
};

exports.getUser = async (req, res) => {
  let user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: true,
    message: 'sucess',
    user,
  });
};

exports.createUser = async (req, res) => {
  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    comments: req.body.comments,
  });
  res.status(201).json({
    newUser: user,
  });
};

exports.updateUser = async (req, res) => {
  const user = await User.upsert({
    id: req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    comments: req.body.comments,
  });
  res.status(200).json({
    user,
  });
};

exports.deleteUser = async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({
    user: null,
  });
};

//   { upsert: true }
// exports.createUser = (req, res) => {};

// const mysql = require('mysql2');

// const DB = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// DB.connect((err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Connected to DB');
// });

// exports.getAll = async (req, res) => {
//   let users = 'SELECT * FROM user';
//   await DB.query(users, (err, result) => {
//     if (err) throw err;
//     // console.log(result);
//     res.send(result);
//   });
// };

// exports.createUser = (req, res) => {
//   // let user = 'INSERT INTO user(first_name, last_name, email, phone, comments)';
//   // DB.query(user, (err, result) => {
//   //   if (err) throw err;
//   //   // console.log(result);
//   //   res.status(201).send(result);
//   // });
// };
