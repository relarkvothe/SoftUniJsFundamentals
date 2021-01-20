function words(arg1) {
    let text = arg1;
    let count = 1; // we are counting spaces, and we already have the first word.
  
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {  // we count for spaces
        count++;  // we increment the count for each new space
      }
    }
  
    if (count > 10) {
      console.log(`The message is too long to be send! Has ${count} words.`);
    } else {
      console.log(`The message was send successfully!`);
    }
  }
  words("This message has exactly eleven words. One more as it's allowed!");
  