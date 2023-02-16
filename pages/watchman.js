let notLogin = JSON.parse(localStorage.getItem('lguser'));

if(!notLogin){
    window.location.href = './pages/samples/login.html';
}