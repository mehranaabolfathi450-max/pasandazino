export const metadata = {
  title: 'پس‌اندازینو | مدیریت مالی نوجوانان',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: 'sans-serif', margin: 0, backgroundColor: '#FAF7F2' }}>
        {children}
      </body>
    </html>
  )
}