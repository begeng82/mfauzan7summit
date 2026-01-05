function updateWaktu() {
  const sekarang = new Date();
  document.getElementById("waktu").innerHTML =
    sekarang.toLocaleDateString('id-ID') + " | " +
    sekarang.toLocaleTimeString('id-ID');
}
setInterval(updateWaktu, 1000);
updateWaktu();
