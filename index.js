function loginValidate(){
    
    if(usernameValidate() && passwordValidate()){
        window.location.href="../static/index.html"
    }
}
document.addEventListener("keydown",function(e){
    if(e.key==='Enter'){
        if(usernameValidate() && passwordValidate()){
            window.location.href="../static/index.html"
        }
    }
});

function usernameValidate(){
    //By default username and password will be admin
    if(document.querySelector(".username").value==="admin")
        return true;
    else if(document.querySelector(".username").value.length===0){
        document.getElementById("invalid-username").style.color="red";
        document.getElementById("invalid-username").innerHTML=document.querySelector(".username").validationMessage;
        return false;
    }
        document.getElementById("invalid-username").style.color="red";
        document.getElementById("invalid-username").innerHTML="Invalid Username";
        return false;
}

function passwordValidate(){
    document.getElementById("invalid-password").style.color="red";
    //By default username and password will be admin
    if(document.querySelector(".password").value==="admin")
        return true;
    else if(document.querySelector(".password").value.length===0){
        document.getElementById("invalid-password").innerHTML=document.querySelector(".password").validationMessage;
        return false;
    }

        document.getElementById("invalid-password").innerHTML="Invalid Password";
        return false;
}

function passwordResetValidate(){
    if(document.querySelector(".signupusername").value.length===0){
        document.getElementById("invalid-signupusername").style.color="red";
        document.getElementById("invalid-signupusername").innerHTML=document.querySelector(".signupusername").validationMessage;
        return;
    }
    if(document.querySelector(".signuppassword").value.length===0){
        document.getElementById("invalid-signuppassword").style.color="red";
        document.getElementById("invalid-signuppassword").innerHTML=document.querySelector(".signuppassword").validationMessage;
        return;
    }
     if(document.querySelector(".signupre-password").value!=document.querySelector(".signuppassword").value){
        document.getElementById("invalid-signupre-password").style.color="red";
        document.getElementById("invalid-signupre-password").innerHTML="Passwords doesn't Match";
        return;
    }
    document.querySelector(".signup-heading").innerHTML="Password Reset Successful ✅"
    document.querySelector(".login-redirect").innerHTML="Click here to return to login page";

}

function signupValidate(){
    if(document.querySelector(".signupusername").value.length===0){
        document.getElementById("invalid-signupusername").style.color="red";
        document.getElementById("invalid-signupusername").innerHTML=document.querySelector(".signupusername").validationMessage;
        return;
    }
    if(document.querySelector(".signuppassword").value.length===0){
        document.getElementById("invalid-signuppassword").style.color="red";
        document.getElementById("invalid-signuppassword").innerHTML=document.querySelector(".signuppassword").validationMessage;
        return;
    }
     if(document.querySelector(".signupre-password").value!=document.querySelector(".signuppassword").value){
        document.getElementById("invalid-signupre-password").style.color="red";
        document.getElementById("invalid-signupre-password").innerHTML="Passwords doesn't Match";
        return;
    }
    document.querySelector(".signup-heading").innerHTML="Your account is created Sucessfully"
    document.querySelector(".login-redirect").innerHTML="Click here to return to login page";
}


function redirect(){

    var mobNo=document.querySelector(".mob-no");
    if(mobNo.value.length===10 && operatorValidate() && planValidate())
    window.location.href="../static/addplan.html";
    else{
        document.getElementById('invalid-no').style.color="red";
        document.getElementById('invalid-no').innerHTML=mobNo.validationMessage;
    }
}

function operatorValidate(){
    if(document.querySelector(".option-name").selected){
    // document.querySelector(".option-name").selected is true i.e "select operator" placeholder
    document.getElementById("invalid-operator").style.color="red";
    document.getElementById("invalid-operator").innerHTML="Please select this feild."
    
    return false;
    }
    return true;
}

function planValidate(){
    if(!(document.getElementById("plantype-pre").checked ||
     document.getElementById("plantype-post").checked)){
        document.getElementById("invalid-plan").style.color="red";
         document.getElementById("invalid-plan").innerHTML="Please select any Plan."
         return false;
     }
     return true;
}


function payment() {
    window.location.href="../static/payment.html"
    
}


function netBankingRedirect(){
    document.getElementById("status-msg").innerHTML="Continue to Internet Banking"
    document.getElementById("redirect-link").innerHTML="press this link to continue"
    window.location.href="#nav-section";
}
function UPIRedirect(){
    document.getElementById("status-msg").innerHTML="Continue on your UPI mobile App "
    document.getElementById("redirect-link").innerHTML="";
    window.location.href="#nav-section";

}

function paymentValidate(){
    if(document.querySelector(".cardnum").value.length===0){
        document.getElementById("invalid-cardnum").innerHTML=document.querySelector(".cardnum").validationMessage;
        document.getElementById("invalid-cardnum").style.color="red";
        return;
    }
    if(document.querySelector(".cardnum").value.length<10){
        document.getElementById("invalid-cardnum").innerHTML="Invalid card number";
        document.getElementById("invalid-cardnum").style.color="red";
        return;
    }
    if(document.querySelector(".expiry-month").value.length===0){
        document.getElementById("invalid-month").innerHTML="Please select this field";
        document.getElementById("invalid-month").style.color="red";
        return;
    }
    if(document.querySelector(".name").value.length===0){
        document.getElementById("invalid-name").innerHTML=document.querySelector(".name").validationMessage;
        document.getElementById("invalid-name").style.color="red";
        return;
    }
    if(document.querySelector(".cvv").value.length===0){
        document.getElementById("invalid-cvv").innerHTML=document.querySelector(".cvv").validationMessage;
        document.getElementById("invalid-cvv").style.color="red";
        return;
    }
    if(document.querySelector(".cvv").value.length!=3){
        document.getElementById("invalid-cvv").innerHTML="Invalid cvv";
        document.getElementById("invalid-cvv").style.color="red";
        return;
    }
    document.getElementById("status-msg").innerHTML="Payment Successful ✅";
    document.getElementById("redirect-link").innerHTML="Return"
    window.location.href="#";
}
