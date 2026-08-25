import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function BlockyDeveloper() {
  const groupRef = useRef()

  // Tạo hiệu ứng lơ lửng và xoay nhẹ
  useFrame((state) => {
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
  })

  return (
    <group ref={groupRef} scale={0.8} position={[0, -0.5, 0]}>
      {/* --- PHẦN ĐẦU & MẶT --- */}
      <group position={[0, 2.2, 0]}>
        {/* Khối đầu chính */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#fcd5ce" />
        </mesh>

        {/* Mắt trái */}
        <mesh position={[-0.2, 0.1, 0.51]}>
          <boxGeometry args={[0.12, 0.12, 0.05]} />
          <meshStandardMaterial color="#1e1b4b" />
        </mesh>

        {/* Mắt phải */}
        <mesh position={[0.2, 0.1, 0.51]}>
          <boxGeometry args={[0.12, 0.12, 0.05]} />
          <meshStandardMaterial color="#1e1b4b" />
        </mesh>

        {/* Mũi nhỏ */}
        <mesh position={[0, -0.05, 0.52]}>
          <boxGeometry args={[0.08, 0.12, 0.05]} />
          <meshStandardMaterial color="#f8b4a9" />
        </mesh>

        {/* Miệng cười */}
        <mesh position={[0, -0.25, 0.51]}>
          <boxGeometry args={[0.3, 0.06, 0.05]} />
          <meshStandardMaterial color="#e11d48" />
        </mesh>
      </group>

      {/* --- MÁI TÓC 7/3 --- */}
      {/* Phần mái phủ bên trái */}
      <mesh position={[0.1, 2.78, 0.1]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[1.05, 0.28, 1.05]} />
        <meshStandardMaterial color="#1e1b4b" />
      </mesh>
      {/* Phần chẻ ngôi rẽ sang bên phải */}
      <mesh position={[-0.42, 2.65, 0.1]} rotation={[0, 0, 0.25]}>
        <boxGeometry args={[0.28, 0.35, 1.05]} />
        <meshStandardMaterial color="#1e1b4b" />
      </mesh>

      {/* --- THÂN MÌNH (Áo thun) --- */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.6]} />
        <meshStandardMaterial color="#4f46e5" /> {/* Áo màu tím chủ đạo */}
      </mesh>

      {/* --- CÁNH TAY --- */}
      <mesh position={[-0.8, 1, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      {/* Tay phải giơ lên chào */}
      <mesh position={[0.8, 1.2, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>

      {/* --- CHÂN --- */}
      <mesh position={[-0.3, -0.5, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.3, -0.5, 0]}>
        <boxGeometry args={[0.4, 1.2, 0.4]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  )
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      
      {/* Đặt lệch sang phải màn hình */}
      <group position={[2.5, 0, 0]}>
        <BlockyDeveloper />
      </group>

      <OrbitControls enableZoom={false} />
    </>
  )
}