// app/page.jsx
// import Link from 'next/link'; //

export default function Home() {
  return (
    <div dir="rtl" className="flex min-h-screen w-full flex-col font-[family-name:var(--font-vazir)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
        <header className="mb-8 flex items-center justify-between">
          <div>
            {/* <Link className="font-medium text-black dark:text-white" href="/">
              سینا نخعی
            </Link> */}
            <p className="text-zinc-600 dark:text-zinc-500">
              <span className="sr-only">مهندس نرم‌افزار</span>
              <span className="inline-block whitespace-pre">مهندس </span>
              <span className="inline-block whitespace-pre">نرم‌افزار</span>
            </p>
          </div>
        </header>

        <main className="space-y-24">
          <section>
            <div className="flex-1">
              <p className="text-zinc-600 dark:text-zinc-400">
                تمرکز بر خلق تجربه‌های وب بصری و کارآمد. پر کردن شکاف بین طراحی و توسعه.
              </p>
            </div>
          </section>

          <section>
            <h3 className="mb-5 text-lg font-medium">پروژه‌های منتخب</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ProjectCard
                videoSrc="https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0"
                title="موشن پرایمتیوز پرو"
                url="https://pro.motion-primitives.com/"
                description="کامپوننت‌ها و قالب‌های پیشرفته برای ساخت وب‌سایت‌های زیبا."
              />
              <ProjectCard
                videoSrc="https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0"
                title="موشن پرایمتیوز"
                url="https://motion-primitives.com/"
                description="کیت رابط کاربری برای ایجاد رابط‌های زیبا و متحرک."
              />
            </div>
          </section>

          <section>
            <h3 className="mb-5 text-lg font-medium">تجربه کاری</h3>
            <div className="flex flex-col space-y-2">
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

          <section>
            <h3 className="mb-3 text-lg font-medium">وبلاگ</h3>
            <div className="flex flex-col space-y-0">
              <BlogPost
                title="کاوش در تقاطع طراحی، هوش مصنوعی و مهندسی طراحی"
                description="چگونه هوش مصنوعی روش طراحی ما را تغییر می‌دهد"
                url="/blog/exploring-the-intersection-of-design-ai-and-design-engineering"
              />
              <BlogPost
                title="چرا شغلم را ترک کردم تا شرکت خودم را راه‌اندازی کنم"
                description="نگاهی عمیق به تصمیم من برای ترک شغلم و راه‌اندازی شرکت خودم"
                url="/blog/exploring-the-intersection-of-design-ai-and-design-engineering"
              />
              <BlogPost
                title="آنچه از سال اول فریلنسینگ آموختم"
                description="نگاهی به سال اول فریلنسینگ من و درس‌هایی که گرفتم"
                url="/blog/exploring-the-intersection-of-design-ai-and-design-engineering"
              />
            </div>
          </section>

          <section>
            <h3 className="mb-5 text-lg font-medium">ارتباط</h3>
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
              با خیال راحت با من از طریق{' '}
              {/* <Link className="underline dark:text-zinc-300" href="mailto:your@email.com">
                your@email.com
              </Link>{' '} */}
              تماس بگیرید
            </p>
            <div className="flex items-center justify-start space-x-3 space-x-reverse">
              <SocialLink href="https://github.com/ibelick" text="گیت‌هاب" />
              <SocialLink href="https://twitter.com/ibelick" text="توییتر" />
              <SocialLink href="https://www.linkedin.com/in/ibelick" text="لینکدین" />
              <SocialLink href="https://www.instagram.com/ibelick" text="اینستاگرام" />
            </div>
          </section>
        </main>

        <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            {/* <Link href="https://github.com/ibelick/nim" target="_blank" rel="noopener noreferrer">
              <div className="relative inline-block whitespace-nowrap text-xs text-zinc-500">
                <span>ساخته شده با موشن پرایمتیوز.</span>
              </div>
            </Link> */}
            {/* Theme switcher buttons would require additional state management */}
          </div>
        </footer>
      </div>
    </div>
  );
}

// Component definitions
function ProjectCard({ videoSrc, title, url, description }) {
  return (
    <div dir="rtl" className="space-y-2">
      <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <video
          src={videoSrc}
          autoPlay
          loop
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </div>
      <div className="px-1">
        {/* <Link
          className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          <span className="absolute bottom-0.5 right-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
        </Link> */}
        <p className="text-base text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, url }) {
  return (
    // <Link
    //   dir="rtl"
    //   className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
    //   href={url}
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
      <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="relative flex w-full flex-row justify-between">
          <div>
            <h4 className="font-normal dark:text-zinc-100">{title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{company}</p>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">{period}</p>
        </div>
      </div>
    // </Link>
  );
}

function BlogPost({ title, description, url }) {
  return (
    // <Link dir="rtl" className="relative inline-flex -mx-3 rounded-xl px-3 py-3" href={url}>
      <div className="z-10">
        <div className="flex flex-col space-y-1">
          <h4 className="font-normal dark:text-zinc-100">{title}</h4>
          <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
        </div>
      </div>
    // </Link>
  );
}

function SocialLink({ href, text }) {
  return (
    // <Link
    //   dir="rtl"
    //   href={href}
    //   className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   {text}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 transform rotate-180" // Rotated for RTL
      >
        <path
          d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    // </Link>
  );
}