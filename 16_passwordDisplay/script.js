let eyeIocn = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeIocn.addEventListener('click', ()=>{
    if(password.type == "password"){
        password.type = "text";
        eyeIocn.className = "fa-solid fa-eye"
        
    }else{
        password.type = 'password';
        eyeIocn.className = "fa-solid fa-eye-slashfa-solid fa-eye-slash"
    }
})
