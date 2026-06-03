const columns = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'Linkedin', 'Youtube', 'Twitter'],
  },
];

export default function NewsletterFooter() {
  return (
    <footer className="newsletter-footer" id="faqs">
      <div className="container">
        <div className="newsletter" data-reveal>
          <div className="footer-squiggle" aria-hidden="true" />
          <h2>
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p>To make your stay special and even more memorable</p>
          <a className="subscribe-button" href="mailto:info@elementum.com">Subscribe Now</a>
          <div className="footer-purple" aria-hidden="true" />
        </div>
        <div className="footer-divider" />
        <div className="footer-links">
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <a href="#top" key={link}>{link}</a>
              ))}
            </div>
          ))}
          <address className="footer-column">
            <h3>Terms & Policies</h3>
            <p>5438w Fulton st, STE 20 Chicago, IL 83882</p>
            <p>123 456789000</p>
            <a href="mailto:info@elementum.com">info@elementum.com</a>
          </address>
        </div>
        <p className="copyright">©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
}
