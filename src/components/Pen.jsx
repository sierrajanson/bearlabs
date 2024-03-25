import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {OrbitControls } from '@react-three/drei';
import {useRef} from 'react';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';
export default function Pen() {

    const Pen = () => {
        const gltf = useLoader(GLTFLoader, './models/design_paveway_collapsed.glb');
        const ref = useRef();
        useFrame((state,delta) =>{
         ref.current.rotation.z = 1100;
         ref.current.rotation.x = 9.5;
         ref.current.rotation.y = 12;

        }
        );
        return(
        <mesh ref={ref} scale={0.055} position={[-12,0,-2]} >
            <primitive
            object={gltf.scene}
            position={[3,-5,-3]}
            children-0-castShadow
            />
      </mesh>);

    }

    return (
        <Canvas className="home_pen_container" camera={{ position: [3, 0.5, -3], near: 0.025 }}>
        {/* <directionalLight
        position={[0,1,-2]}
        castShadow
        intensity={Math.PI * 2}
        /> */}
        <ambientLight
            intensity={Math.PI * 1}
        />
        <Pen/>
        <OrbitControls/>
        </Canvas>
)
}

