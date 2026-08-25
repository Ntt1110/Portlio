// src/App.jsx
import { Canvas } from '@react-three/fiber'
import Scene from './components/canvas/Scene'
import Overlay from './components/ui/Overlay'
import styles from './App.module.css' // Import file CSS module

function App() {
  return (
    // Dùng class từ file CSS module thay vì Tailwind để tránh lỗi thiếu cấu hình màu
    <div className={styles.appContainer}>
      
      {/* 1. Lớp 3D đặt cố định ở nền sau */}
      <div className={styles.canvasBackground}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>

      {/* 2. Lớp giao diện 2D phủ lên trên */}
      <div className={styles.overlayContainer}>
        <Overlay />
      </div>
      
    </div>
  )
}

export default App