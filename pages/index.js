import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpkin Seeds: A Daily Superfood</title>
        <meta name="description" content="Discover the powerful health benefits of pumpkin seeds: magnesium for sleep, zinc for immunity and skin, antioxidants for inflammation, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pumpkin Seeds: A Daily Superfood" />
        <meta property="og:description" content="Small handful, big impact: energy, mood, sleep, heart and immune health." />
        <meta property="og:type" content="website" />
      </Head>
      <main className="container">
        <section className="hero">
          <h1>Pumpkin Seeds: Small Snack, Big Impact</h1>
          <p className="tagline">Your underrated daily superfood for energy, sleep, skin, and heart health.</p>
        </section>

        <article className="card">
          <p>
            Pumpkin seeds are one of the most underrated superfoods you can eat. They?re
            packed with <strong>magnesium</strong>, which helps relax your muscles and improves
            sleep. They also contain <strong>zinc</strong>, a powerful mineral that boosts your
            immune system and keeps your skin healthy.
          </p>
          <p>
            Pumpkin seeds are rich in <strong>antioxidants</strong>, which protect your cells from
            damage and reduce inflammation. They also support <strong>heart health</strong>,
            balance <strong>blood sugar</strong>, and can even improve men?s <strong>prostate health</strong>.
          </p>
          <p>
            Just a small handful a day can make a big difference in your energy, mood, and
            overall health. So next time you need a healthy snack? grab some pumpkin seeds.
          </p>
        </article>

        <section className="benefits-grid">
          <div className="benefit">
            <h3>Magnesium</h3>
            <p>Supports muscle relaxation and deeper sleep.</p>
          </div>
          <div className="benefit">
            <h3>Zinc</h3>
            <p>Bolsters immunity and promotes healthy skin.</p>
          </div>
          <div className="benefit">
            <h3>Antioxidants</h3>
            <p>Fight oxidative stress and reduce inflammation.</p>
          </div>
          <div className="benefit">
            <h3>Heart + Blood Sugar</h3>
            <p>Contribute to cardiovascular health and glucose balance.</p>
          </div>
        </section>

        <section className="cta">
          <a className="button" href="#grab">Grab a handful today</a>
          <p className="disclaimer">This site is educational and not medical advice.</p>
        </section>
      </main>
    </>
  );
}
