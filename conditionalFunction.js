const needAnUmbrella = function(isRaining) {
  if (isRaining) {
    return 'Bring an umbrella!';
  } else {
    return 'all good bro';
  }
};

console.log(needAnUmbrella(true));
console.log(needAnUmbrella(false));