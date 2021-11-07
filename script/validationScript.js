var users = new Array();




function validation(){

    var fullName = document.getElementById("fullName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("floatingPassword").value;
    var password2 = document.getElementById("floatingPasswordAgain").value;
    var house = document.getElementById("house").value;
    var extra = document.getElementById("extra").value;



    var valid = new Boolean(true);
    var errorMessage = [];

    if(fullName == ""){
        valid = false;
        errorMessage.push("No Full Name specified\n");

    }

    if(emailAddress == ""){
        valid = false;
        errorMessage.push("No E-mail specified\n");
    }

    if(phoneNumber == ""){
        valid = false;
        errorMessage.push("No Phone Number specified\n");

    }

    if(password == ""){
        valid = false;
        errorMessage.push("No Password specified\n");
    }

    if(password2 == ""){
        valid = false;
        errorMessage.push("No Password specified\n");
    }

    if(password2 != password){
        valid = false;
        errorMessage.push("Passwords not Match\n");
    }

    if (document.getElementById("agree").checked == false){
        valid = false;
        errorMessage.push("Regulations are not accepted\n");
    }

    let user = {
        fullName: fullName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        password: password,
        house: house,
        extra: extra
    }

    users.push(user);

    var j= 0;
    for (let i= 0; i<users.length; i++){
        if(user.fullName == users[i].fullName){
            j++;
        }
    }

    if(j > 1){
        valid = false;
        errorMessage.push("There is existed user\n");
    }


    document.getElementById("validationProblemMessage").innerHTML = errorMessage;



}