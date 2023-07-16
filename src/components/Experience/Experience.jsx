import React from 'react'
import Floor from '../Floor/Floor';
import { OrbitControls } from "@react-three/drei";
import Car from '../Car/Car';

const Experience = ({ color }) => {
    return (
        <>
            <ambientLight intensity={0.9} />
            <directionalLight position={[3.3, 5.0, 0]} />

            <OrbitControls enableZoom={true} />
            <fog attach="fog" args={["white", 0, 50]} />
            <Car color={color} />
            {/* <Floor /> */}
        </>
    );
};
export default Experience