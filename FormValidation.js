const form = document.querySelector("#form");
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")

form.addEventListener("submit",(e)=>{
 validateForm()
 e.preventDefault()
})

function validateForm()
{
    const userval = username.value.trim()
    const emailval = email.value.trim()
    const passval = password.value.trim()
    const cpassval = cpassword.value.trim()
    
    if(userval==='')
    {
        seterror(username,"This Field is required")
    }
    else{
     setsuccess(username)
    };
    if(emailval===''){
        seterror(email,"This Field is required")   
    }
    else{
        setsuccess(email)
       };

    if(passval===''){
        seterror(password,"This Field is required")   
    }
    else if( passval.length<6){
        seterror(password,"The password length should be greater than 6") 
    }
    else{
        setsuccess(password)
       };
    if(cpassval===''){
        seterror(password,"This Field is required")   
    }
    else if( cpassval.length != passval.length){
        seterror(cpassword,"password is not equal") 
    }
    else{
        setsuccess(cpassword)
       };


    

}
function seterror(element,message)
{
    const mainElement = element.parentElement;
   const errElement = mainElement.querySelector('.error')
    
    errElement.innerText = message

    mainElement.classList.add("error")
    mainElement.classList.remove("success")

}

function setsuccess(element)
{
    const mainElement = element.parentElement  
    const errElement = mainElement.querySelector(".error")
    
    errElement.innerText = " "
    mainElement.classList.add("success")
    mainElement.classList.remove("error")

}