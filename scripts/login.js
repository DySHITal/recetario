const secret = document.getElementById('adm'),
    login = document.getElementById('login');

let visible = false;

secret.addEventListener('click', () => {
    if (visible){
        login.style.display = 'none';
    } else {
        login.style.display = 'block';
    }
    visible = !visible
    
});
