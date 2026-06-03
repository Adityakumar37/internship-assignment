const people = [
  { src: '/assets/figma-people/0be3546621a0c82f467a1065092444bbcf328c11.png', className: 'person person-one', alt: 'Team member 1' },
  { src: '/assets/figma-people/0c27648bdc88f3209ccfbcc5d9b9d169cf99426c.png', className: 'person person-two', alt: 'Team member 2' },
  { src: '/assets/figma-people/42ecea29e6da48d7cf7986754edad6a520cf49bc.png', className: 'person person-three', alt: 'Team member 3' },
  { src: '/assets/figma-people/9fafd71fcaf807d27868bc021bfd2b706ca4a104.png', className: 'person person-four', alt: 'Team member 4' },
  { src: '/assets/figma-people/a3b22f9c9d55d92d7b1b04f8c72abda291bb5ff2.png', className: 'person person-five', alt: 'Team member 5' },
  { src: '/assets/figma-people/b73f7d3f3f97b55b8691134f55142949dcc75229.png', className: 'person person-six', alt: 'Team member 6' },
  { src: '/assets/figma-people/da7717ef2f3a21b6e13dc4d9c4b346bc9b5a7682.png', className: 'person person-seven', alt: 'Team member 7' },
  { src: '/assets/figma-people/e1510bf92e503b24bd6f16dfd4f7bd4643d7dff7.png', className: 'person person-eight', alt: 'Team member 8' },
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
            <img
              src={person.src}
              className={person.className}
              alt={person.alt}
              key={person.src}
              style={{ border: '2px solid red' }} // debug border
              onLoad={() => console.log('Loaded:', person.src)}
              onError={(e) => console.error('Failed to load image:', person.src, e)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
