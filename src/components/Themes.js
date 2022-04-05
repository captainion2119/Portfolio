export const LightTheme = {
    body:"#03045E",
    text:"#0077B6",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "0, 0, 0",
    textRgba:"0,0,0",
}

export const DarkTheme = {
    body:"#0077B6",
    text:"#03045E",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "0, 0, 0",
    bodyRgba:"0,0,0",
}


// You can also use these breakpoints after importing it and use it as breakpoints.sm
export const breakpoints = {
    sm: 20,//em
    md: 30,
    lg: 45,
    xl: 60,
    xxl:75,
  }
  
  export const mediaQueries = key => {
    return style => `@media (max-width: ${key}em) { ${style} }`
  }