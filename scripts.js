document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const minat = document.getElementById('minat').value.trim();
    
    if(!nama || !email || !minat) {
      alert("⚠️ Harap isi semua kolom!");
      return;
    }
    
    const message = `🎉 Pendaftaran berhasil!\n
    Nama: ${nama}
    Email: ${email}
    Minat: ${minat}\n
    Kami akan menghubungi Anda segera.`;
    
    alert(message);
    
    form.reset();
  });
});