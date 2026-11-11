export default function Home() {
  return (
    <main style={{ padding: '20px', textAlign: 'center', color: '#1F1B2E' }}>
      <h1 style={{ color: '#6C4AB6' }}>سلام مهرانا! به پس‌اندازینو خوش آمدی 👋</h1>
      <p>پولت رو یاد بگیر، بزرگش کن!</p>
      
      <div style={{ background: '#fff', padding: '20px', borderRadius: '15px', margin: '20px auto', maxWidth: '400px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <h3 style={{ color: '#4ADE80' }}>🎯 هدف فعلی: خرید هدفون</h3>
        <p>پیشرفت: ۴۵٪ (۴۵۰,۰۰۰ تومان از ۱,۰۰۰,۰۰۰ تومان)</p>
      </div>

      <div style={{ margin: '20px' }}>
        <button style={{ background: '#6C4AB6', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
          + ثبت پس‌انداز جدید
        </button>
      </div>
    </main>
  )
}