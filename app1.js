'use strict';

const searchAndReplace = (original, searchText, replaceText) => {
  
  for (let i = 0; i < original.length; i++) {
    if (original[i] === searchText[0]) {
      let j = 0;
      let start = i;
      let end = 0;
      while (original[i + j] === searchText[j]) {
        compareText += searchText[j];
        j++;
      }
      if (searchText === compareText) {
        end = i +j;
      }
    }
  }
  

};


$('#submit').click(() => {
  if (
    $('#original').val() === '' ||
    $('#searchText').val() === '' ||
    $('#replacementText').val() === ''
  ) {
    $('#output').html('Please enter a value in all of the fields');
  } else {
    searchAndReplace(
      $('#original').val(),
      $('#searchText').val(),
      $('#replacementText').val()
    );
  }
});


// iterate through all the characters in original
    // if original[char] matches search[char]
      // hold the index value of original[char]
      //look if original[char+1] matches search[char + 1]
        // if they also match
          // add search[char + 1] to test string
        //if test string matches search string