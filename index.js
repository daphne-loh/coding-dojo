const persistantBugger = (num) => {
  var count = 0;
  var str = num.toString();

  if (str.length === 1)
    count = 0;

  else {

    do {

      var mult = 1;

      for (var i=0; i < str.length; i++){
        mult *= str[i];
      }

      num = mult;
      str = num.toString();
      count++;

    }while (str.length > 1);

  }

  return count;
}
export default persistantBugger;
