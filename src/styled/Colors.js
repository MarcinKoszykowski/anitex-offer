const colors = {
  white: 'hsl(0, 100%, 100%)',
  black: 'hsl(0, 100%, 0%)',
  grey: 'hsl(0, 0%, 70%)',
  greyLight: 'hsl(0, 0%, 85%)',
  blue: 'hsl(200, 100%, 70%)',
  blueDark: 'hsl(200, 100%, 30%)',
  red: 'hsl(0, 100%, 50%)',
  pink: 'hsl(0, 100%, 85%)',
  orange: 'hsl(25, 100%, 50%)',
  yellow: 'hsl(50, 100%, 50%)',
  violet: 'hsl(290, 100%, 50%)',
  green: 'hsl(120, 100%, 50%)',
  colorWithOpacity: (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`,
};

export default colors;
