const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
users.splice (0, 1);
// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]

///////////////////////////////////////////////////////////////


users.splice (2);
// Удалить последний элемент массива
console.log(users); // ["Poly", "Ajax"]
////////////////////////////////////////////////////////////////


users.unshift('Lux');
// Добавить в начало массива пользователя "Lux"
console.log(users); // ["Lux", "Poly", "Ajax"]

///////////////////////////////////////////////////////////////

users.push('Jay','Kiwi');
// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]
///////////////////////////////////////////////////////////////////////////////


// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
const user = ['Ajax'];
users.splice (2,1);
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]


///////////////////////////////////////////////////////////////////////////////

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// // // перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
users.splice(2, 0, insertBefore, userToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]