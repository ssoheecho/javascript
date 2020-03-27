/*
 * Class 6: Class Exercises
 */

// 1. Create a simple function that can reverse the contents of a sentence, word, phrase.
function reverse(string) {
  let splitString = string.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');

  console.log(joinArray);
}

reverse("i'm sad there weren't any chocolate chip cookies at breads");

//2. Create a function that will accept a date or year and calculate if it falls on a Leap Year.
function leapYear(year) {
  //leap year --> divisible by 4 but not 100 or is divisible by 400
  console.log((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

leapYear(2020);
leapYear(2019);
leapYear(2018);
leapYear(2017);
leapYear(2016);

//3. Create a function that can perform a word count, given a block of text. Punctuations or special characters are not to be included.
function countWords(text) {
  let punctuationRemove = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
  let splitText = punctuationRemove.split(' ');
  console.log(splitText);
  let count = splitText.length;
  console.log(count);
}

countWords("The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.");

//4. Create a function that checks a string or sentence and returns true if that parameter is a palindrome, (the string is the same forward as it is backward).

function palindrome(string) {
  let splitString = string.split('');
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');

  if (string == joinArray) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome("eye");
palindrome("watermelon");
palindrome("madam");

// 5. Create a para tag in html. Update the style of the first para tag to use a different font family, color and/or size.

let textStyle = document.getElementById('change').style;

function changeText() {
  textStyle.color = "#967bb6";
  textStyle.fontSize = "25px";
  textStyle.fontFamily = "Courier New, monospace";
}

function normalText() {
  textStyle.color = "#000";
  textStyle.fontSize = "16px";
  textStyle.fontFamily = "Arial, Helvetica, sans-serif";
}

//6. create a table and paint alternative colors:

function getTableCells(elem) {
  let cells = []
  let table = document.getElementById(elem);

  for (let r = 0; r < table.rows.length; r++) {
    for (let c = 0; c < table.rows[r].cells.length; c++) {
      cells.push(table.rows[r].cells[c]);
    }
  }
  alternateColors(cells);
}

function alternateColors(cells) {
  for (var i = 0; i < cells.length; i++) {
    if(i % 2) {
      cells[i].style.background = "#fff7ad";
    } else {
      cells[i].style.background = "#ffd0d0";
    }
  }
}

getTableCells('table');

// 7. Write a script that, on click of a button, can randomly select an image from a list and insert it inside the section tag in the html. eg. https://source.unsplash.com/random

function insertImage() {
  let img = document.createElement("img");
  let section = document.getElementById("imageSection");
  img.src = "https://source.unsplash.com/random";
  img.style.height = "300px";
  img.style.width = "auto";
  section.appendChild(img);
}
