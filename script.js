
/* ===== DATA ===== */
const BAHAN = {
  tepung: 'Tepung', mentega: 'Mentega', gula: 'Gula', telur: 'Telur', susu: 'Susu',
  coklat: 'Coklat Bubuk', chocochip: 'Choco Chip', oreo: 'Oreo', meses: 'Meses', kacang: 'Selai Kacang'
};
 
const RESEP = [
  { id: 'chocochip', nama: 'Chocolate Chip Cookies', waktu: 25, level: 'Easy', jumlah: 12,
    desk: 'Renyah di luar, lembut di tengah, penuh choco chips.', gambar: 'gambar/cookie-chocochip.png',
    bahan: [['tepung', '150 g tepung terigu'], ['mentega', '100 g mentega'], ['gula', '75 g gula'], ['telur', '1 butir telur'], ['chocochip', '50 g choco chips']],
    langkah: [['Campur mentega & gula', 'Aduk mentega dan gula hingga lembut, pucat, dan tercampur rata.'],
              ['Masukkan telur', 'Tambahkan telur, aduk sampai adonan menyatu.'],
              ['Tambah tepung', 'Masukkan tepung sedikit demi sedikit, aduk perlahan.'],
              ['Beri choco chips', 'Campurkan choco chips ke dalam adonan.'],
              ['Panggang', 'Bentuk bulat pipih, panggang 180°C selama 12 menit.']] },
  { id: 'doublechoco', nama: 'Double Chocolate Cookies', waktu: 30, level: 'Medium', jumlah: 14,
    desk: 'Cookie cokelat pekat dengan potongan cokelat melimpah.', gambar: 'gambar/cookie-doublechoco.png',
    bahan: [['tepung', '140 g tepung terigu'], ['mentega', '100 g mentega'], ['gula', '80 g gula'], ['telur', '1 butir telur'], ['coklat', '30 g coklat bubuk']],
    langkah: [['Kocok mentega & gula', 'Kocok hingga lembut dan mengembang.'],
              ['Masukkan telur', 'Tambahkan telur dan aduk rata.'],
              ['Campur bahan kering', 'Ayak tepung bersama coklat bubuk, lalu masukkan ke adonan.'],
              ['Bentuk adonan', 'Bulatkan adonan dan tata di loyang.'],
              ['Panggang', 'Panggang 175°C selama 13 menit.']] },
  { id: 'butter', nama: 'Butter Cookies', waktu: 20, level: 'Easy', jumlah: 20,
    desk: 'Lembut, wangi mentega, dan manisnya pas.', gambar: 'gambar/cookie-butter.png',
    bahan: [['tepung', '200 g tepung terigu'], ['mentega', '125 g mentega'], ['gula', '60 g gula'], ['telur', '1 butir telur'], ['susu', '2 sdm susu']],
    langkah: [['Kocok mentega & gula', 'Kocok sampai pucat dan lembut.'],
              ['Masukkan telur & susu', 'Tambahkan telur dan susu, aduk rata.'],
              ['Tambah tepung', 'Aduk sampai adonan bisa dibentuk.'],
              ['Cetak', 'Cetak atau bentuk adonan di loyang.'],
              ['Panggang', 'Panggang 160°C selama 15 menit.']] },
  { id: 'confetti', nama: 'Confetti Cookies', waktu: 25, level: 'Easy', jumlah: 15,
    desk: 'Perpaduan sugar cookies dengan taburan warna-warni.', gambar: 'gambar/cookie-confetti.png',
    bahan: [['tepung', '180 g tepung terigu'], ['mentega', '100 g mentega'], ['gula', '90 g gula'], ['telur', '1 butir telur'], ['meses', '30 g meses']],
    langkah: [['Kocok mentega & gula', 'Kocok sampai lembut.'],
              ['Masukkan telur', 'Tambahkan telur dan aduk.'],
              ['Tambah tepung', 'Campur tepung sampai kalis.'],
              ['Beri meses', 'Masukkan meses, aduk pelan agar warnanya tidak luntur.'],
              ['Panggang', 'Panggang 175°C selama 12 menit.']] },
  { id: 'oreo', nama: 'Oreo Cookies', waktu: 28, level: 'Easy', jumlah: 12,
    desk: 'Perpaduan cookie cokelat dan krim yang klasik.', gambar: 'gambar/cookie-oreo.png',
    bahan: [['tepung', '150 g tepung terigu'], ['mentega', '100 g mentega'], ['gula', '70 g gula'], ['telur', '1 butir telur'], ['oreo', '8 keping oreo']],
    langkah: [['Kocok mentega & gula', 'Kocok sampai lembut.'],
              ['Masukkan telur', 'Tambahkan telur dan aduk rata.'],
              ['Tambah tepung', 'Masukkan tepung, aduk sampai menyatu.'],
              ['Hancurkan oreo', 'Remukkan oreo kasar dan campurkan ke adonan.'],
              ['Panggang', 'Panggang 175°C selama 13 menit.']] },
  { id: 'peanut', nama: 'Peanut Butter Cookies', waktu: 22, level: 'Easy', jumlah: 16,
    desk: 'Gurih kacang dengan pola silang yang ikonik.', gambar: 'gambar/cookie-peanut.png',
    bahan: [['tepung', '130 g tepung terigu'], ['mentega', '50 g mentega'], ['gula', '80 g gula'], ['telur', '1 butir telur'], ['kacang', '120 g selai kacang']],
    langkah: [['Campur selai kacang', 'Aduk selai kacang, mentega, dan gula.'],
              ['Masukkan telur', 'Tambahkan telur dan aduk rata.'],
              ['Tambah tepung', 'Masukkan tepung, aduk sampai kalis.'],
              ['Beri pola silang', 'Bulatkan adonan, tekan dengan garpu membentuk silang.'],
              ['Panggang', 'Panggang 175°C selama 12 menit.']] }
];
 
/* ===== PENYIMPANAN (localStorage) ===== */
const simpan = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
const ambil = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
 
const semuaResep = () => RESEP.concat(ambil('resepBaru', []));
const cariResep = id => semuaResep().find(r => r.id === id);
const getFavorit = () => ambil('favorit', []);
const isFavorit = id => getFavorit().includes(id);
function hapusResepPercobaan() {
  const kunciPembersihan = 'resepPercobaanCheeseCakeDibersihkan';
  if (ambil(kunciPembersihan, false)) return;

  const resepBaru = ambil('resepBaru', []);
  const resepPercobaan = resepBaru.filter(r => r.nama?.trim().toLowerCase() === 'cheese cake');

  const idDihapus = new Set(resepPercobaan.map(r => r.id));
  if (resepPercobaan.length) {
    simpan('resepBaru', resepBaru.filter(r => !idDihapus.has(r.id)));
    simpan('favorit', getFavorit().filter(id => !idDihapus.has(id)));
  }
  simpan(kunciPembersihan, true);
}
function toggleFavorit(id) {
  let f = getFavorit();
  f = f.includes(id) ? f.filter(x => x !== id) : f.concat(id);
  simpan('favorit', f);
  return f.includes(id);
}
 
/* ===== NAVBAR ===== */
function buatNavbar() {
  const el = document.getElementById('navbar');
  if (!el) return; // navbar sudah ditulis manual di HTML
  const aktif = document.body.dataset.halaman;
  const menu = [['home', 'index.html', 'Home'], ['find', 'find.html', 'Find'], ['recipes', 'recipes.html', 'Recipes'], ['favorite', 'favorite.html', 'Favorite']];
  el.innerHTML = `<a class="brand" href="index.html"><img src="gambar/logo.png" alt=""><span>Cookie Finder</span></a>
    <nav>${menu.map(m => `<a href="${m[1]}" class="${m[0] === aktif ? 'aktif' : ''}">${m[2]}</a>`).join('')}</nav>`;
}
 
/* ===== KARTU RESEP ===== */
function kartuResep(r, opsi = {}) {
  const meta = `<div class="meta"><span>◷ ${r.waktu} min</span><span>★ ${r.level}</span><span>● ${r.jumlah} cookies</span></div>`;
  return `<div class="kartu">
    ${opsi.match != null ? `<span class="badge-match">${opsi.match}% match</span>` : ''}
    ${opsi.hati ? `<button class="hati ${isFavorit(r.id) ? 'on' : ''}" data-id="${r.id}" aria-label="Favorit">${isFavorit(r.id) ? '♥' : '♡'}</button>` : ''}
    <div class="lingkaran"><img src="${r.gambar}" alt="${r.nama}"></div>
    <h3>${r.nama}</h3>
    ${opsi.meta ? meta : ''}
    ${opsi.desk ? `<p class="desk">${r.desk}</p>` : ''}
    ${opsi.cocok ? opsi.cocok : ''}
    <a class="btn" href="resep.html?id=${r.id}">Lihat resep</a>
  </div>`;
}
 
function pasangHati(wadah, setelah) {
  wadah.querySelectorAll('.hati').forEach(b => b.addEventListener('click', () => {
    const on = toggleFavorit(b.dataset.id);
    b.classList.toggle('on', on);
    b.textContent = on ? '♥' : '♡';
    if (setelah) setelah();
  }));
}
 
/* ===== HALAMAN: HOME ===== */
function initHome() {
  const w = document.getElementById('rekomendasi');
  w.innerHTML = RESEP.slice(0, 3).map(r => kartuResep(r, { meta: true })).join('');
}
 
/* ===== HALAMAN: FIND ===== */
function initFind() {
  const grid = document.getElementById('grid-bahan');
  const pilih = new Set();
  const info = document.getElementById('info-pilih');
  const dasar = ['tepung', 'mentega', 'gula', 'telur', 'susu'];
  const rasa = ['coklat', 'chocochip', 'oreo', 'meses', 'kacang'];
  const tile = k => `<button class="bahan" data-k="${k}"><img src="bahan/bahan-${k}.png" alt=""><span>${BAHAN[k]}</span></button>`;
  document.getElementById('bahan-dasar').innerHTML = dasar.map(tile).join('');
  document.getElementById('bahan-rasa').innerHTML = rasa.map(tile).join('');
 
  function perbarui() {
    document.getElementById('jumlah-pilih').textContent = `${pilih.size} bahan dipilih`;
    document.getElementById('daftar-pilih').textContent = pilih.size ? [...pilih].map(k => BAHAN[k].toLowerCase()).join(', ') : 'belum ada bahan dipilih';
  }
  grid.addEventListener('click', e => {
    const b = e.target.closest('.bahan');
    if (!b) return;
    const k = b.dataset.k;
    pilih.has(k) ? pilih.delete(k) : pilih.add(k);
    b.classList.toggle('dipilih', pilih.has(k));
    perbarui();
  });
  document.getElementById('btn-reset').addEventListener('click', () => {
    pilih.clear();
    grid.querySelectorAll('.bahan').forEach(b => b.classList.remove('dipilih'));
    perbarui();
  });
  document.getElementById('btn-cari').addEventListener('click', () => {
    if (!pilih.size) { alert('Pilih minimal satu bahan dulu ya.'); return; }
    tampilHasil([...pilih]);
  });
  document.getElementById('btn-ubah').addEventListener('click', () => {
    document.getElementById('hasil').hidden = true;
    document.getElementById('pemilih').hidden = false;
  });
 
  function tampilHasil(dipilih) {
    const hasil = semuaResep().map(r => {
      const ada = r.bahan.filter(b => dipilih.includes(b[0])).length;
      return { r, ada, persen: Math.round(ada / r.bahan.length * 100) };
    }).filter(x => x.ada > 0).sort((a, b) => b.persen - a.persen);
 
    document.getElementById('chip-bahan').innerHTML = dipilih.map(k => `<span class="chip">${BAHAN[k]}</span>`).join('');
    const w = document.getElementById('kartu-hasil');
    w.innerHTML = hasil.length ? hasil.map(({ r, persen }) => {
      const cocok = `<div class="cocok"><strong>Bahan yang sesuai</strong><p>${r.bahan.map(b => dipilih.includes(b[0]) ? `<span class="ok">✓ ${BAHAN[b[0]]}</span>` : `<span class="kurang">${BAHAN[b[0]]}</span>`).join(' • ')}</p></div>`;
      return kartuResep(r, { match: persen, hati: true, meta: true, cocok });
    }).join('') : '<p class="kosong">Belum ada resep yang cocok. Coba pilih bahan lain.</p>';
    pasangHati(w);
    document.getElementById('pemilih').hidden = true;
    document.getElementById('hasil').hidden = false;
    window.scrollTo(0, 0);
  }
  perbarui();
}
 
/* ===== HALAMAN: RECIPES ===== */
function initRecipes() {
  const w = document.getElementById('semua-resep');
  const modal = document.getElementById('modal');
  const form = document.getElementById('form-resep');
  const preview = document.getElementById('f-preview');
  let gambarBaru = '';
 
  function gambar() {
    w.innerHTML = semuaResep().map(r => kartuResep(r, { hati: true, meta: true, desk: true, hapus: true })).join('');
    pasangHati(w);
    w.querySelectorAll('.btn-hapus').forEach(b => b.addEventListener('click', () => { if (hapusResep(b.dataset.hapus)) gambar(); }));
  }
  gambar();
 
  const tutup = () => { modal.hidden = true; form.reset(); preview.hidden = true; gambarBaru = ''; };
  document.getElementById('btn-tambah').addEventListener('click', () => { modal.hidden = false; document.getElementById('f-nama').focus(); });
  document.getElementById('f-batal').addEventListener('click', tutup);
  modal.addEventListener('click', e => { if (e.target === modal) tutup(); });
 
  // gambar (opsional): dikecilkan dulu supaya muat di penyimpanan browser
  document.getElementById('f-gambar').addEventListener('change', e => {
    const file = e.target.files[0];
    gambarBaru = ''; preview.hidden = true;
    if (!file) return;
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        const s = Math.min(1, 300 / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        gambarBaru = c.toDataURL('image/png');
        preview.src = gambarBaru; preview.hidden = false;
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
 
  form.addEventListener('submit', e => {
    e.preventDefault();
    const baris = id => document.getElementById(id).value.split('\n').map(s => s.trim()).filter(Boolean);
    const baru = ambil('resepBaru', []);
    baru.push({
      id: 'baru' + Date.now(), custom: true,
      nama: document.getElementById('f-nama').value.trim(),
      desk: document.getElementById('f-desk').value.trim(),
      waktu: Number(document.getElementById('f-waktu').value),
      level: '', jumlah: 0,
      gambar: gambarBaru || GAMBAR_DEFAULT,
      bahan: baris('f-bahan').map((t, i) => ['x' + i, t]),
      langkah: baris('f-langkah').map((t, i) => ['Langkah ' + (i + 1), t])
    });
    if (!simpan('resepBaru', baru)) { alert('Penyimpanan browser penuh. Coba pakai gambar yang lebih kecil atau hapus resep lama.'); return; }
    tutup();
    gambar();
  });
}
 
/* ===== HALAMAN: DETAIL RESEP ===== */
function initResep() {
  const id = new URLSearchParams(location.search).get('id');
  const r = cariResep(id) || RESEP[0];
  document.title = r.nama + ' - Cookie Finder';
  document.getElementById('r-gambar').src = r.gambar;
  document.getElementById('r-nama').textContent = r.nama;
  document.getElementById('r-meta').innerHTML = `<span>◷ ${r.waktu} min</span><span>★ ${r.level}</span><span>● ${r.jumlah} cookies</span><span>✓ ${r.bahan.length} bahan</span>`;
 
  const btnFav = document.getElementById('r-fav');
  const aturFav = () => btnFav.textContent = isFavorit(r.id) ? '♥ Tersimpan' : '♡ Add to favorites';
  aturFav();
  btnFav.addEventListener('click', () => { toggleFavorit(r.id); aturFav(); });
 
  document.getElementById('r-bahan').innerHTML = r.bahan.map((b, i) =>
    `<li><label><input type="checkbox" id="cb${i}"><span class="kotak"></span>${b[1]}</label></li>`).join('') || '<li>Belum ada bahan.</li>';
 
  let i = 0;
  const L = r.langkah;
  const judul = document.getElementById('l-judul'), isi = document.getElementById('l-isi'), no = document.getElementById('l-no'), dots = document.getElementById('l-dots');
  function langkah() {
    if (!L.length) { no.textContent = ''; judul.textContent = 'Belum ada langkah'; isi.textContent = ''; return; }
    no.textContent = `Langkah ${i + 1} dari ${L.length}`;
    judul.textContent = L[i][0];
    isi.textContent = L[i][1];
    dots.innerHTML = L.map((_, n) => `<i class="${n === i ? 'on' : ''}"></i>`).join('');
    document.getElementById('l-prev').style.visibility = i === 0 ? 'hidden' : 'visible';
    document.getElementById('l-next').style.visibility = i === L.length - 1 ? 'hidden' : 'visible';
  }
  document.getElementById('l-prev').addEventListener('click', () => { if (i > 0) { i--; langkah(); } });
  document.getElementById('l-next').addEventListener('click', () => { if (i < L.length - 1) { i++; langkah(); } });
  langkah();
}
 
/* ===== HALAMAN: FAVORITE ===== */
function initFavorit() {
  const w = document.getElementById('daftar-favorit');
  function gambar() {
    const f = semuaResep().filter(r => isFavorit(r.id));
    w.innerHTML = f.length ? f.map(r => kartuResep(r, { hati: true, desk: true })).join('')
      : '<p class="kosong">Belum ada favorit. Simpan resep dengan menekan ikon hati.</p>';
    pasangHati(w, gambar);
  }
  gambar();
}
 
/* ===== JALANKAN ===== */
document.addEventListener('DOMContentLoaded', () => {
  hapusResepPercobaan();
  buatNavbar();
  const h = document.body.dataset.halaman;
  ({ home: initHome, find: initFind, recipes: initRecipes, resep: initResep, favorite: initFavorit })[h]?.();
});