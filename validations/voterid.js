// voterIdValidator.js
const validateVoterId = (voterId) => {
    const voterIdRegex = /^[A-Z]{3}[0-9]{7}$/;
    return voterIdRegex.test(voterId);
  };
  
  module.exports = validateVoterId;
  