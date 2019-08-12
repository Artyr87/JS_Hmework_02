console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
function formatString (str){
    let count = str.length;
    if (count <= 40){
       console.log (str);
       return str;
    } 
    else {
        let newstr = `${str.slice(0,41)}...`;
        console.log(newstr);
        return newstr;
       }
}