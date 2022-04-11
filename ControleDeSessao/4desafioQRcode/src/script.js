//button control
$('#btn-login').on('click',login);

//user login function
function login(){
    const inputName = document.getElementById("name-login").value;
    const inputPassword = document.getElementById("password-login").value;
    fetch('/login',{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{"name":inputName, "password":inputPassword}])
    }).then(resposta => resposta.json())
    .then(anwser => {
        console.log(anwser);
        if(anwser.user=="wrongUser"){
            console.log("Usuario nao existe");
            expireCookie();
        }else if(anwser.user=="wrongPassword"){
            console.log("Senha incorreta");
            expireCookie();
        }
        else{
            createCookie("token",anwser.token,1);
            console.log("Usuario logado");
            if(anwser.user === "admin"){
                window.location.replace("http://localhost:8080/admin/");
            }else{
                window.location.replace("http://localhost:8080/user/");
            }
        }
    });
    console.log(document.cookie);
}

// Cookie creation
function createCookie(_name,_value,_expireInDays){
    let name = _name;
    let value = _value;
    let expireInDays = _expireInDays;
    let date = new Date();
    date.setTime(date.getTime() + (expireInDays * 24 * 60 * 60 * 1000));
    const expire = date.toUTCString();
    document.cookie = `${name}=${value};expires=${expire};path=/`
}

//expiring the cookie on the page 
function expireCookie(){
    const zero = new Date(8630321000);
    let expire = zero.toUTCString();
    document.cookie = `token=-1;expires=${expire};path=/`
    console.log(document.cookie);
}
expireCookie();