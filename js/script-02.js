logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
function logItems(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(`  ${arr[i]} ${i+1}`); 
    }
}