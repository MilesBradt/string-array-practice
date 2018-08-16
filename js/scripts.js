// Specs
// The program recognizes vowels in a multiple-word sentence, regardless of capitalization.
// Input Example: "CATS CATERED THE EVENT"
// Output Example: 7

// The program recognizes a single vowel in a multiple-character word.
// Input Example: "cat"
// Output Example: 1
// The program recognizes a single vowel.
// Input Example: "a"
// Output Example: 1
// The program recognizes multiple vowels in a single word.
// Input Example: "cater"
// Output Example: 2
// The program recognizes a single vowel, regardless of case.
// Input Example: "A"
// Output Example: 1
// The program recognizes all vowels in a multiple-word sentence, regardless of inconsistent capitalization.
// Input Example: "CaTS CATEReD ThE EveNT"
// Output Example: 7
// The program ignores non-alphabetical characters, since they cannot be vowels.
// Input Example: "4%"
// Output Example: 0
// The program recognizes vowels in a multiple-word sentence.
// Input Example: "cats catered the event"
// Output Example: 7



$(document).ready(function() {
  $("form#words").submit(function(event){
    event.preventDefault();

    var userWords = [];

    $("input#userInput").each(function(){
      var vowels = $(this).val();
      userWords.push(vowels);
    });

    results = userWords.toString().split("");
    

    console.log(results);
  });
});
