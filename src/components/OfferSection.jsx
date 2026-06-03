const offers = [
  {
    eyebrow: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    eyebrow: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    eyebrow: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

export default function OfferSection() {
  return (
    <section className="offer-section" id="services" aria-labelledby="offer-title">
      <div className="container">
        <div className="offer-heading" data-reveal>
          <h2 id="offer-title">
            What we <mark className="pill pill-green">can</mark>
            <br />
            <mark className="underline underline-yellow">offer</mark> you!
          </h2>
          <div className="red-squiggle" aria-hidden="true" />
        </div>
        <div className="offer-list">
          {offers.map((offer) => (
            <a className="offer-row" href="#contact" key={offer.title} data-reveal>
              <span>{offer.eyebrow}</span>
              <strong>{offer.title}</strong>
              <span className="row-arrow" aria-hidden="true" />
            </a>
          ))}
          <img className="sticker" src="/assets/sticker.jpg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
