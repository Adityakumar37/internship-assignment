# 📓 Elementum – Interview Preparation Notes

---

## 1️⃣ Components Breakdown

| Component | Purpose / UI Chunk | Props (Typical) | Why It Was Split |
|-----------|-------------------|----------------|------------------|
| **Header / Navbar** | Site branding + navigation links (Home, Services, About, Contact). | `logoSrc`, `navItems` (array of `{label, href}`), `onToggleMenu` (for mobile). | Keeps the top‑level layout independent, easy to reuse across pages. |
| **HeroSection** | Full‑width hero banner with highlighted text, call‑to‑action, and floating team‑member circles. | `title`, `subtitle`, `ctaText`, `ctaHref`, `people` (array of profile objects). | Heavy visual effect; isolates animation logic & scroll‑reveal. |
| **TeamGrid (PeopleCloud)** | Renders the circular avatars that float around the hero. | `people` (array of `{src, alt, className}`), optional `onAvatarClick`. | Allows isolated positioning, animation, lazy‑loading of images. |
| **ServiceTable** | Tabular list of agency services with icons and descriptions. | `services` (array of `{icon, title, description}`), optional `columns`. | Separates data from layout; easy to add/remove services. |
| **OfferSection** | Promotional block with a decorative “red squiggle” and a short copy. | `heading`, `copy`, `illustrationSrc`. | Keeps marketing copy separate from hero. |
| **Testimonials** | Carousel / grid of client testimonials with faces. | `testimonials` (array of `{quote, author, src}`), `autoPlay`, `duration`. | Encapsulates carousel logic, lazy‑loads faces. |
| **NewsletterFooter** | Subscription form + footer links. | `onSubmit`, `placeholder`, `buttonText`. | Isolates form handling, validation, and ARIA. |
| **Footer** | Site‑wide copyright, social icons, quick links. | `links` (array), `socialIcons`. | Keeps the bottom of the page consistent. |
| **Modal / Lightbox** *(optional)* | Show enlarged avatar or testimonial on click. | `isOpen`, `content`, `onClose`. | Re‑usable UI pattern, improves UX. |

**Common Props Pattern** – All list‑based components receive an array of objects and render via `.map()` with a stable `key` (usually the image filename or a UUID).  

---

## 2️⃣ Third‑Party Libraries

| Library | What It Does | Typical Usage in Elementum | Interview Angle |
|---------|--------------|---------------------------|-----------------|
| **react-router-dom** | Declarative client‑side routing (`<Routes>`, `<Route>`, `<Navigate>`). | Handles `/`, `/services`, `/contact` etc., plus a catch‑all redirect to home. | *How does the router preserve state on refresh?* |
| **framer‑motion** | Declarative animation & gesture handling. | Fade‑in and floating animations for avatars, staggered reveals. | *Explain the difference between `animate` and `whileHover`.* |
| **styled‑components** *or* **Tailwind CSS** | CSS‑in‑JS (styled‑components) or utility‑first classes (Tailwind). | Project uses vanilla CSS but could switch to Tailwind for rapid responsive utilities. | *When would you choose one over the other?* |
| **react-icons** | Icon library (Feather, FontAwesome, etc.) | Service icons, social media icons. | *How do you tree‑shake icons to avoid bundle bloat?* |
| **react-modal** | Accessible modal component. | Lightbox for avatar enlargement. | *What ARIA attributes are required for a dialog?* |
| **react-scroll-reveal** (or custom IntersectionObserver) | Triggers CSS animations when elements enter viewport. | Reveals hero text, service rows, testimonials on scroll. | *Why use IntersectionObserver instead of scroll events?* |
| **vite** | Fast dev server & build tool for React. | Underlies the whole project (`npm run dev`). | *What are the benefits of Vite’s native ES‑module dev server?* |

---

## 3️⃣ React Concepts Demonstrated

- **useState** – Manages form input (`email` state) and modal open/close flags.  
- **useEffect** –
  - Scroll‑to‑top on mount & normalising URL to `/`.
  - Subscribes to IntersectionObserver for scroll‑reveal.
- **Props Drilling vs Context** – Most data (people list, services) is passed as props; a global theme could be placed in a `ThemeContext` (not required here).  
- **Conditional Rendering** – Show loading spinner while images load; render modal only when `isOpen` is true.  
- **List Rendering with `.map()` & Keys** – All grids (team, services, testimonials) use `.map(item => <Component key={item.id} …/>)`.  
- **Controlled Components** – Newsletter input (`value={email}` + `onChange`).  
- **Component Reusability** – `Avatar` used in both HeroSection and Testimonials with same styling props.  

---

## 4️⃣ CSS / Styling Approach

| Feature | How It Was Likely Implemented |
|---------|------------------------------|
| **Responsive Layout** | CSS Grid for the main sections (`.story-grid`, `.offer-heading`), Flexbox for the navbar. Media queries at 900 px, 560 px adjust column counts. |
| **Circular Image Cropping** | `border-radius: 50%;` on the `<img>` + `object-fit: cover`. The container `.person` is `position:absolute` with fixed width/height, ensuring a perfect circle. |
| **Highlighted Text** | `<mark className="underline underline-yellow">` – custom underlines using pseudo‑elements (`::after`) with a gradient background. |
| **Red Squiggle Decoration** | Absolutely positioned `<svg>` or a pseudo‑element with `background-image: url('/assets/red-squiggle.svg')`. |
| **Tailwind (if used)** | Utility classes like `flex`, `grid`, `p-4`, `text-primary`. |
| **CSS Modules** | Scoped class names (`styles.person`) to avoid clashes; bundled by Vite. |
| **Animations** | `@keyframes float` for floating avatars; `framer‑motion` for entrance fades. |
| **Overflow Handling** | `overflow: visible` on `.story-section` to allow triangles to break out of the circle. |

---

## 5️⃣ Performance & Best Practices

- **Lazy Loading Images** – `<img loading="lazy" />` or IntersectionObserver to load avatars only when near viewport.  
- **Responsive Images** – `srcSet` / `sizes` for different screen densities (optional).  
- **Accessibility** –
  - `alt` text for every avatar (`alt="Team member – Jane Doe"`).
  - Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`).
  - ARIA roles for navigation (`role="navigation"`), modal (`role="dialog"`).
  - Keyboard focus trap inside modal.  
- **SEO** – `<title>Elementum – Creative Agency</title>`, meta description, proper heading hierarchy (`h1` only once).  
- **Component‑Based Architecture** – Encourages isolation, easier testing, and future scaling (e.g., adding a blog).  
- **Bundle Optimization** – Vite’s pre‑bundling, tree‑shaking of `react-icons`, code‑splitting (dynamic `import()` for heavy sections).  

---

## 6️⃣ Likely Interview Questions (with Sample Answers)

| # | Question | Strong Answer |
|---|----------|--------------|
| 1 | *Why did you choose Vite over Create‑React‑App?* | Vite starts the dev server instantly thanks to native ES‑modules, has faster HMR, and produces smaller production bundles via Rollup. |
| 2 | *How does the catch‑all route work?* | In `App.jsx` we add `<Route path="*" element={<Navigate to="/" replace />} />`. This redirects any unknown URL back to the Home page, ensuring a refresh always lands on `/`. |
| 3 | *Explain how you animated the floating avatars.* | A CSS `@keyframes float` moves the avatars up/down. The container `.person` has `animation: float 6s ease-in-out infinite`. For more complex choreography we could use `framer‑motion` with `animate={{ y: [-12, 0] }}` and `repeat: Infinity`. |
| 4 | *What’s the purpose of `window.history.replaceState` in `App.jsx`?* | It replaces the current URL without reloading the page, ensuring the app always shows `/` on initial load, even if the user landed on a hash or other path. |
| 5 | *How did you handle form validation for the newsletter?* | The input is a controlled component; on submit we check a simple regex for email format, set an error state, and show an ARIA‑linked error message. |
| 6 | *Why use `object-fit: cover` on avatar images?* | It fills the circular container while preserving aspect ratio, cropping the excess instead of stretching the image. |
| 7 | *Describe the trade‑offs between Tailwind and CSS Modules.* | Tailwind offers rapid utility‑first styling and consistent design tokens; CSS Modules give true scoped CSS and can be easier for designers familiar with plain CSS. I used plain CSS with modules for component‑specific styles while considering Tailwind for future rapid prototyping. |
| 8 | *How did you ensure the site is accessible?* | Semantic elements, proper `alt` attributes, ARIA labels on navigation and modal, focus management (`autofocus` on the first field, return focus after modal close), and sufficient color contrast. |
| 9 | *What would you do to improve performance for a production build?* | – Enable image lazy‑loading.<br>– Serve WebP/WebM alternatives.<br>– Code‑split heavy sections (e.g., Testimonials) with `React.lazy`.<br>– Use `vite-plugin-imagemin` for asset compression. |
|10| *Explain the role of `useEffect` with an empty dependency array.* | Runs only after the component mounts (like `componentDidMount`). Here it scrolls to top and normalises the URL on every page load. |
|11| *How do you avoid “key” warnings when rendering lists?* | Use a stable identifier (e.g., image filename or generated UUID) as the `key` prop rather than the array index. |
|12| *Why split the hero text from the avatar grid?* | It isolates concerns: the hero text can focus on typography and SEO, while the avatar grid handles animation and positioning, making each component easier to test and maintain. |
|13| *How would you add dark‑mode support?* | Define CSS custom properties (`--bg`, `--text`) for both light and dark palettes, toggle a `data-theme="dark"` attribute on `<html>`, and let components automatically inherit the variables. |
|14| *What is the purpose of `react-scroll-reveal` (or IntersectionObserver) in this project?* | It triggers CSS classes when an element enters the viewport, creating smooth entrance animations while keeping the scroll listener cheap. |
|15| *If you needed to internationalize the site, where would you start?* | Extract static strings into a JSON locale file, use a library like `react-i18next`, and replace hard‑coded text with the `t()` translation function. Components remain unchanged; only the text source changes. |

---

## 7️⃣ 2‑Minute Pitch

> **“Elementum”** is a single‑page React landing site for a creative agency. I built it with **Vite**, **React**, and plain **CSS** (using CSS variables for theming). The page is split into reusable components: a **Header**, a **HeroSection** with animated floating team avatars, a **ServiceTable**, **Testimonials**, and a **NewsletterFooter**. Each visual block receives data via props and renders lists with `.map()`, ensuring scalability. I added a **catch‑all route** that always redirects to `/`, and an `useEffect` that normalises the URL and scrolls to the top on load, guaranteeing a consistent entry point even after a refresh. For performance, images are lazy‑loaded and avatars are cropped using `border-radius: 50%` and `object-fit: cover`. Accessibility is baked in: semantic tags, alt text, ARIA roles, and a focus‑managed modal for enlarged avatar views. The project showcases core React concepts—state, effects, controlled forms, conditional rendering—and modern front‑end practices like responsive CSS Grid, keyframe animations, and modular CSS architecture. It’s a solid demonstration of turning a design mockup into a polished, performant, and maintainable React application.

---

*Ready to dive deeper into any of these topics!*
