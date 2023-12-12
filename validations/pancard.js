// panCardValidator.js
const validatePanCard = (panCard) => {
    const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panCardRegex.test(panCard);
  };
  
  module.exports = validatePanCard;
  