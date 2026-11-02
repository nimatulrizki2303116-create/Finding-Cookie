/* ===== Ganti tampilan: login / register / lupa password ===== */
const form = {
    login: document.getElementById('form-login'),
    register: document.getElementById('form-register'),
    lupa: document.getElementById('form-lupa')
};

function tampil(nama) {
    for (const k in form) {
        form[k].style.display = (k === nama) ? '' : 'none';
        form[k].querySelector('.pesan').textContent = '';
    }
}

function pesan(nama, teks, berhasil) {
    const p = form[nama].querySelector('.pesan');
    p.textContent = teks;
    p.style.color = berhasil ? '#9dffb0' : '#ffb3b3';
}

// klik link
document.getElementById('ke-register').addEventListener('click', e => { e.preventDefault(); tampil('register'); });
document.getElementById('ke-lupa').addEventListener('click', e => { e.preventDefault(); tampil('lupa'); });
document.querySelectorAll('.ke-login').forEach(a => a.addEventListener('click', e => { e.preventDefault(); tampil('login'); }));

/* ===== Data akun (disimpan di browser) ===== */
const ambilAkun = () => { try { return JSON.parse(localStorage.getItem('akun')) || []; } catch (e) { return []; } };
const simpanAkun = a => { try { localStorage.setItem('akun', JSON.stringify(a)); return true; } catch (e) { return false; } };
const rapikan = s => s.trim().toLowerCase();

/* ===== Register ===== */
form.register.addEventListener('submit', e => {
    e.preventDefault();
    const nama = document.getElementById('r-nama').value.trim();
    const email = rapikan(document.getElementById('r-email').value);
    const pass = document.getElementById('r-pass').value;
    const pass2 = document.getElementById('r-pass2').value;
    const akun = ambilAkun();

    if (pass !== pass2) return pesan('register', 'Password dan ulangi password tidak sama.');
    if (akun.some(a => a.email === email)) return pesan('register', 'Email ini sudah terdaftar. Silakan login.');

    akun.push({ nama, email, pass });
    if (!simpanAkun(akun)) return pesan('register', 'Gagal menyimpan akun di browser.');

    form.register.reset();
    tampil('login');
    document.getElementById('l-email').value = email;
    pesan('login', 'Akun berhasil dibuat. Silakan login.', true);
});

/* ===== Login ===== */
form.login.addEventListener('submit', e => {
    e.preventDefault();
    const email = rapikan(document.getElementById('l-email').value);
    const pass = document.getElementById('l-pass').value;
    const cocok = ambilAkun().find(a => a.email === email && a.pass === pass);

    if (!cocok) return pesan('login', 'Email atau password salah, atau akun belum terdaftar.');
    window.location.href = 'home.html';
});

/* ===== Lupa password ===== */
form.lupa.addEventListener('submit', e => {
    e.preventDefault();
    const email = rapikan(document.getElementById('f-email').value);
    const baru = document.getElementById('f-pass').value;
    const akun = ambilAkun();
    const orang = akun.find(a => a.email === email);

    if (!orang) return pesan('lupa', 'Email tidak ditemukan. Daftar dulu lewat Register.');

    orang.pass = baru;
    simpanAkun(akun);
    form.lupa.reset();
    tampil('login');
    document.getElementById('l-email').value = email;
    pesan('login', 'Password berhasil diganti. Silakan login.', true);
});