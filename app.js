const POPULATION = 1000000;

let trueMean = 169.8;

function normal(mean,std){

let u=Math.random();
let v=Math.random();

let z=
Math.sqrt(-2*Math.log(u))
*Math.cos(2*Math.PI*v);

return mean+std*z;

}

function createPerson(){

const gender=
Math.random()<0.5
?"男性"
:"女性";

let age;

let r=Math.random();

if(r<0.04){

age=Math.floor(Math.random()*5);

}
else if(r<0.13){

age=5+
Math.floor(Math.random()*10);

}
else if(r<0.23){

age=15+
Math.floor(Math.random()*10);

}
else if(r<0.47){

age=25+
Math.floor(Math.random()*20);

}
else if(r<0.75){

age=45+
Math.floor(Math.random()*20);

}
else{

age=65+
Math.floor(Math.random()*40);

}

let height;

if(age<3){

height=
50+
Math.random()*40;

}
else{

height=
gender==="男性"
?normal(171,7)
:normal(158,6);

}

let sleep=
Math.max(
2,
Math.min(
14,
normal(7.2,1.2)
)
);

let work;

if(age<6) work=0;
else if(age<12) work=5;
else if(age<15) work=7;
else if(age<18) work=9;
else if(age<23) work=7;
else if(age<65) work=8;
else work=1;

return{

gender,
age,
height,
sleep,
work

};

}
