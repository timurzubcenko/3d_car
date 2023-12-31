import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';
import { useFrame } from "@react-three/fiber";
import gsap from 'gsap';

const Car = ({ color, colorWheel, colorTires, colorInterior, colorLogo }) => {
    // const { scene } = useGLTF('./models/AUDI-R8.glb')
    const { nodes, materials } = useGLTF('./models/toyota_supra.glb')

    console.log(nodes, materials)

    const boxRef = useRef(null)

    useFrame(() => {
        // boxRef.current.rotation.z -= 0.002;
    });

    useEffect(() => {
        window.addEventListener('keydown', testPos)
    }, [])

    const testPos = (e) => {
        e.key === 'w' ? gsap.to(boxRef.current.rotation, { z: 0, duration: 1 }) : ""
        e.key === 'a' ? gsap.to(boxRef.current.rotation, { z: -1.5, duration: 1 }) : ""
        e.key === 's' ? gsap.to(boxRef.current.rotation, { z: 3, duration: 1 }) : ""
        e.key === 'd' ? gsap.to(boxRef.current.rotation, { z: 1.5, duration: 1 }) : ""
    }

    return (
        <>
            {/* <primitive object={scene} /> */}
            <group dispose={null} rotation={[-1.55, 0, 1]} position={[0, -1, 0]} ref={boxRef} onClick={testPos} >
                <mesh geometry={nodes['Object_2'].geometry} material={materials['Material']} />
                <mesh geometry={nodes['Object_3'].geometry} material={new MeshPhysicalMaterial({
                    color: colorLogo,
                    roughness: 0.5, // шероховатость материала 0,0 до 1,0
                    metalness: 0.7, // металличность материала 0,0 до 1,0
                    clearCoat: 0.5, // интенсивность прозрачного покрытия материала 0,0 до 1,0
                    clearCoatRoughness: 0.6, // шероховатость прозрачного слоя 0,0 до 1,0
                })} />
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
                {/* <mesh geometry={nodes['Object_13'].geometry} material={materials['numberplate']} /> */}
                <mesh geometry={nodes['Object_14'].geometry} material={materials['plastic']} />
                <mesh geometry={nodes['Object_15'].geometry} material={new MeshPhysicalMaterial({
                    color: colorInterior,
                    roughness: 0.5, // шероховатость материала 0,0 до 1,0
                    metalness: 0.7, // металличность материала 0,0 до 1,0
                    clearCoat: 0.5, // интенсивность прозрачного покрытия материала 0,0 до 1,0
                    clearCoatRoughness: 0.6, // шероховатость прозрачного слоя 0,0 до 1,0
                })} />
                <mesh geometry={nodes['Object_16'].geometry} material={materials['nothing.']} />
                <mesh geometry={nodes['Object_17'].geometry} material={materials['reflect']} />
                <mesh geometry={nodes['Object_18'].geometry} material={new MeshPhysicalMaterial({
                    color: colorTires,
                    roughness: 0.5, // шероховатость материала 0,0 до 1,0
                    metalness: 0.7, // металличность материала 0,0 до 1,0
                    clearCoat: 0.5, // интенсивность прозрачного покрытия материала 0,0 до 1,0
                    clearCoatRoughness: 0.6, // шероховатость прозрачного слоя 0,0 до 1,0
                })} />
                <mesh geometry={nodes['Object_19'].geometry} material={new MeshPhysicalMaterial({
                    color: colorWheel,
                    roughness: 0.5, // шероховатость материала 0,0 до 1,0
                    metalness: 0.7, // металличность материала 0,0 до 1,0
                    clearCoat: 0.5, // интенсивность прозрачного покрытия материала 0,0 до 1,0
                    clearCoatRoughness: 0.6, // шероховатость прозрачного слоя 0,0 до 1,0
                })} />
            </group >
        </>
    );
};
export default Car
useGLTF.preload("./models/toyota.glb");