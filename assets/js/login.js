document.getElementById('login').addEventListener('click', function(){
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  if (username === 'galeh' && password === '123' || username === 'ojan' && password === '123' ){
    window.location.href = '/pages/tampilan.html'
  } else{
    alert(`Username atau Password Anda Salah!`)
  }
});