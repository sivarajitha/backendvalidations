// aadharValidator.js
const validateAadhar = (aadhar) => {
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar);
  };
  
  module.exports = validateAadhar; 
  
  //aadhar verification