// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const validateAadhar = require('./validations/aadhar'); // Assuming you have Aadhar validation logic
const validatePanCard=require('./validations/pancard');
const validateVoterId=require('./validations/voterid');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const aadharValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('aadhar_number').notEmpty().withMessage('Aadhar number is required'),
];

// Aadhar
app.post('/validateAadhar', aadharValidation, (req, res) => {
  const { name, dob, aadhar_number } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      return res.status(404).json({
        errors:errors.array()
      })
  } 
  else {
      // Validate Aadhar
      const isAadharValid = validateAadhar(aadhar_number);

      // Respond with validation result
      res.json({
          success: isAadharValid ? 'Success' : 'Fail',
          message: isAadharValid ? 'aadhar details are valid' : 'aadhar is not valid',
          valid: isAadharValid,
      });
  }
});

const panCardValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('pan_number').notEmpty().withMessage('PAN number is required'),
];

// PAN Card
app.post('/validatePAN', panCardValidation, (req, res) => {
  const { name, dob, pan_number } = req.body;
  const errors = validationResult(req);


  if (!errors.isEmpty()) {
    return res.status(404).json({
      errors:errors.array()
    })
} 
   else {
      // Validate PAN Card
      const isPanCardValid = validatePanCard(pan_number);
      // Respond with validation result
      res.json({ 
          status: isPanCardValid ? 'Success' : 'Fail',
          message: isPanCardValid ? 'Pan_number details are valid' : 'Pan_number is not valid',
          valid: isPanCardValid,
      });
  }
});

//voterId
const voterIdValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('dob').notEmpty().withMessage('Date of Birth is required'),
  check('voter_id_number').notEmpty().withMessage('Voter ID number is required'),
];

// Voter ID
app.post('/validateVoterID', voterIdValidation, (req, res) => {
  const { name, dob, voter_id_number } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json({
      errors:errors.array()
    })
} 
 else {
      // Validate Voter ID
      const isVoterIdValid = validateVoterId(voter_id_number);

      // Respond with validation result
      res.json({
          status: isVoterIdValid ? 'Success' : 'Fail',
          message: isVoterIdValid ? 'Voter_Id details are valid' : 'Voter_Id is not valid',
          valid: isVoterIdValid,
      });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

