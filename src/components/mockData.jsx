import lungs from '../asserts/lungs.jpg';
import teeth from '../asserts/teeth.jpg';
import bone from '../asserts/bone.jpg';

export const organs = [
  { name: 'Lungs', image: lungs, progress: '70%' },
  { name: 'Teeth', image: teeth, progress: '85%' },
  { name: 'Bone', image: bone, progress: '50%' },
];


// now creating canvas here 
import "../style/Dashboard.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Center } from "@react-three/drei";
import Body from '../asserts/Body';

const ThreeAnimation =()=>{
    return(
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={1.5} />
            <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
            <Suspense fallback={null}>
                <Center>
                    <Body scale={1.2} />
                </Center>
            </Suspense>
            <Environment preset="sunset" />
        </Canvas>
    )
}

export default ThreeAnimation