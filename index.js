// console.log('hello');
// console.log(`i like mangoes`);
// window.alert('hi');
// window.alert('i like mangoes');
// window.alert('this is an alert');
// /*
// this is a comment
// */

// document.getElementById('myh1').textContent='namaskaram';
// document.getElementById('myp').textContent='shubodayam';

// let x=5.29;
// let price=5;
// let email="mghsumanth@gmail.com"

// console.log(typeof(price));
// console.log(`you are ${x} years old`);
// console.log(`you name is ${price}`);
// console.log(`your email is ${email}`);

// let forsale=true;
// console.log(`rock is for sale:${forsale}`);

// let fullname = "megha sumanth";
// let age = 22;
// let student = true;

// document.getElementById('p1').textContent = `fullname:${fullname}`;
// document.getElementById('p2').textContent = `Age:${age}`;
// document.getElementById('p3').textContent = `student:${student}`;
// let students=20;
// console.log(students);
// students=students+1;
// console.log(students);

// let username;
// username=window.prompt("what's your username?");
// console.log(username);

// let username;
// document.getElementById("mysubmit").onclick=function(){
// username=document.getElementById("mytext").value;
//  console.log(username);
//  document.getElementById('myh1').textContent='hey guys';
// }

// let age=window.prompt('how old are you??');
// // age=Number(age);
// age+=1;
// console.log(age,typeof age);

// let x="";
// let y="";
// let z="";
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let n1;
// let n2;
// document.getElementById('mysum').onclick=function()
// {
//   n1=document.getElementById('myinput1').value;
//   n1=Number(n1);
//   n2=document.getElementById('myinput2').value;
//   n2=Number(n2);
//   document.getElementById('myp').textContent=n1+n2;
// }

// const decreasebtn=document.getElementById('decreasebtn');
// const increasebtn=document.getElementById('increasebtn');
// const resetbtn=document.getElementById('resetbtn');
// const countlabel=document.getElementById('countlabel');

// let count=0;

// increasebtn.onclick=function(){
//     count++;
//     countlabel.textContent=count;
// }
// decreasebtn.onclick=function()
// {
//   count--;
//   countlabel.textContent=count;
// }
// resetbtn.onclick=function() {
//   count=0;
//   countlabel.textContent=count;
// }

// const min=50;
// const max=100;

// let randomnum=Math.floor((Math.random()*(max-min))+min);
// console.log(randomnum);

// const mybutton=document.getElementById('mybutton');
// const mylabel1=document.getElementById('mylabel1');
// const mylabel2=document.getElementById('mylabel2');
// const mylabel3=document.getElementById('mylabel3');
// let min=1;
// let max=6;
// let randomnum;
// mybutton.onclick=function(){
//    randomnum1=Math.floor(Math.random()*max)+min;
//    randomnum2=Math.floor(Math.random()*max)+min;
//    randomnum3=Math.floor(Math.random()*max)+min;
//    mylabel1.textContent=randomnum1;
//    mylabel2.textContent=randomnum2;
//    mylabel3.textContent=randomnum3;
// }

//   let age=document.getElementById('myinput');
// output.onclick=function(){
//   age=age.value;
//   if(age>0)
//   {
//   if(age>18)
//   {
//     myoutput.textContent='bhai age limit';
//   }
//   else{
//     myoutput.textContent='welcome bhai';
//   }
// }
// else
// {
//   myoutput.textContent='-ve not allowed';
// }
// }

// const mycheckbox=document.getElementById('mycheckbox');
// const paytmid=document.getElementById('paytmid');
// const phonepeid=document.getElementById('phonepeid');
// const gpayid=document.getElementById('gpayid');
// const mylabel1=document.getElementById('mylabel1');
// const mylabel2=document.getElementById('mylabel2');
// const mybutton=document.getElementById('mybutton');

// mybutton.onclick=function(){
//   if(mycheckbox.checked)
//   {
//     mylabel1.textContent="you have subscribed";
//   }
//   else{
//     mylabel1.textContent="you have not subscribed";
//   }
//   if(paytmid.checked)
//   {
//      mylabel2.textContent="you are paytm user";
//   }
//   else if(phonepeid.checked)
//   {
//     mylabel2.textContent="you are phonepe user";
//   }
//   else if(gpayid.checked)
//   {
//     mylabel2.textContent="you are gpay user";
//   }
//   else{
//     mylabel2.textContent="you are not of above any user";
//   }
// } 

// let username=" HI-h-e-l-l-o-";
// username=username.padEnd(15,'0');
// console.log(username);

// const email='umeshyadav@gmail.com';
// let username=email.slice(0,email.indexOf('@'));
// let extension=email.slice(email.indexOf('@')+1);
//  console.log(username);
//  console.log(extension);

// let username=window.prompt('enter username:');
// username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
// console.log('arjun');    
// console.log(username);


// let a=1;
// let b=1;
// if(a===1) console.log('ok');
// else console.log('not ok');
// let loggedin=false;

// let username=''
// let password='';
// while(loggedin==false)
// {
//     username=window.prompt('enter username:');
//     password=window.prompt('enter password');
//     if(username=='myusername'&&password=='mypassword')
//     {
//       loggedin=true;
//       console.log('u are logged in');
//     }
//     else{
//       console.log('invalid credentials please try again');
//     }
// }

// for(let i=1;i<=3;i+=3)
// {
//    console.log(i);
// }

// const min=1;
// const max=100;
// const num=Math.floor(Math.random()*max)+min;
// let guess;
// let attempts=0;
// let isguess=false;
// while(isguess==false)
// {
//   guess=window.prompt(`guess a number between ${min} and ${max}`);
//   guess=Number(guess);
//   if(isNaN(guess)==true||guess<min||guess>max)
//   {
//     window.alert(`bhai enter a valid number`);
//   }
//   else if(guess==num)
//   {
//     window.alert(`congrats! your answer is${num} and you have took ${attempts}`);
//     isguess=true;
//   }
//   else if(guess<num)
//   {
//    window.alert(`bhai yourguess is less`);
//    attempts++;
//   }
//   else if(guess>num)
//   {
//       window.alert(`bhai your guess is high `);
//       attempts++;
//   }
// }

// function isvalid(email)
// {
//     if(email.includes('@'))
//     {
//       return true;
//     }
//     else{
//       return false;
//     }
// }

// let email="raulgmail.com";
// console.log(isvalid(email));



// let x=5;
// function1();
// function2();
// function function2(){
//   console.log(x);
// }
// function function1(){
//   let x=2;
//   console.log(x);

// }


// const myinput=document.getElementById('myinput');
// const tocelsius=document.getElementById('tocelsius');
// const tofarenhiet=document.getElementById('tofarenhiet');
// const result=document.getElementById('result');

// function convert()
// {
//    let temp=myinput.value;
//    if(tocelsius.checked)
//    {
//        let temperature=(5/9)*(temp-32);
//        result.textContent=temperature.toFixed(1)+' °C';
//    }
//    else if(tofarenhiet.checked)
//    {
//        let temperature=(9/5)*(temp)+32;
//        result.textContent=temperature.toFixed(1)+' °F';
//    }
//    else
//    {
//      result.textContent='bhai please select any unit';
//    }
// }

  

// let fruits='mango';
// let vegetables=['dal','palak','aloo'];
// let foods=[...fruits,...vegetables,'paneer','bendakaya'];
// let food=[...fruits].join(' ');
// console.log(food);
// let maxi=Math.max(...arr);
// let mini=Math.min(...arr);
// console.log(mini);

// function merge(...foods)
// {
//   console.log(...foods);
// }  
// function getfood(...foods)
// {
//    return foods.join('*');
// }


// let fruits=['mango','orange','grapes'];
// let vegetables=['aloo','paneer','curd','dal'];
// let foods=[...fruits,...vegetables,'milk','ghee'];
// console.log(foods);
 
// const food1='aloo';
// const food2='benda';
// const food3='donda';
// const food4='palak';
// const food5='paneer';

// let a=1;
// let b=2;
// let c=3;
// let d=4;
// let e=5;
// merge(a,b,c,d,e);


// merge(food1,food2,food3,food4,food5);

// const foods=getfood(food1,food2,food3,food4,food5);
// console.log(foods);



// function findfullname(...fullname) 
// {
//   return fullname.join("");
// } 

// let fullname=findfullname('dr','phd','m.tech','b.tech','diploma','10th','arjun');
// console.log(fullname);



// function rolldice(){

//   const numofdice=document.getElementById('myinput').value;
//   const diceresult=document.getElementById('diceresult');
//   const diceimages=document.getElementById('diceimages');
//   let numbers=[];
//   let images=[];
//   for(let i=0;i<numofdice;i++)
//   {
//     let random=Math.floor(Math.random()*6)+1;
//     numbers.push(random);
//     images.push(`<img src="images_js/${random}.png" alt="dice ${random}" >`)
//   }
//   diceresult.textContent=`dice: ${numbers.join(' ')}`;
//   diceimages.innerHTML = images.join('');
// }

// function generatepassword(length,includelowercase,includeuppercase,includenumbers,includesymbols)
// {
//    let allcharsinvolved="";
//    if(includelowercase) allcharsinvolved+="abcdefghijklmnopqrstuvwxyz";
//    if(includeuppercase) allcharsinvolved+="ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
//    if(includenumbers)   allcharsinvolved+="0123456789";
//    if(includesymbols) allcharsinvolved+="!@#$%^&*()_+";
//    let password="";
//    if(length<=0) return 'bhai lengthmust be atleast 0';
//    if(allcharsinvolved.length==0) return 'bhai there should be atleast onre chartype selected';
//    for(let i=0;i<length;i++)
//    {
//         let ind=Math.floor(Math.random()*allcharsinvolved.length);
//         const char=allcharsinvolved[ind];
//         password+=char;
//    }
//    return password;
// }

// const passwordLength=2;
// const includelowercase=true;
// const includeuppercase=false;
// const includenumbers=false;
// const includesymbols=false;
// let password=generatepassword(passwordLength,includelowercase,includeuppercase,includenumbers,includesymbols);
// console.log(`generated password: ${password}`);



// sum(print,2,3);
// function sum(callback,a,b)
// {
//   let result = a+b;
//   callback();
//   console.log(result);
// }

// function print()
// {
//   console.log('sum is : ');
// }




// let fruits=['orange','grapes','banana'];
// fruits.forEach(uppercase);
// fruits.forEach(lowercase);
// fruits.forEach(capitalize);
// fruits.forEach(display);

//  function uppercase(element,index,array)
//  {
//     array[index]=element.toUpperCase();
//  }
//  function lowercase(element,index,array)
//  {
//    array[index]=element.toLowerCase();
//  }
//  function capitalize(element,index,array)
//  {
//        array[index]=element.charAt(0).toUpperCase()+element.slice(1);
//  }
//  function display(element)
//  {
//   console.log(element);
//  }

// const numbers=[1,2,3,4,5,6];
// const doublednumbers=numbers.map(double);
// const squarednumbers=numbers.map(squares);
// const cubednumbers=numbers.map(cubes);

// console.log(cubednumbers);

// function double(element,index,array)
// {
//     return element*2;
// }

// function squares(element)
// {
//   return element*element;
// }

// function cubes(element)
// {
//   return Math.pow(element,3);
// }

// const students=["rahul",'megha','arjun'];
// const capitalstudents=students.map(capital);
// const lowercasestudents=students.map(lowercase);
// const capitalizedstudents=students.map(capitalize);


// console.log(capitalizedstudents);

// function capital(element)
// {
//   return element.toUpperCase();
// }

// function lowercase(element)
// {
//   return element.toLowerCase();
// }

// function capitalize(element)
// {
//   return element.charAt(0).toUpperCase()+element.slice(1);
// }

// const dates=["01-06-2021","27-05-2017","15-03-2016"];
// const formatteddates=dates.map(changeformat);
// console.log(formatteddates);

// function changeformat(element)
// {
//   const part=element.split("-");
//   return `${part[2]}/${part[1]}/${part[0]}`;
// }


// let numbers=[1,2,3,4,5,6,7];
// let evennumbers=numbers.filter(iseven);
// let oddnumbers=numbers.filter(isodd);


// console.log(oddnumbers);


// function iseven(element)
// {
//   if((element%2)===0) return 1;
//   return 0;
// }

// function isodd(element)
// {
//   if(element%2!==0) return 1;
//   return 0;
// }

// const prices=[1,2,3,4,5];
// const total=prices.reduce(sum);
// console.log(total);




// function sum(accumulator,element)
// {
//   return accumulator+element;
// }


//  const marks=[23,74,56,93,97];
//  const maxmarks=marks.reduce(findmax);
//  const minmarks=marks.reduce(findmin);
//  console.log(minmarks);
//  console.log(maxmarks);


// function findmax(max,element)
// {
//    if(element>max) return element;
//    return max;
// }

// function findmin(min,element)
// {
//   if(element<min) return element;
//   return min;
// }

// setTimeout(function(){
//   console.log('hello');
// },3000);

// const numbers=[1,2,3,4,5,6];
// const squares=numbers.map(function findcubes(element)
// {
//   return Math.pow(element,3);
// });
// const evennumbers=numbers.filter(function(element){
//      if(element%2===0) return 1;
//      return 0;
// })
// const oddnumbers=numbers.filter(function(element){
//   if(element%2!==0) return 1;
//   return 0;
// })
// const total=numbers.reduce(function(sum,element){
//     return sum+element;
// })
// // function findsquare(element)
// // {
// //   return Math.pow(element,2);
// // } 
// console.log(total);


 
//  const hello=(name,age) => {
//   console.log(`hi ${name}`);
//   console.log(`you are ${age} yrs old`);
//  }

//  setTimeout(()=>{
//   console.log('hi');
//  },3000);

// const numbers=[1,2,3,4,5,6];

// const squares=numbers.map((element)=>Math.pow(element,2));
// const cubes=numbers.map((element)=>Math.pow(element,3));
// const evennumbers=numbers.filter((element)=>element%2===0);
// const oddnumbers=numbers.filter((element)=>element%2!==0);
// const total=numbers.reduce((sum,element)=>sum+element);
// console.log(total);

// const person1={
//   firstname:"megha",
//   lastname:"sumanth",
//   age:19,
//   isEmployed:"true",
//   sayhello:function(){console.log(`hi i am ${this.lastname}`)},
//   eat: function(){console.log('i am eating paneer')},
// }

// const person2={
//   firstname:"megha",
//   lastname:"sairaj",
//   age:19,
//   isEmployed:"true",
//   sayhi: function(){ console.log(`hi i am ${this.lastname}`)},
//   eat: ()=> {console.log('i am eating aloo fry ')},
// }

// person2.sayhi();

// person1.sayhello();
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isEmployed);

// console.log(person2.firstname);
// console.log(person2.lastname);
// console.log(person2.age);
// console.log(person2.isEmployed);


 
// function foods(name,color,price)
// {
//   this.name=name,
//   this.color=color;
//   this.price=price,
//   this.intro=function(){console.log(`hi i am ${this.name}`)}
// }

// const food1=new foods("aloo","yellow",50);
// const food2=new foods("paneer","white",90);
// const food3=new foods("dal","green",30);

// // console.log(food1.name);
// // console.log(food1.color);
// // console.log(food1.price);

// // console.log(food2.name);
// // console.log(food2.color);
// // console.log(food2.price);

// // console.log(food3.name);
// // console.log(food3.color);
// // console.log(food3.price);

// food1.intro();
// food2.intro();
// food3.intro();

// class products{
//   constructor(name,price){
//       this.name=name;
//       this.price=price;
//   }
//   displayproduct(){
//     console.log(`product: ${this.name}`);
//     console.log(`price: ${this.price}`);
//   }
//   calculatetotal(salestax)
//   {
//     return this.price+(this.price*salestax);
//   }
// }

//  const salestax=0.05;

// const product1=new products("aloo",50);
// const product2=new products("paneer",90);
// const product3=new products("dal",30);

// product1.displayproduct();
// product2.displayproduct();
// product3.displayproduct();

// const total1=product1.calculatetotal(salestax);
// console.log(`the total of ${product1.name} is ${total1.toFixed(0)} `);

// class mathutil{
//   static PI=3.14159;
//   static getdiameter(radius)
//   {
//     return 2*radius;
//   }
//   static getcircumference(radius){
//     return 2*this.PI*radius;
//   }
//   static getarea(radius)
//   {
//     return this.PI*radius*radius;
//   }
// }


// console.log(mathutil.PI);
// console.log(mathutil.getdiameter(5));
// console.log(mathutil.getcircumference(5));
// console.log(mathutil.getarea(5));

// class user{
//   static usercnt=0;

//   constructor(username){
//      this.username=username;
//      user.usercnt++;
//   }
//   sayhello(){
//     console.log(`username is ${this.username}`);
//   }
//   static getusercnt(){
//     console.log(`there are ${user.usercnt} users`)
//   }
// }

// const user1=new user("arjun");
// const user2=new user("rahul");
// // console.log(user1.username);
// // console.log(user2.username);
// // console.log(user.usercnt);
// user1.sayhello();
// user2.sayhello();
// user.getusercnt();

// class Animal{
//    alive=true;
//    eat(){
//     console.log(`this ${this.name} is eating`);
//    }
//    sleep(){
//     console.log(`this ${this.name} is sleeping`);
//    }
// }

// class rabbit extends Animal{
//   name="Rabbit";
//   run(){
//     console.log(`this ${this.name} is running`)
//   }
// }

// class lion extends Animal{
//   name="Lion";
//   walk(){
//   console.log(`this ${this.name} is walking`)
//   }
// }

// class eagle extends Animal{
//   name="Eagle";
//   fly(){
//     console.log(`this ${this.name} is flying`);
//   }
// }


// const Eagle=new eagle();
// const Rabbit=new rabbit();
// const Lion=new lion();
// Eagle.eat();
// Rabbit.eat();
// Lion.eat();
// Rabbit.sleep();
// console.log(Rabbit.alive);

// Rabbit.run();
// Lion.walk();
// Eagle.fly();
// Rabbit.fly();

// class Animal{
//   constructor(name,age){
//        this.name=name;
//        this.age=age;
//   }

//   move(speed){
//     console.log(`this ${this.name} can move with ${speed}`);
//   }
// }

// class Rabbit extends Animal{
//    constructor(name,age,runspeed){
//     super(name,age);
//     this.runspeed=runspeed;
//   }
//   run(){
//       console.log(`this ${this.name} can run`);
//       super.move(this.runspeed);
//   }
// }

// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//     super(name,age);
//     this.swimspeed=swimspeed;
//   }
//   swim(){
//       console.log(`this ${this.name} can swim`);
//       super.move(this.swimspeed);
//   }
// }

// class Hawk extends Animal{
//    constructor(name,age,flyspeed){ 
//     super(name,age);
//     this.flyspeed=flyspeed;
//   }
//   fly(){
//       console.log(`this ${this.name} can fly`);
//       super.move(this.flyspeed);
//   }
// }

// const rabbit=new Rabbit("Rabbit",1,20);
// const fish=new Fish("fish",2,10);
// const hawk=new Hawk("hawk",3,30);
// // console.log(`the ${rabbit.name} has runspeed : ${rabbit.runspeed}`); 
// // console.log(fish.swimspeed);
// rabbit.run();
// fish.swim();
// hawk.fly();

// class rectangle{
//   constructor(width,height){
//        this.width=width;
//        this.height=height;
//   }

//   set width(newWidth){
//         if(newWidth>0)
//         {
//           this._width=newWidth;
//         }
//         else{
//           console.error('bhai width must be a positive number');
//         }
//   }
//   set height(newHeight){
//     if(newHeight>0){
//       this._height=newHeight;
//     }
//     else{
//       console.error('bhai height must be a positive number');
//     }
//   }

//   get width(){
//     return `${this._width.toFixed(1)} cm`;
//   }

//   get height(){
//        return `${this._height.toFixed(1)} cm`;
//   }

//   get area(){
//     return `${(this._width*this._height).toFixed(1)} cm^2`;
//   }
// }

// const Rectangle=new rectangle(3.12,4.56);
// Rectangle.width=-10000;
// Rectangle.height="aloo";
// console.log(Rectangle.width);
// console.log(Rectangle.height);
// console.log(Rectangle.area);

// class person{
//   constructor(firstname,lastname,age)
//   {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//   }

//   set firstname(newFirstname){
//     if(typeof newFirstname=="string" && newFirstname.length>0)
//     {
//       this._firstname=newFirstname;
//     }
//     else
//     {
//       console.error(`Bhai firstname must be a string`);
//     }
//   }

//   set lastname(newLastname){
//     if(typeof newLastname==="string" && newLastname.length>0)
//     {
//       this._lastname=newLastname;
//     }
//     else{
//       console.error(`Bhai lastname must be a string`)
//     }
//   }

//   set age(newage)
//   {
//     if(newage>0){
//       this._age=newage;
//     }
//     else{
//       console.error('Bhai age must be a positive number');
//     }
//   }

//   get firstname(){
//     return this._firstname;
//   }

//   get lastname(){
//     return this._lastname;
//   }

//   get age(){
//     return this._age;
//   }

//   get fullname(){
//     return this._firstname+' '+this._lastname;
//   }
// }

// const p1=new person("rahul","dravid",40);
// console.log(p1.firstname);
// console.log(p1.lastname);
// console.log(p1.fullname);
// console.log(p1.age);

// let a=1;
// let b=2;
// [a,b]=[b,a];
// console.log(b);
// console.log(a);

// const colors=["red","green","blue","violet","indigo"];

// // [colors[0],colors[4]]=[colors[4],colors[0]];

// const [firstcolor,secondcolor,thirdcolor,...extracolors]=colors;

// console.log(extracolors); 

// function displayperson({firstname,lastname,age,job="hi"}){
//    console.log(`name: ${firstname} ${lastname}`);
//    console.log(`age:${age} yrs old`);
//    console.log(`job:${job}`);
// }

// const person1={
//   firstname:"rahul",
//   lastname:"dravid",
//   age:40,
//   job:"cricketer"
// }

// const person2={
//   firstname:"sachin",
//   lastname:"tendulkar",
//   age:40,
// }

// displayperson(person2);

// const {firstname,lastname,age,job="hi"} = person2;

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);

// const person={
//    name:"megha sumanth",
//    age:20,
//    isstudent:true,
//    hobbies:["playing chess","cricket"],
//    address:
//    {
//     country:"india",
//     state:"telangana",
//     city:"hyderabad",
//     streetno: 49 ,
//    }
// }

// for(const property in person.address)
// {
//     console.log(person.address[property]);
// }

// console.log(person.hobbies[1]);



// class person{
//   constructor(name,age,...address)
//   {
//     this.name=name;
//     this.age=age;
//     this.address= new Address(...address);
//   }
// }

// class Address{
//   constructor(street,city,country){
//         this.street=street;
//         this.city=city;
//         this.country=country;
//   }
// }

// const person1=new person("sumanth",20,"ny","hyd","ind");
// const person2=new person("rahul",22,"du","delhi","ind");

// console.log(person1.age);
// console.log(person1.name);
// console.log(person1.address.country);

// console.log(person2.age);
// console.log(person2.name);
// console.log(person2.address.country);


// const fruits=[{name:"apple",color:"red",calories:95},
//               {name:"orange",color:"orange",calories:45},
//               {name:"banana",color:"yellow",calories:105},
//               {name:"coconut",color:"white",calories:150},
//               {name:"pineapple",color:"yellow",calories:37}];

// for(let i=0;i<5;i++)
// {
// console.log(fruits[i].name);
// console.log(fruits[i].color);
// console.log(fruits[i].calories);

// }

// fruits.push({name:"grapes",color:"green",calories:70});
// fruits.splice(2,2);
// console.log(fruits);

// fruits.forEach(fruit=> console.log(fruit.calories));
// const fruitsname=fruits.map(fruit=> fruit.calories);
// console.log(fruitsname);


// const mincalfruit=fruits.reduce((maxi,fruit)=>{
//    if(fruit.calories<maxi.calories)
//    {
//     maxi=fruit
//     return maxi;
//    } 
//    else
//    {
//     return maxi;
//    }
// });
// console.log(mincalfruit.calories);


// const people=[{name:"megha",age:20,gpa:7.83},
//                {name:"arjun",age:19,gpa:10},
//                {name:"rahul",age:18,gpa:7.3},
//                {name:"ravi",age:12,gpa:7.00},
// ]

// people.sort((a,b)=>b.name.localeCompare(a.name));

// console.log(people);

// const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array)
// {
//    for(let i=array.length-1;i>=0;i--)
//    {
//        const random=Math.floor(Math.random()*(i+1));

//        [array[i],array[random]]=[array[random],array[i]];
//    }
// }

 
//  const date=new Date();

//  date.setFullYear(2024);
//  date.setMonth(11);
//  date.setDate(1);
//  date.setHours(14);
//  date.setMinutes(45);
//  date.setSeconds(47);

// console.log(date);

//  const year=date.getFullYear();
//  const month=date.getMonth();
//  const day=date.getDate();
//  const dayofweek=date.getDay();
//  const hour=date.getHours(); 
//  const min=date.getMinutes();
//  const sec=date.getSeconds();
//  const ms=date.getMilliseconds();
 
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayofweek);
// console.log(hour);
// console.log(min);
// console.log(sec);
// console.log(ms);

 
// const date1=new Date("2023-12-31");
// const date2=new Date("2023-01-01");

// if(date2>date1)
// {
//   console.log(`happy new year`);
// }


 
// function outer()
// {
//    let message='hello';

//    function inner()
//    {
//      console.log(message);
//    }


//    inner();
// }

// message="hi";

// outer();



// const timeoutid=setTimeout(()=>window.alert('hello'),3000);
  
// clearTimeout(timeoutid);

// window.alert(timeoutid);
// let timeoutid;
// function starttimer()
// {
//   timeoutid=setTimeout(()=>window.alert("hello"),3000);
//   console.log('started');
// }
// function cleartimer()
// {
//   clearTimeout(timeoutid);
//   console.log('cleared');
// }

// function loadData(){
//   console.time("loadData");
//   for(let i=0;i<10000;i++)
//   {}
//   console.timeEnd("loadData");
// }


// loadData();


// let number=123456.789;
// number=number.toLocaleString("hi-IN",{style:"currency",currency:"INR"});



// console.log(number);


// function findinterest()
// {
//   let pa=document.getElementById('pa');
// let ir=document.getElementById('ir');
// let y=document.getElementById('y');
// let output=document.getElementById('output');
// let pa1=Number(pa.value);
//    let ir1=Number(ir.value);
//    let y1=Number(y.value);
//    if(pa<0||isNaN(pa1))
//    {
//      pa.value=0;
//      pa1=0;
//    }
//    if(ir<0||isNaN(ir1))
//    {
//      ir.value=0;
//      ir1=0;
//    }
//    if(y<0||isNaN(y1))
//    {
//      y.value=0;
//      y1=0;
//    }
//    let result=Number(pa1*(ir1/100)*y1)+Number(pa1);
//    result=Number(result);
//    result=result.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
//    output.textContent=`Total ${result}`;
// }

// function updateclock(){
//   const now=new Date();
//   const hours=now.getHours().toString().padStart(2,0);
//   const minutes=now.getMinutes().toString().padStart(2,0);
//   const seconds=now.getSeconds().toString().padStart(2,0);
//   let meridian;
//   if(hours<12) meridian="AM";
//   else meridian="PM";
//   const timestring=`${hours}:${minutes}:${seconds} ${meridian}`;
//   document.getElementById("clock").textContent=timestring;
// }
// updateclock();
// setInterval(updateclock,1000);

const display=document.getElementById('display');
let timer;
let starttime=0;
let elapsedtime=0;
let isrunning=false;

function start(){
  if(isrunning===false)
  {
    starttime=Date.now()-elapsedtime;
    timer=setInterval(update,10);
    isrunning=true;
  }
}
function stop(){
   if(isrunning==true)
   {
    clearInterval(timer);
    // elapsedtime = Date.now()-starttime;
    isrunning=false;
   }
}
function reset(){
  clearInterval(timer);
  display.textContent="00:00:00:00";
}
function update(){
   const currenttime=Date.now();
   elapsedtime=currenttime-starttime;
   let hours=Math.floor(elapsedtime/(1000*60*60));
   elapsedtime=elapsedtime%(1000*60*60);
   let minutes=Math.floor(elapsedtime/(1000*60));
   elapsedtime=elapsedtime%(1000*60);
   let seconds=Math.floor(elapsedtime/1000);
   elapsedtime=elapsedtime%(1000);
   let milliseconds=Math.floor(elapsedtime%1000/10);
   elapsedtime=elapsedtime%(10);
   hours=String(hours).padStart(2,"0");
   minutes=String(minutes).padStart(2,"0");
   seconds=String(seconds).padStart(2,"0");
   milliseconds=String(milliseconds).padStart(2,"0");
   display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}

