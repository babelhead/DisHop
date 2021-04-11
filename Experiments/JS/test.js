function min(a,b) {
    return Math.min(a,b);
}
console.log(min(0,10));
console.log("Hell, oh!");

const isEven = function(n) {
    if (n === 0) {
        return(true);
    } else if (n === 1) {
            return(false);
        }
        else if (n < 0) {
            n = -n;
            return isEven(n);
        }
        else {
            return isEven(n - 2);
            }
        }

const countBs = function(string) {
    countBs = 0;
    for(var n = 0; n <= string.length; n++){
    if("string"[n] === "B") {
        countBs += countBs;
        countBs(string);
        return countBs;
        }   
    }
}
const countBs = function(string) {
    for(var n = 0; n < string.length; n++){
     	countBs = 0;
    	if("string"[n] === "B") {
        countBs += countBs;
        return countBs;
        }   
    }
}

const countBs = function(string) {
    for (var n = 0; n < string.length; n++) {
      let count = 0;
      if (string[n] === "B") {
        count += count;
      }
      return count;
    }
  }
  console.log(count);

  //* finally spotted the problem: the count = 0 declaration needs to be outside the for loop, otherwise it sets itself back to zero in each round
  // and return needs to be in the outmost block for it to return the final count
  // [YEAH!!]
  // (this took me two days to figure out...)
  // also, neither count += count nor count = count++ seem to work and I'm not sure why... just count++ does though...
  // (ok well, checking back, that seems a simple syntax error, to augment the value of a variable this way with ++.. but I thought += meant the same a ++.. 
  // oh right, got that wrong too, the syntax there would we count += 1 for adding 1, += is increment by the second value specified 

  const countBs = function(string) {
    let count = 0;
    for (var n = 0; n < string.length; n++) {
      if (string[n] == "B") {
        count = count + 1;
      }
    }
    return count;
  }

  const countChar = function(string, char) {
    let count = 0;
    for (var n = 0; n < string.length; n++) {
      if (string[n] == char) {
        count = count + 1;
      }
    }
    return count;
  }