const people = [
  { src: '/assets/person-1.jpg', className: 'person person-one', alt: 'Smiling studio collaborator' },
  { src: '/assets/person-2.jpg', className: 'person person-two', alt: 'Studio collaborator portrait' },
  { src: '/assets/person-3.jpg', className: 'person person-three', alt: 'Creative teammate portrait' },
  { src: '/assets/person-4.jpg', className: 'person person-four', alt: 'Designer portrait' },
  { src: '/assets/person-5.jpg', className: 'person person-five', alt: 'Researcher portrait' },
  { src: '/assets/person-6.jpg', className: 'person person-six', alt: 'Communicator portrait' },
  { src: '/assets/person-7.jpg', className: 'person person-seven', alt: 'Strategist portrait' },
  { src: '/assets/person-8.jpg', className: 'person person-eight', alt: 'Team member portrait' },
];

export default function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="side-doodle" aria-hidden="true" />
      <div className="container hero-inner">
        <h1 id="hero-title" className="hero-title" data-reveal>
          <span>The <mark className="underline underline-yellow">thinkers</mark> and</span>
          <span>doers were <mark className="pill pill-pink">changing</mark></span>
          <span>the <mark className="pill pill-green">status</mark> Quo with</span>
        </h1>
        <p className="hero-copy" data-reveal>
          We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>
        <div className="purple-shape" aria-hidden="true" />
        <div className="people-cloud" aria-label="Elementum team portraits" data-reveal>
          {people.map((person) => (
            <img src={person.src} className={person.className} alt={person.alt} key={person.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
