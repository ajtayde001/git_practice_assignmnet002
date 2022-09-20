
function PrimeCheck(num) {
  let factor = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factor++;
    }
  }
  if (factor == 2) {
    return true;
  }
  return false;
}


let answer= PrimeCheck(20);
if(answer==true){
  console.log("Prime")
}else{
  console.log("Not Prime")
}

