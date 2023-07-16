import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';

const Car = ({ color }) => {
    // const { scene } = useGLTF('./models/AUDI-R8.glb')
    const { nodes, materials } = useGLTF('./models/toyota_supra.glb')

    console.log(nodes, materials)

    return (
        <>
            {/* <primitive object={scene} /> */}
            <group dispose={null} rotation={[-1.55, 0, 1]} position={[0, -1, 0]}>
                <mesh geometry={nodes['Object_2'].geometry} material={materials['Material']} />
                <mesh geometry={nodes['Object_3'].geometry} material={materials['chrome']} />
                <mesh geometry={nodes['Object_4'].geometry} material={materials['glass.001']} />
                <mesh geometry={nodes['Object_5'].geometry} material={materials['lights11']} />
                <mesh geometry={nodes['Object_6'].geometry} material={materials['misc_metal.001']} />
                <mesh geometry={nodes['Object_7'].geometry} material={materials['reflect.001']} />
                <mesh geometry={nodes['Object_8'].geometry} material={materials['glass']} />
                <mesh geometry={nodes['Object_9'].geometry} material={materials['tail_lights']} />
                <mesh geometry={nodes['Object_10'].geometry} material={materials['brake_disc']} />
                <mesh geometry={nodes['Object_11'].geometry} material={materials['brake_disc1']} />
                <mesh geometry={nodes['Object_12'].geometry} material={new MeshPhysicalMaterial({
                    color: color,
                    roughness: 0.5, // шероховатость материала 0,0 до 1,0
                    metalness: 0.7, // металличность материала 0,0 до 1,0
                    clearCoat: 0.5, // интенсивность прозрачного покрытия материала 0,0 до 1,0
                    clearCoatRoughness: 0.6, // шероховатость прозрачного слоя 0,0 до 1,0
                })} />
                <mesh geometry={nodes['Object_13'].geometry} material={materials['numberplate']} />
                <mesh geometry={nodes['Object_14'].geometry} material={materials['plastic']} />
                <mesh geometry={nodes['Object_15'].geometry} material={materials['interior']} />
                <mesh geometry={nodes['Object_16'].geometry} material={materials['nothing.']} />
                <mesh geometry={nodes['Object_17'].geometry} material={materials['reflect']} />
                <mesh geometry={nodes['Object_18'].geometry} material={materials['rubber.002']} />
                <mesh geometry={nodes['Object_19'].geometry} material={materials['wheel_metal.001']} />
            </group>
        </>
    );
};
export default Car
useGLTF.preload("./models/toyota.glb");