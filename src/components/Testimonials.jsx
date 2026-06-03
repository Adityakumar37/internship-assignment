const floatingFaces = [
  ['testimonial-face-1.jpg', 'float-face face-a'],
  ['testimonial-face-2.jpg', 'float-face face-b'],
  ['testimonial-face-3.jpg', 'float-face face-c'],
  ['testimonial-face-4.jpg', 'float-face face-d'],
  ['testimonial-face-5.jpg', 'float-face face-e'],
  ['testimonial-face-6.jpg', 'float-face face-f'],
  ['testimonial-face-7.jpg', 'float-face face-g'],
];

export default function Testimonials() {
  return (
    <section className="testimonial-section" id="contact" aria-labelledby="testimonial-title">
      <div className="container testimonial-wrap" data-reveal>
        <h2 id="testimonial-title">
          <mark className="pill pill-green">What</mark> our customer
          <br />
          says <mark className="underline underline-yellow">About Us</mark>
        </h2>
        <blockquote>
          <span className="quote quote-left" aria-hidden="true">
            “
          </span>
          <p>
            Elementum delivered the site with the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
          </p>
          <span className="quote quote-right" aria-hidden="true">
            ”
          </span>
        </blockquote>
        {floatingFaces.map(([src, className]) => (
          <img src={`/assets/${src}`} alt="" aria-hidden="true" className={className} key={src} />
        ))}
      </div>
    </section>
  );
}
