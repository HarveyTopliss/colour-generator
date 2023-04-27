'use strict';

const background = document.querySelector('.container');
const colour = document.querySelector('.colour-code');
const hexBtn = document.querySelector('#hex-btn');
const rgbBtn = document.querySelector('#rgb-btn');

//////////////////////////////////////////////////////////////////////////

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//random hex colour generated on click event
hexBtn.addEventListener('click', function () {
  let hexColour = [];
  for (let i = 0; i < 6; i++) {
    hexColour.push(values[Math.round(Math.random() * (values.length - 1))]);
  }
  //display colour as a background, then text format
  hexColour = '#' + hexColour.join('');
  background.style.backgroundColor = hexColour;
  colour.textContent = 'Hex Colour: ' + hexColour;
});

//random rgb colour generated on click event
rgbBtn.addEventListener('click', function () {
  let rgbColour = [];
  for (let i = 0; i < 3; i++) {
    rgbColour.push(Math.round(Math.random() * 255));
  }
  //display colour as a background, the text format
  rgbColour = `rgb(${rgbColour[0]}, ${rgbColour[1]}, ${rgbColour[2]})`;
  background.style.backgroundColor = rgbColour;
  colour.textContent = 'RGB Colour: ' + rgbColour;
});
