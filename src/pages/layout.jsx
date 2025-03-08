// app/layout.jsx
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({
  subsets: ['arabic'], // Persian uses Arabic script
  variable: '--font-vazir',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} font-[family-name:var(--font-vazir)]`}>
        {children}
      </body>
    </html>
  );
}