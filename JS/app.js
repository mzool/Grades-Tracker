'use strict';

var form = document.getElementById('form');
form.addEventListener('submit',save)
var nameStudent;
var courseStudent;
var table = document.getElementById('grades');
function save (event){
event.preventDefault();
nameStudent= event.target.student.value;
courseStudent=event.target.course.value;
var grade= Math.floor((Math.random()*100));


if(localStorage.getItem(nameStudent)===null)
{
    localStorage.setItem(nameStudent,JSON.stringify([nameStudent,grade,courseStudent]) );
    if(localStorage.getItem('allnames')===null){ localStorage.setItem('allnames',[nameStudent]);}
   else{
     var stu=  localStorage.getItem('allnames');
     localStorage.setItem('allnames',JSON.stringify([nameStudent,stu]));
    
    } 
}
var row = document.createElement('tr');
table.appendChild(row);
var stName = document.createElement('td');
row.appendChild(stName);
stName.textContent=nameStudent;
var stGrade = document.createElement('td');
row.appendChild(stGrade);
if(grade<50) {
    stGrade.style.color='red';
}
stGrade.textContent=grade;
var stCourse= document.createElement('td');
stCourse.textContent=courseStudent;
row.appendChild(stCourse);



}

var buton = document.getElementById('clear');
buton.addEventListener('click',clear)
 function clear(){

localStorage.removeItem('allnames');

 }


 for (var i=0;i<JSON.parse(localStorage.getItem('allnames')).length;i++){
    var row = document.createElement('tr');
    table.appendChild(row);
    var stName = document.createElement('td');
    row.appendChild(stName);
    stName.textContent=JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('allnames'))[i]));
 }