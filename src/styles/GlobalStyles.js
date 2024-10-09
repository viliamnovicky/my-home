import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --black: #242424;
  

    --white: #fff;
    --white-50: #fdf3f3;
    --white-100: #fff9f9;
    --white-900: #fff;
    --white-1000: #fff;

    --transparent: transparent;

    --grey-50: #f3f3f5;
    --grey-100: #e2e2e9;
    --grey-200: #c6c6d2;
    --grey-300: #a9a9bc;
    --grey-400: #8d8da5;
    --grey-500: #70708f;
    --grey-600: #5a5a72;
    --grey-700: #434356;
    --grey-800: #2d2d39;
    --grey-900: #16161d;

    --food-50: #ecfeff;
    --food-100: #cffafe;
    --food-200: #a5f3fc;
    --food-300: #67e8f9;
    --food-400: #22d3ee;
    --food-500: #06b6d4;
    --food-600: #0891b2;
    --food-700: #0e7490;
    --food-800: #155e75;
    --food-900: #164e63;
    --food-950: #083344;

    --coffee-50: #f6f3f3;
    --coffee-100: #E3DEDE;
    --coffee-200: #C7BDBD;
    --coffee-300: #AB9B9B;
    --coffee-400: #8F7A7A;
    --coffee-500: #735858;
    --coffee-600: #594545;
    --coffee-700: #6D5858; 
    --coffee-800: #4C3E3E;
    --coffee-900: #332929;
    --coffee-1000: #1A1414;

    --map-50: #f0fdfa;
    --map-100: #ccfbf1;
    --map-200: #99f6e4;
    --map-300: #5eead4;
    --map-400: #2dd4bf;
    --map-500: #14b8a6;
    --map-600: #0d9488;
    --map-700: #0f766e;
    --map-800: #115e59;
    --map-900: #134e4a;
    --map-1000: #042f2e;

    --button-gradient-purple-100: linear-gradient(87.48deg,#8039c6 22.62%,#5a37e6 40.11%,#1a00bd 47.81%,#5a37e6 54.11%,#8039c6 72.62%);
    
    --red-50: #fce9e9;
    --red-100: #f9d2d2;
    --red-200: #f2a6a6;
    --red-300: #fc7869;
    --red-400: #fb4b37;
    --red-500: #e61b05;
    --red-600: #c81804;
    --red-700: #961203;
    --red-800: #640c02;
    --red-900: #320601;

    --orange-50: #fff0e6;
    --orange-100: #ffe1cc;
    --orange-200: #ffc499;
    --orange-300: #ffa666;
    --orange-400: #f83;
    --orange-500: #ff6a00;
    --orange-600: #c50;
    --orange-700: #994000;
    --orange-800: #662b00;
    --orange-900: #331500;
    
    --green-50: #ecf9f5;
    --green-100: #d9f2ec;
    --green-200: #b3e6d9;
    --green-300: #8cd9c6;
    --green-400: #66ccb3;
    --green-500: #40bf9f;
    --green-600: #339980;
    --green-700: #267360;
    --green-800: #1a4d40;
    --green-900: #0d2620;
    
    --button-gradient-green: linear-gradient(87.48deg,#148f64,#19b57f 62.87%,#1dd192 97.34%);
    --purple-pink-gradient: linear-gradient(107deg,#8f00ff 11.97%,#a30fdf 35.02%,#b920bd 56.51%,#db3679 74.85%,#fb4b37 88.48%);
    --white-gray-gradient: linear-gradient(190.17deg,#fff 47.12%,#c6c6d2 100.02%);
    --blurple-gradient: linear-gradient(95.12deg,#4747eb 0.48%,#a533ff 99.68%);
    --soft-purple-gradient: linear-gradient(180deg,hsla(0,0%,100%,0),#d1d1fa);
    --hot-blue-purple-gradient: linear-gradient(113.66deg,#4747eb 1.06%,#390066);
    --green-blue-gradient: linear-gradient(97.76deg,#8cd9c6 5.76%,#73a3d3 23.24%,#5d75df 37.5%,#4747eb 55.54%);
    --hot-green-purple-gradient: linear-gradient(107.4deg,#40bf9f,#6566cc 57.29%,#8f00ff);
    --gradient-blue-100: linear-gradient(268.63deg,#2fc5f4 16.15%,#00b9f2 58.78%,#01aade 80.26%,#0094d1 99.87%);
    --gradient-announce: linear-gradient(90deg,#0076cc,#0092fe);
    --gradient-blue-200: linear-gradient(90deg,#0076cc,#0092fe);
    --gradient-blue-300: linear-gradient(90deg,#00b9f2,#0094d1 142.03%);
    --gradient-blue-400: linear-gradient(270deg,#00b9f2 1.98%,#0094d1 97.96%);
    --gradient-blue-500: linear-gradient(180deg,#00b9f2,#0472a9);
    --gradient-blue-600: linear-gradient(90deg,#28839e,#00b9f2);
    --gradient-blue-700: linear-gradient(90deg,#006191,#004c73);
    --gradient-blue-purple: linear-gradient(109.99deg,rgba(128,57,198,.4) 29.02%,rgba(153,97,209,.244) 63.34%), linear-gradient(311.02deg,rgba(34,245,171,.6) 4.94%,rgba(34,245,171,.114) 39.15%), linear-gradient(221.86deg,#003b66 11.95%,#0092fe 76.37%);
    --gradient-black-100: linear-gradient(84.45deg,#060000,#222 81.06%,#323030);
    --gradient-black-500: linear-gradient(90deg,#1e3749,#222);
    --gradient-gray-800: linear-gradient(90deg,#e6f0f7,#fff);
    --gradient-gray-900: linear-gradient(45.27deg,#f8f8f8 9.12%,#f6f6f6 72.27%,hsla(210,4%,89%,.5) 96.23%);
    --gradient-white-100: linear-gradient(180deg,#fff 56.25%,#e8e8e9);
    --gradient-lem-100: linear-gradient(90.01deg,#0095ff 0.69%,#00cfdc 99.99%);
    --gradient-half-vertical-gray-500: linear-gradient(var(--gray-500) 60%,#fff 60%);
    --gradient-half-vertical-blue-700: linear-gradient(var(--blue-700) 60%,#fff 60%);
    --gradient-half-vertical-blue-200: linear-gradient(var(--blue-200) 60%,#fff 60%);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--black-900);
  background: linear-gradient(242.45deg, var(--red-50), var(--white-900));
  width: 100vw;
  height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  overflow: hidden;
  position: relative;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

*:focus,
*:active {
  border: none;
  outline: none;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input,
input:focus, input:active, input:enabled {
  border: 1px solid transparent;
  outline: 1px solid transparent;
}
textarea,
textarea:focus, textarea:active, textarea:enabled {
  border: 1px solid transparent;
  outline: 1px solid transparent;
}

/* input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
} */

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  pointer-events: none;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

*::-webkit-scrollbar {
  width: 1.6rem;
  background: white;
  border-radius: 2rem;
}
 
*::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 50rem;
  cursor: pointer;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}

*::selection {
  color: var(--purple-50);
  background: var(--purple-400);
}

// FORM 

.input-disabled {
  pointer-events: none;
  color: var(--grey-200)!important;

  &::placeholder {
    color: var(--grey-200)!important;
  }
}

@keyframes active-note {
  from {
    bottom: -5rem;
    left: -30rem;
    width: 80%;
  }
  to {
    bottom: 0rem;
    left: 0rem;
    width: 90%;
  }
}

@keyframes modal-outer {
  from {
    background: rgba(26, 26, 26, 0);
  }
  to {
    background: rgba(26, 26, 26, 0.3);
  }
}

@keyframes modal {
  from {
    width: 5vw;
    height: 5vh;
  }
  to {
    width: 40vw;
    height: 35vh;
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
}

@keyframes menu-button {
  0% {
    opacity: 1
  }

  20% {
    opacity: 0
  }

  80% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

//MAPBOX

.mapboxgl-popup-content {
  width: 30rem;
  height: auto;
  border-radius: 2rem;
  position: relative;
  //background: rgba(204, 251, 241, 0.04);
  background: white;
  padding: 2rem 2rem;
  backdrop-filter: blur(5px);
  box-shadow: none;
  animation: opacity .2s forwards ;
  //border: 1px solid var(--map-200);
  color: var(--map-700);

  img {
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

.mapboxgl-popup-tip {
  animation: opacity .2s forwards  !important;
  /* border-top-color: var(--map-200)!important;
  border-bottom-color: var(--map-200)!important; */
}

.mapboxgl-popup-close-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--map-700); 
  background: var(--map-50);
  border-radius: 50%;

  &:hover {
    background: var(--map-700);
    color: var(--map-50);
  }
}

.popup-button {
  border: none;
  background: var(--map-600);
  color: var(--map-50);
  text-transform: uppercase;
  padding: .5rem 1.5rem;
  border-radius: 1rem;

  &:hover {
    background: var(--map-700);
  }
}
`;

export default GlobalStyles;
