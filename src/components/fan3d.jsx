import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Fan3D = () => {

  const { scene } = useGLTF("/models/fan.glb");

  const bladesRef = useRef();

  scene.traverse((child) => {

    if (child.name === "Fan_Blades") {
      bladesRef.current = child;
    }

  });

  useFrame((state, delta) => {

    if (bladesRef.current) {

      bladesRef.current.rotation.z += delta * 18;

    }

  });

  return (
    <Center>
      <primitive
        object={scene}
        scale={1.0}
      />
    </Center>
  );
};

export default Fan3D;