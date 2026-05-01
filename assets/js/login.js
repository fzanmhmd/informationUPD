function masuk() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (
    (username === 'galeh' && password === '123') ||
    (username === 'ojan' && password === '123')
  ) {
    ShowToast('Login Berhasil. Tunggu Sebentar...');
  setTimeout(() => {
    window.location.href = '/pages/tampilan.html';
  }, 1500);
  } else {
    ShowToast('Username atau Password Anda Salah!');
  }
}

function ShowToast(pesan){
  const p = document.getElementById(`toast`)
  p.innerText = pesan
  p.classList.add(`show`)
  setTimeout(() => p.classList.remove('show'), 3000)
}
