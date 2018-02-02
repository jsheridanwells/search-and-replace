'use strict';

const searchAndReplace = (original, searchText, replaceText) => {
  // create an array from the text to search
  let textArr = original.split('');
  // iterate over every item in the textArr array
  textArr.forEach((char, i) => {
    // if a character matches the first letter in the search text
    if (char === searchText[0]) {
      // compare the subsequent characters in textArr 
      //to the characters in searchText
      let j = 0;
      let compareText = '';
      while (textArr[i + j] === searchText[j]) {
        // add equivalent characters to compareText
        compareText += searchText[j];
        j++;
      }
      // check if compareText is equal to searchText
      if (compareText === searchText) {
        //if so, remove searchText from the text array
        // insert replaceText
        textArr.splice(i, searchText.length, replaceText);
      }
    }
  });
  // join textArr to a new string and return it
  return textArr.join('');
};


$('#submit').click(() => {
  // check if any of the input values are empty
  // prompt the user to enter values in any blank fields
  // if no fields are empty, run the searchAndReplace() function
  if (
    $('#original').val() === '' ||
    $('#searchText').val() === '' ||
    $('#replacementText').val() === ''
  ) {
    $('#output').html('Please enter a value in all of the fields');
  } else {
    $('#output').html(
      searchAndReplace(
        $('#original').val(), 
        $('#searchText').val(),
        $('#replacementText').val()
      )
    );
  }
});