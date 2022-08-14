const Gig = require('../models/gigModel');

exports.getAll = async (req, res) => {
  const gigs = await Gig.findAll();
  res.json({
    gigs,
  });
};

// exports.getAllOwners = async (req, res) => {

//     const owners = await Owner.find()
//     res.status(200).json({
//         status: 'Success',
//         result: owners.length,
//         data: {
//             owners
//         }

//     })
// })
