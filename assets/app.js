document.getElementById('input-tanggal').addEventListener('change', function() {
  const tanggal = new Date(this.value + 'T00:00:00');
  document.getElementById('nama-hari').textContent = tanggal.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});

document.getElementById('nama-hari').addEventListener('click', function() {
  document.getElementById('input-tanggal').showPicker();
});
