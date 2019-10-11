const phoneFormat = phone =>
  `+48 ${phone.substring(0, 3)} ${phone.substring(3, 6)} ${phone.substring(6, 9)}`;
const priceFormat = price => `${price}zł - NETTO`;
const setMargin = number => {
  if (number < 4) {
    return `30px`;
  }
  if (number % 6 === 4 || number % 6 === 5) {
    return `80px`;
  }
  return `40px`;
};

export { phoneFormat, priceFormat, setMargin };
