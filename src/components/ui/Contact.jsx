import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section className={styles.contactContainer} id="contact">
      <h2 className={styles.sectionTitle}>
        Thông tin <span className={styles.highlightText}>Liên hệ</span>
      </h2>
      <p className={styles.subtitle}>
        Luôn sẵn sàng tiếp nhận các cơ hội hợp tác và phát triển dự án mới. Hãy kết nối với tôi qua:
      </p>

      <div className={styles.contactGrid}>
        {/* Thẻ Email */}
        <div className={styles.contactCard} onClick={() => window.location.href = 'mailto:Trungntt999@gmail.com'}>
          <div className={styles.iconBox}>📧</div>
          <div>
            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.cardValue}>Trungntt99@gmail.com</p>
          </div>
        </div>

        {/* Thẻ Số điện thoại */}
        <div className={styles.contactCard} onClick={() => handleCopy('0356894297', 'phone')}>
          <div className={styles.iconBox}>📱</div>
          <div>
            <h3 className={styles.cardTitle}>Số điện thoại</h3>
            <p className={styles.cardValue}>
              {copied === 'phone' ? 'Đã sao chép số! ✓' : '0356894297'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}