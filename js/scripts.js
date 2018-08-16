
$(document).ready(function() {
  $("form#words").submit(function(event){
    event.preventDefault();
    var vowels = 0;
    var userWords = [];

    $("input#userInput").each(function(){
      var userInput = $(this).val();
      userWords.push(userInput);
    });

    results = userWords.toString().toLowerCase().split("");
    // results.forEach(function(letter){
    //   if (letter === "a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u") {
    //     vowels ++;
    //   }
    //
    // });
    for (i = 0; i < results.length; i ++) {
      var letter = results[i]; //checks the var in the index possition
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowels += 1;
      }
    }
    console.log(results);
    console.log(vowels);
  });
});
