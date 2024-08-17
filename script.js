function signin(){
    window.location='./login.html'
}

function signup(){
    window.location='./register.html'
}

function signout(){
    window.location='./index.html'
}


function register(){
    user={
        acno:acno.value,
        uname:uname.value,
        pass:upass.value,
        balance:0
    }
    if(user.acno==''||user.name==''||user.pass==''){
        alert("Please Fill missing fields")
    }
    else{
        if(user.acno in localStorage){
            alert("Already exist")
        }
        else{
            localStorage.setItem(user.acno,JSON.stringify(user))
            window.location='./login.html'
            alert("User Registered successfully")

        }
    }
}

function login(){
    logindetails={
        ac:acno.value,
        pass:lpass.value,
    }
    if(logindetails.ac=="" || logindetails.pass==""){
        alert("Please fill all the fields");
    }
    else if(logindetails.ac in localStorage){
        let key=logindetails.ac;
        let keyvalues=JSON.parse(localStorage.getItem(key));
        if(logindetails.pass==keyvalues.pass){
            window.location="./home.html";
            alert("Logged Succesfully");
            localStorage.setItem('loginAccNo',key);
           
        }
        else{
            alert("incorrect password");
        }
    }
    else{
        alert("account number not found");
    }


}


function deposit() {
    const acno = document.getElementById('dacno').value;
    const amount = parseFloat(document.getElementById('damount').value);

    if (acno === '' || isNaN(amount) || amount <= 0) {
        alert("Please fill invalid account number and amount");
        return;
    }

    let accountData = localStorage.getItem(acno);

    if (accountData) {
        let account = JSON.parse(accountData);

        account.balance += amount;

        localStorage.setItem(acno, JSON.stringify(account));

        document.getElementById('depositamount').innerHTML = `Account Number: ${acno} | Current Balance: $${account.balance}`;
        alert("Your amount has been deposited successfully");
    } else {
        alert("Please check your account number");
    }
}

function withdraw(){
    const acno =document.getElementById('wacno').value;
    const amount = parseFloat(document.getElementById('wamount').value);
    if (acno === '' || isNaN(amount) || amount <= 0) {
        alert("Please fill invalid account number and amount");
        return;
    }

    let accountData = localStorage.getItem(acno);

    if (accountData) {

        let account = JSON.parse(accountData);

        if(account.balance>=amount){
            alert(`Balance(Before Withdrawal) : ${account.balance}`)
            alert(`Withdrawal amount : ${amount}`)
    
    
            account.balance -= amount;
    
            localStorage.setItem(acno, JSON.stringify(account));
            alert("Your amount is withdrawed succesfully")
    
            alert(`After Withdrawal balance : ${account.balance}`)
    
    
            document.getElementById('withdrawamount').innerHTML = `Account Number: ${acno} | Current Balance: $${account.balance}`;
        }
        else{
            alert("Your amount is greater than your current balance")
        }
       
        
    } else {
        alert("Please check your account number");
    }


}








