// // app.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const validateAadhar = require('./validations/aadhar'); // Assuming you have Aadhar validation logic
// const validatePanCard=require('./validations/pancard');
// const validateVoterId=require('./validations/voterid')
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// //aadhar
// app.post('/validateAadhar', (req, res) => {
//   const { aadhar } = req.body;

//   // Validate Aadhar
//   const isAadharValid = validateAadhar(aadhar);

//   // Respond with validation result
//   res.json({ valid: isAadharValid });
// });

// //pancard
// app.post('/validatePanCard', (req, res) => {
//     const { panCard } = req.body;
  
//     // Validate PAN Card
//     const isPanCardValid = validatePanCard(panCard);
  
//     // Respond with validation result
//     res.json({ valid: isPanCardValid });
//   });

//   //voterId
//   app.post('/validateVoterId', (req, res) => {
//     const { voterId } = req.body;
  
//     // Validate Voter ID
//     const isVoterIdValid = validateVoterId(voterId);
  
//     // Respond with validation result
//     res.json({ valid: isVoterIdValid });
//   });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const { check, validationResult } = require('express-validator');
const cors=require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());
// Validation middleware for Aadhar input
const aadharValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('aadhar_number').notEmpty().withMessage('aadharnumber is required'),
];

// Route for Aadhar validation
app.post('/validate-aadhar', aadharValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }if(aadharRegex = /^\d{12}$/){
    return res.send(aadharRegex.test(aadhar_number));
  }else{
    res.status(400).json({errors: errors.array()})
  }

  // If validation passes, handle the Aadhar validation logic here
  const { name, dob,aadhar_number } = req.body;
  
  // Add your logic to validate Aadhar details (name and dob)

  // Dummy response for demonstration purposes
  res.json({ success: true, message: 'Aadhar details are valid' });
});

const pancardValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('pan_number').notEmpty().withMessage('Pancard number is required'),
];
panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
// Route for Pancard validation
app.post('/validate-pancard', pancardValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    console.log(errors)
  }
  if(!panCardRegex){
    return res
        .status(404)
        .send({ auth: false, message: "Sorry! No data found." });
  }

  // If validation passes, handle the Pancard validation logic here
  const { name, dob, pan_number } = req.body;
  // Add your logic to validate Pancard details (name, dob, and pan_number)

  // Dummy response for demonstration purposes
  res.json({ success: true, message: 'Pancard details are valid' });
});

const voterIdValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('voter_id_number').notEmpty().withMessage('Voter ID number is required'),
];

// Route for Voter ID validation
app.post('/validate-voterid', voterIdValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If validation passes, handle the Voter ID validation logic here
  const { name, dob, voter_id_number } = req.body;
  // Add your logic to validate Voter ID details (name, dob, and voter_id_number)

  // Dummy response for demonstration purposes
  res.json({ success: true, message: 'Voter ID details are valid' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
