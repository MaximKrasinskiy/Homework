document.title = "Homework JS (ES6+)"
//Задание 1

const arr1 = [1,2,3,4,5,6];

function sum(arr1){
    let sum = 0;
    
    for(let item of arr1){
        sum = sum + item ;
    }
    console.log("Сумма: ", sum);
}
sum([1,2,3,4,5,6]);



//Задание 2
str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus veritatis consectetur qui pariatur, nwon animi architecto ad maxime suscipit odio praesentium, enim sunt laborum accusamus illum sapiente delectus tenetur."

  let counter = 0; 
        for(let item of str){
            if (item.toLowerCase() === 'o') {
                counter++;
             }    
        }
      console.log(counter);
 
 //Задание 3 

 const findUniqueElems = arr => {
     return  Array.from(new Set(arr))
 }
  arr = [ "a", "test", "a", "b", "1","23","1"]
 console.log(findUniqueElems(arr));

 //Задание 4 

 const man = {
     name:'Mike',
     age:30,
     city:'London',
     Country:'England'
 }
 
newMan = {...man, clone:true};
console.log(newMan);

//Задание 5

function marvel(arr) {
    [name, age] = arr;
    console.log(name, age);
 }
 
 let Avengeres = ['Toni Stark', 50,]
 
 marvel(Avengeres);

