import ReadMore from './ReadMore.jsx';

export default function StorySection() {
  return (
    <section className="story-section" id="studio" aria-label="Studio story">
      <div className="container story-grid story-grid-top" data-reveal>
        <article className="story-copy">
          <h2>
            Tomorrow should <br />
            be better than today
          </h2>
          <p>
            We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <ReadMore />
        </article>
        <div className="image-orbit orbit-top">
          <span className="coral-block" aria-hidden="true" />
          <img src="/assets/meeting-1.jpg" alt="People discussing strategy in a meeting" />
        </div>
      </div>

      <div className="container story-grid story-grid-bottom" data-reveal>
        <div className="image-orbit orbit-bottom">
          <span className="coral-triangle triangle-one" aria-hidden="true" />
          <span className="coral-triangle triangle-two" aria-hidden="true" />
          <span className="coral-triangle triangle-three" aria-hidden="true" />
          <img src="/assets/figma-people/3ddf828267cb844171aaad94b1f6da3e7949acbd%20(2).png" alt="Team members working together at a laptop" />
        </div>
        <article className="story-copy story-copy-right">
          <h2>
            <mark className="pill pill-green">See</mark> how we can <br />
            help you progress
          </h2>
          <p>
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <ReadMore />
        </article>
      </div>
    </section>
  );
}
