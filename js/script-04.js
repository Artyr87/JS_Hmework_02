console.log(findLongestWord('The quick jjbrown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

function findLongestWord (str){
  let array = str.split(' ');
  array.reduce(function (a, b) { 

    if (a.length > b.length) {
      console.log(b);
      return a;
    } else {
      console.log(b);
      return b;
    }
  });
  
}