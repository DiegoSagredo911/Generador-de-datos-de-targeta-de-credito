const { faker } = require("@faker-js/faker");
function generateCreditCard() {
  // Generate a random 16-digit credit card number
  const cardNumber =
    Math.floor(Math.random() * 9000000000000000) + 1000000000000000;

  // Generate a random 3-digit VCC
  const vcc = Math.floor(Math.random() * 900) + 100;

  // Generate a random expiration date (not expired)
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const expirationYear = currentYear + Math.floor(Math.random() * 10) + 1;
  const expirationMonth = Math.floor(Math.random() * 12) + 1;

  // Generate a random name

  const name = faker.person.fullName();

  // Return the generated credit card data as a JSON object
  return {
    cardNumber,
    vcc,
    expirationDate: `${expirationMonth}/${expirationYear}`,
    name,
  };
}

function validateCreditCard(creditCard) {
  // Remove any non-digit characters from the credit card number
  const cleanedCardNumber = creditCard.cardNumber.toString().replace(/\D/g, "");

  // Validate the credit card number using Luhn algorithm
  let sum = 0;
  let isSecondDigit = false;
  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i));

    if (isSecondDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isSecondDigit = !isSecondDigit;
  }

  if (sum % 10 !== 0) {
    return false;
  }

  // Validate the expiration date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const [expirationMonth, expirationYear] =
    creditCard.expirationDate.split("/");

  if (
    parseInt(expirationYear) < currentYear ||
    (parseInt(expirationYear) === currentYear &&
      parseInt(expirationMonth) < currentMonth)
  ) {
    return false;
  }

  return true;
}

module.exports = {
  generateCreditCard,
  validateCreditCard,
};
