import { useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
 const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Trung-Nguyen-TopCV.vn-250826.171250.pdf';
    link.download = 'Nguen_Thanh_Trung_Software_Developer_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

 
    setIsDownloaded(true);
    

    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000);
  };

const handleExploreClick = () => {
  const element = document.getElementById('projects');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className={styles.heroContainer}>
      <p className={styles.greeting}>
        Xin chào, tôi là Trung
      </p>
      
      <h1 className={styles.title}>
        <span className={styles.titlePrefix}>Aspiring</span> 
        <span className={styles.highlight}>Software Developer</span>
      </h1>
      
      <p className={styles.description}>
        Định hướng phát triển thành một Full-stack Developer, tôi khao khát tự tay nhào nặn những sản phẩm hoàn thiện. Kết hợp tư duy thẩm mỹ ở Frontend và tư duy thiết kế hệ thống phân lớp ở Backend để tạo ra những phần mềm không chỉ chạy tốt mà còn có kiến trúc xuất sắc.
      </p>
      
      <div className={styles.buttonGroup}>
       <button onClick={handleExploreClick} className={styles.primaryButton}>
  Khám phá dự án
</button>

        
      <button 
          onClick={handleDownloadCV}
          className={`${styles.secondaryButton} ${isDownloaded ? styles.downloadedButton : ''}`}
        >
          {isDownloaded ? 'Đã tải CV thành công! 🎉' : 'Tải CV'}
        </button>
      </div>
    </section>
  )
}