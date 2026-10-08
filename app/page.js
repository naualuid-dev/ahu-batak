export default function Home() {
  return (
    <main>
      <header>
        <strong>AHU BATAK</strong>

        <nav>
          <a href="#marga">Marga</a>
          <a href="#budaya">Budaya</a>
          <a href="#komunitas">Komunitas</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">HORAS! 👋</p>

        <h1>
          Hita Batak,
          <br />
          Hita Parsaoran.
        </h1>

        <p>
          Ruang digital untuk mengenal, menjaga, dan
          menghubungkan masyarakat Batak di mana pun berada.
        </p>
      </section>

      <section id="marga">
        <h2>Marga & Parsadaan</h2>
        <p>
          Kenali akar keluarga, marga, dan hubungan
          kekerabatan Batak.
        </p>
      </section>

      <section id="budaya">
        <h2>Budaya Batak</h2>
        <p>
          Ulos, gondang, tortor, bahasa, sejarah, adat,
          dan warisan leluhur.
        </p>
      </section>

      <section id="komunitas">
        <h2>Komunitas</h2>
        <p>
          Tempat bertemu, berbagi cerita, informasi,
          dan kegiatan parsadaan.
        </p>
      </section>

      <footer>
        <strong>AHU BATAK</strong>
        <p>Hita Batak, Hita Parsaoran.</p>
      </footer>
    </main>
  );
}
