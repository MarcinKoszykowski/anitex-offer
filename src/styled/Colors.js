const white = 'hsl(0, 100%, 100%)';
const black = 'hsl(0, 100%, 0%)';
const grey = 'hsl(0, 0%, 70%)';
const greyLight = 'hsl(0, 0%, 85%)';
const blue = 'hsl(200, 100%, 70%)';
const blueDark = 'hsl(200, 100%, 30%)';
const red = 'hsl(0, 100%, 50%)';
const pink = 'hsl(0, 100%, 85%)';
const orange = 'hsl(25, 100%, 50%)';
const yellow = 'hsl(50, 100%, 50%)';
const violet = 'hsl(290, 100%, 50%)';
const green = 'hsl(120, 100%, 50%)';
const colorWithOpacity = (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`;

export { white, black, grey, greyLight, blue, blueDark, red, pink, orange, yellow, violet, green, colorWithOpacity };
