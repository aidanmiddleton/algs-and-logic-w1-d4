const fizzBuzz = function(num1, num2, word1, word2) {
  for (let i = 0; i <= 100; i++) {

    if (i % num1 === 0 && i % num2 === 0) {
      console.log(word1 + word2);
    } else if (i % num1 === 0) {
      console.log(word1);
    } else if (i % num2 === 0) {
      console.log(word2);
    } else {
      console.log(i)
    }
    
  }
}


fizzBuzz(8, 5, 'bear', 'pineapple');