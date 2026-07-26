import Image from "next/image";
import localFont from "next/font/local";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { TbBrandLinkedin, TbBrandGithub, TbBrandWhatsapp, TbBrandInstagram } from "react-icons/tb";
import { bioContent, type BioLanguage } from "@/data/bio";
import { BioHtmlLang } from "./BioHtmlLang";
import styles from "./BioPage.module.css";

const bioTitle = localFont({
  src: [
    { path: "../../../public/bio-assets/fonts/host-grotesk-400.ttf", weight: "400" },
    { path: "../../../public/bio-assets/fonts/host-grotesk-600.ttf", weight: "600" },
  ],
  variable: "--font-bio-title",
  display: "swap",
});

const bioBody = localFont({
  src: [
    { path: "../../../public/bio-assets/fonts/roboto-400.ttf", weight: "400" },
    { path: "../../../public/bio-assets/fonts/roboto-500.ttf", weight: "500" },
  ],
  variable: "--font-bio-body",
  display: "swap",
});

function ContactIcon({ label }: { label: string }) {
  if (label === "LinkedIn") return <TbBrandLinkedin size={20} aria-hidden="true" />;
  if (label === "GitHub") return <TbBrandGithub size={20} aria-hidden="true" />;
  if (label === "Instagram") return <TbBrandInstagram size={20} aria-hidden="true" />;
  return <FiMail size={18} aria-hidden="true" />;
}

export function BioPage({ lang }: { lang: BioLanguage }) {
  const t = bioContent[lang];

  return (
    <div className={`${styles.page} ${bioTitle.variable} ${bioBody.variable}`}>
      <BioHtmlLang lang={t.htmlLang} />
      <div className={styles.grid} aria-hidden="true" />

      {/* Elementos decorativos — SVGs oficiais da ForjaCorp. */}
      <div className={styles.decorBrackets} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bio-assets/brackets-gradient.svg" alt="" className={styles.decorImg} />
      </div>
      <div className={styles.decorSymbol} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bio-assets/star-purple.svg" alt="" className={`${styles.decorImg} ${styles.recolorOrange}`} />
      </div>

      <a href="#bio-conteudo" className={styles.skipLink}>
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>

      <div className={styles.container} id="bio-conteudo">
        {/* Top bar */}
        <div className={styles.topbar}>
          <a
            href={t.nav.backToPortfolio}
            className={styles.backBtn}
            aria-label={t.nav.backToPortfolioLabel}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bio-assets/star-purple.svg"
              alt=""
              aria-hidden="true"
              className={`${styles.brandSymbol} ${styles.recolorOrange}`}
            />
          </a>
          <a href={t.switchHref} className={styles.langBtn}>
            {t.switchLabel}
          </a>
        </div>

        {/* Hero */}
        <section className={styles.hero} aria-labelledby="bio-name">
          <div className={`${styles.photoFrame} ${styles.enter}`}>
            <Image
              src="/images/MatheusAlves.png"
              alt="Matheus Henrique"
              width={112}
              height={112}
              sizes="112px"
              className="object-cover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>

          <p className={`${styles.eyebrow} ${styles.enter} ${styles.enterDelay1}`}>
            {t.hero.eyebrow}
          </p>

          <h1 id="bio-name" className={`${styles.name} ${styles.enter} ${styles.enterDelay2}`}>
            {t.hero.name}
          </h1>

          <p className={`${styles.intro} ${styles.enter} ${styles.enterDelay3}`}>
            {t.hero.intro}
          </p>

          <p className={`${styles.availability} ${styles.enter} ${styles.enterDelay4}`}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            {t.hero.availability}
          </p>

          <div className={`${styles.ctaWrapper} ${styles.enter} ${styles.enterDelay5}`}>
            <a
              href={t.hero.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <TbBrandWhatsapp size={20} />
              </span>
              <span className={styles.ctaText}>
                <span className={styles.ctaTitle}>{t.hero.cta}</span>
                <span className={styles.ctaNote}>{t.hero.ctaNote}</span>
              </span>
              <span className={styles.ctaArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <a href="#bio-services" className={`${styles.scrollHint} ${styles.enter} ${styles.enterDelay5}`}>
            {t.hero.scrollHint}
          </a>
        </section>

        {/* Services */}
        <section id="bio-services" className={styles.section} aria-labelledby="bio-services-title">
          <div className={styles.kicker}>{t.services.kicker}</div>
          <h2 id="bio-services-title" className={styles.sectionTitle}>
            {t.services.title}
          </h2>
          <p className={styles.sectionIntro}>{t.services.intro}</p>

          <div className={styles.servicesGrid}>
            {t.services.items.map((service) => (
              <article key={service.number} className={styles.card}>
                <div className={styles.cardCornerCircle} aria-hidden="true" />
                <div className={styles.cardNumber}>{service.number}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section} aria-labelledby="bio-exp-title">
          <div className={styles.kicker}>{t.experience.kicker}</div>
          <h2 id="bio-exp-title" className={styles.sectionTitle}>
            {t.experience.title}
          </h2>
          <p className={styles.experienceText}>{t.experience.text}</p>

          <div className={styles.indicators}>
            {t.experience.indicators.map((indicator) => (
              <div key={indicator.value} className={styles.indicator}>
                <div className={styles.indicatorValue}>{indicator.value}</div>
                <div className={styles.indicatorDesc}>{indicator.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className={styles.section} aria-labelledby="bio-partners-title">
          <div className={styles.kicker}>{t.partners.kicker}</div>
          <h2 id="bio-partners-title" className={styles.sectionTitle}>
            {t.partners.title}
          </h2>
          <p className={styles.sectionIntro}>{t.partners.intro}</p>

          <div className={styles.partnersGrid}>
            {t.partners.items.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerCard}
              >
                <div className={styles.partnerPhotoFrame}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    sizes="4.5rem"
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.partnerInfo}>
                  <div className={styles.partnerName}>{partner.name}</div>
                  <div className={styles.partnerRole}>{partner.role}</div>
                  <span className={styles.partnerCta}>
                    {t.partners.ctaLabel}
                    <FiArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section} aria-labelledby="bio-contact-title">
          <div className={styles.kicker}>{t.contact.kicker}</div>
          <h2 id="bio-contact-title" className={styles.sectionTitle}>
            {t.contact.title}
          </h2>
          <p className={styles.sectionIntro}>{t.contact.text}</p>

          <div className={styles.contactCta}>
            <a
              href={t.hero.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                <TbBrandWhatsapp size={20} />
              </span>
              <span className={styles.ctaText}>
                <span className={styles.ctaTitle}>{t.hero.cta}</span>
                <span className={styles.ctaNote}>{t.hero.ctaNote}</span>
              </span>
              <span className={styles.ctaArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className={styles.contactsGrid}>
            {t.contact.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`${styles.contactItem} ${
                  item.label === "E-mail" ? styles.contactItemWide : ""
                }`}
                aria-label={`${item.label}: ${item.handle}`}
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <ContactIcon label={item.label} />
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  <span className={styles.contactHandle}>{item.handle}</span>
                </span>
                <span className={styles.contactArrow} aria-hidden="true">
                  <FiArrowUpRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerText}>{t.footer.text}</div>
          <div className={styles.footerBrand}>
            <span className={styles.footerBrandLabel}>{t.footer.visualIdentity}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bio-assets/forjacorp-logo.svg"
              alt="ForjaCorp"
              className={styles.footerLogo}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
