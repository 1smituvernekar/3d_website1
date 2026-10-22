import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Fan3D = () => {
  const { scene } = useGLTF("/models/fan.glb");

  const fanRef = useRef();

  // Animation
  useFrame((state, delta) => {
    if (fanRef.current) {
      fanRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={fanRef}>
      <Center>
        <primitive
          object={scene}
          scale={1}
        />
      </Center>
    </group>
  );
};

export default Fan3D;

useGLTF.preload("/models/fan.glb");