const yourOrderPlease = (words) => {
  var word = words.split(" ");
  var newArr = [];

  for (var i=0; i < word.length; i++) {
    for (var j=0; j < word.length; j++) {
      var numb = (word[j].match(/\d/g))-1

      if (i === numb){
        newArr[i] = word[j];
      }
    }


  }

  return(newArr.join(" "));
}
export default yourOrderPlease;
