const getPhone = phone => `+48 ${phone.substring(0, 3)} ${phone.substring(3, 6)} ${phone.substring(6, 9)}`;
const getPrice = price => `${price}zł - NETTO`;
const getMargin = number => {
  if (number < 4) {
    return `30px`;
  }
  if (number % 6 === 4 || number % 6 === 5) {
    return `80px`;
  }
  return `40px`;
};

export { getPhone, getPrice, getMargin };
