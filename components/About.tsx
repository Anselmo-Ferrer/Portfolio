export default function About() {
  return (
    <section id="about">
      <div className="inner">
        <div className="sec-tag" data-n="01">About Me</div>
        <div className="about-grid">
          <div className="about-left">
            <div className="stat-block rv">
              <div className="stat-n">1+</div>
              <div className="stat-l">Year of industry experience</div>
            </div>
            <div className="stat-block rv d1">
              <div className="stat-n">2</div>
              <div className="stat-l">AI-powered projects shipped</div>
            </div>
            <div className="stat-block rv d2">
              <div className="stat-n">12+</div>
              <div className="stat-l">Technologies mastered</div>
            </div>
          </div>
          <div>
            <p className="about-bio rv">
              I&apos;m a <strong>Full Stack Software Engineer</strong> studying Computer Science at{" "}
              <strong>UNIFOR</strong> and currently building internal web platforms at{" "}
              <em>Casa dos Ventos</em> — one of Brazil&apos;s largest renewable energy companies.
              <br />
              <br />
              I thrive at the intersection of <strong>engineering and design</strong> — shipping
              well-architected backends and interfaces that actually feel good to use. I&apos;m drawn
              to products that solve real problems with clarity and craft.
            </p>

            <div className="rv d1" style={{ marginBottom: "28px" }}>
              <div className="sub-label">Career</div>
              <div className="exp">
                <div className="exp-top">
                  <div>
                    <div className="exp-co">Casa dos Ventos</div>
                    <div className="exp-role">Software Development Intern</div>
                  </div>
                  <div className="exp-date">Oct 2025 — Present</div>
                </div>
                <ul className="exp-list">
                  <li>Built and maintained internal web apps with React, Next.js, TypeScript &amp; Node.js</li>
                  <li>Integrated REST APIs with Swagger docs and managed PostgreSQL via TypeORM</li>
                  <li>Supported CI/CD pipelines, Docker containerization, and GCP deployments</li>
                  <li>Collaborated across dev, product &amp; design in Scrum/Kanban ceremonies</li>
                </ul>
              </div>
            </div>

            <div className="rv d2" style={{ marginBottom: "28px" }}>
              <div className="sub-label">Education</div>
              <div className="exp">
                <div className="exp-top">
                  <div>
                    <div className="exp-co">UNIFOR</div>
                    <div className="exp-role">B.Sc. Computer Science</div>
                  </div>
                  <div className="exp-date">2024 — 2027</div>
                </div>
                <ul className="exp-list">
                  <li>University of Fortaleza — actively building alongside my degree</li>
                  <li>9.70 GPA</li>
                </ul>
              </div>
            </div>

            <div className="rv d3">
              <div className="sub-label">Certifications</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="https://www.credly.com/badges/38b6cac6-9a90-4ed7-a54b-6945b65a5690/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card"
                >
                  <div className="cert-card-icon gcp-ico">
                    <img
                      src="/google-icon.png"
                      alt="Google Cloud"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="cert-card-info">
                    <div className="cert-card-name">Google Professional Cloud Architect</div>
                    <div className="cert-card-meta">Google Cloud · Jul 2026</div>
                  </div>
                  <span className="cert-card-arrow">↗</span>
                </a>
                <a
                  href="https://www.credly.com/badges/358b5717-3420-4220-975d-cd0ad15bae36/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card"
                >
                  <div className="cert-card-icon mongo-ico">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="#00ED64"
                        d="M12.02 1.5c.2.38.4.64.68.9 1.9 1.86 2.98 4.4 3.13 7.05.2 3.24-1 5.9-3.5 7.9-.32.24-.53.5-.7.86-.06.13-.13.26-.16.4h-.9c-.06-.5-.13-.98-.2-1.47-.28-1.9-.9-3.7-1.7-5.4-1-2.13-1.4-4.36-1.14-6.7.2-1.86.94-3.5 2.2-4.9.13-.14.24-.3.3-.5-.02-.02-.02-.04-.02-.05.06.1.13.16.18.26.02-.13-.05-.24-.05-.36l-.13-.02z"
                      />
                      <path
                        fill="#00684A"
                        d="M12.02 1.5l.13.02c0 .12.07.23.05.36-.05-.1-.12-.16-.18-.26 0 .01 0 .03.02.05-.06.2-.17.36-.3.5-1.26 1.4-2 3.04-2.2 4.9-.26 2.34.14 4.57 1.14 6.7.8 1.7 1.42 3.5 1.7 5.4.07.49.14.97.2 1.47h.45c.03-1.9.03-3.8.02-5.7l-.01-.4c0-.1.05-.18.1-.27.16-.35.37-.62.7-.86 2.5-2 3.7-4.66 3.5-7.9-.15-2.65-1.23-5.19-3.13-7.05-.28-.26-.48-.52-.68-.9l-1.5.4z"
                      />
                    </svg>
                  </div>
                  <div className="cert-card-info">
                    <div className="cert-card-name">MongoDB Associate Developer</div>
                    <div className="cert-card-meta">MongoDB · Jun 2026</div>
                  </div>
                  <span className="cert-card-arrow">↗</span>
                </a>
                <a
                  href="https://www.credly.com/badges/c1394137-c5da-444f-95ec-da91b55e8c9a/linked_in?t=t9hiu3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card"
                >
                  <div className="cert-card-icon gcp-ico">
                    <img
                      src="/google-icon.png"
                      alt="Google Cloud"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="cert-card-info">
                    <div className="cert-card-name">Google Associate Cloud Engineer</div>
                    <div className="cert-card-meta">Google Cloud · 2026</div>
                  </div>
                  <span className="cert-card-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
