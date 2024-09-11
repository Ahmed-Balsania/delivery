 let main = document.querySelector(".main");

 let dialog = document.querySelector("#dialog");

 let cancelbtn = document.querySelector("#cancelbutn");
 cancelbutn.addEventListener("click",()=>{
     dialog.close();
 });


// // let registerButton = document.createElement("button");
 registerButton.innerText="Register Now !";
// // registerButton.classList.add("registerButton");
 main.append(registerButton);
 window.addEventListener("load",()=>{
   setTimeout( function open(event){
     dialog.showModal();
     },1000
   )
       
 });


 let submit = document.querySelector("#form_submit");
 submit.addEventListener("click",()=>{
     dialog.close();
 });

 let menu= document.querySelector(".menu");
 menu.addEventListener("click",()=>{
   location.href="healthy.html";
 });


