export default function Home() {
  return (
    <main>
      <header>
        <a href="/" className="brand">
          <span className="brand-mark">ᯤ</span>
          <span>AHU BATAK</span>
        </a>

        <nav>
          <a href="#marga">Marga</a>
          <a href="#budaya">Budaya</a>
          <a href="#komunitas">Komunitas</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-pattern" />

        <div className="hero-content">
          <p className="eyebrow">HORAS • SALAM BATAK</p>

          <h1>
            Hita Batak.
            <br />
            Hita Parsaoran.
          </h1>

          <p className="hero-description">
            Ruang digital untuk mengenal marga, budaya, sejarah,
            komunitas, dan cerita Batak dari generasi ke generasi.
          </p>

          <div className="hero-actions">
            <a href="#marga" className="button button-primary">
              Jelajahi Marga
            </a>

            <a href="#komunitas" className="button button-outline">
              Lihat Komunitas
            </a>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow dark">AHU BATAK</p>

        <h2>
          Satu akar,
          <br />
          banyak cerita.
        </h2>

        <p>
          AHU BATAK menjadi ruang bersama untuk mendokumentasikan
          identitas, pengetahuan, dan kehidupan masyarakat Batak
          dalam dunia digital.
        </p>
      </section>

      <section id="marga" className="feature-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow dark">01 • MARGA</p>
      <h2>Marga & Parsadaan</h2>
    </div>
    <span className="section-number">01</span>
  </div>

  <div className="cards">
    <article className="card">
      <div className="card-icon">M</div>
      <h3>Kenali Marga</h3>
      <p>
        Mengenal akar marga, silsilah, dan hubungan
        kekerabatan dalam masyarakat Batak.
      </p>
    </article>

    <article className="card">
      <div className="card-icon">P</div>
      <h3>Parsadaan</h3>
      <p>
        Ruang untuk mengenal perkumpulan marga dan
        membangun hubungan antar-generasi.
      </p>
    </article>

    <article className="card">
      <div className="card-icon">H</div>
      <h3>Hita & Kekerabatan</h3>
      <p>
        Memahami Dalihan Na Tolu dan nilai kebersamaan
        yang menjadi bagian penting budaya Batak.
      </p>
    </article>
  </div>
</section>

<section id="budaya" className="feature-section culture">
  <div className="section-heading">
    <div>
      <p className="eyebrow dark">02 • WARISAN</p>
      <h2>Budaya Batak</h2>
    </div>
    <span className="section-number">02</span>
  </div>

  <div className="culture-grid">
    <div className="culture-item">
      <strong>Ulos</strong>
      <span>Simbol kasih, identitas, dan nilai kehidupan.</span>
    </div>

    <div className="culture-item">
      <strong>Gondang</strong>
      <span>Warisan musik dan tradisi masyarakat Batak.</span>
    </div>

    <div className="culture-item">
      <strong>Tortor</strong>
      <span>Gerak dan ekspresi budaya dalam acara adat.</span>
    </div>

    <div className="culture-item">
      <strong>Bahasa</strong>
      <span>Bahasa sebagai jembatan menjaga identitas generasi.</span>
    </div>
  </div>
</section>

<section id="komunitas" className="community">
  <p className="eyebrow">03 • KOMUNITAS</p>

  <h2>
    Hita marsada.
    <br />
    Hita marsiurupan.
  </h2>

  <p>
    Tempat bertemu, berbagi cerita, informasi, kegiatan parsadaan,
    dan membangun hubungan Batak di mana pun berada.
  </p>

  <a href="#komunitas" className="button button-light">
    Masuk Ruang Komunitas
  </a>
</section>

<footer>
  <div>
    <strong>AHU BATAK</strong>
    <p>Hita Batak, Hita Parsaoran.</p>
  </div>

  <div className="footer-links">
    <a href="#marga">Marga</a>
    <a href="#budaya">Budaya</a>
    <a href="#komunitas">Komunitas</a>
  </div>
</footer>
    </main>
  );
}
