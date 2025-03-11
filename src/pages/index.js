import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css'; // Assuming you'll create a CSS module for styling

export default function Home() {
  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <Link to="/" className={styles.nameLink}>
              سینا نخعی
            </Link>
            <p className={styles.subtitle}>
              <span>مهندس </span>
              <span>نرم‌افزار</span>
            </p>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.section}>
            <p className={styles.intro}>
              تمرکز بر خلق تجربه‌های وب بصری و کارآمد. پر کردن شکاف بین طراحی و توسعه.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>پروژه‌های منتخب</h3>
            <div className={styles.projectGrid}>
              <ProjectCard
                videoSrc="/videos/motion-primitives-pro.mp4" // Place in static/videos/
                title="موشن پرایمتیوز پرو"
                url="https://pro.motion-primitives.com/"
                description="کامپوننت‌ها و قالب‌های پیشرفته برای ساخت وب‌سایت‌های زیبا."
              />
              <ProjectCard
                videoSrc="/videos/motion-primitives.mp4" // Place in static/videos/
                title="موشن پرایمتیوز"
                url="https://motion-primitives.com/"
                description="کیت رابط کاربری برای ایجاد رابط‌های زیبا و متحرک."
              />
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>تجربه کاری</h3>
            <div className={styles.experienceList}>
              <ExperienceCard
                title="مدیرعامل"
                company="استودیو رگلازد"
                period="۱۴۰۳ - تاکنون"
                url="https://ibelick.com"
              />
              <ExperienceCard
                title="مهندس طراحی"
                company="فریلنسر"
                period="۱۴۰۱ - ۱۴۰۳"
                url="https://ibelick.com"
              />
              <ExperienceCard
                title="توسعه‌دهنده فرانت‌اند"
                company="فریلنسر"
                period="۱۳۹۶ - تاکنون"
                url="https://ibelick.com"
              />
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>وبلاگ</h3>
            <div className={styles.blogList}>
              <BlogPost
                title="کاوش در تقاطع طراحی، هوش مصنوعی و مهندسی طراحی"
                description="چگونه هوش مصنوعی روش طراحی ما را تغییر می‌دهد"
                url="/blog/exploring-the-intersection-of-design-ai-and-design-engineering"
              />
              <BlogPost
                title="چرا شغلم را ترک کردم تا شرکت خودم را راه‌اندازی کنم"
                description="نگاهی عمیق به تصمیم من برای ترک شغلم و راه‌اندازی شرکت خودم"
                url="/blog/why-i-quit-my-job"
              />
              <BlogPost
                title="آنچه از سال اول فریلنسینگ آموختم"
                description="نگاهی به سال اول فریلنسینگ من و درس‌هایی که گرفتم"
                url="/blog/lessons-from-freelancing"
              />
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>ارتباط</h3>
            <p className={styles.contactText}>
              با خیال راحت با من از طریق{' '}
              <Link to="mailto:your@email.com" className={styles.emailLink}>
                your@email.com
              </Link>{' '}
              تماس بگیرید
            </p>
            <div className={styles.socialLinks}>
              <SocialLink href="https://github.com/ibelick" text="گیت‌هاب" />
              <SocialLink href="https://twitter.com/ibelick" text="توییتر" />
              <SocialLink href="https://www.linkedin.com/in/ibelick" text="لینکدین" />
              <SocialLink href="https://www.instagram.com/ibelick" text="اینستاگرام" />
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <Link to="https://github.com/ibelick/nim" target="_blank" rel="noopener noreferrer">
            <span className={styles.footerText}>ساخته شده با موشن پرایمتیوز.</span>
          </Link>
        </footer>
      </div>
  );
}

// Reusable Components
function ProjectCard({ videoSrc, title, url, description }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.videoContainer}>
        <video src={videoSrc} autoPlay loop className={styles.video} />
      </div>
      <div className={styles.projectDetails}>
        <Link to={url} target="_blank" rel="noopener noreferrer" className={styles.projectTitle}>
          {title}
        </Link>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, url }) {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer" className={styles.experienceCard}>
      <div className={styles.experienceContent}>
        <div>
          <h4 className={styles.experienceTitle}>{title}</h4>
          <p className={styles.experienceCompany}>{company}</p>
        </div>
        <p className={styles.experiencePeriod}>{period}</p>
      </div>
    </Link>
  );
}

function BlogPost({ title, description, url }) {
  return (
    <Link to={url} className={styles.blogPost}>
      <div className={styles.blogContent}>
        <h4 className={styles.blogTitle}>{title}</h4>
        <p className={styles.blogDescription}>{description}</p>
      </div>
    </Link>
  );
}

function SocialLink({ href, text }) {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
      {text}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.socialIcon}
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}