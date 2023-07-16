export default function Floor() {
    return (
        <mesh rotation-x={-Math.PI / 2} position={[-1, -1, 0]} receiveShadow>
            <circleGeometry args={[9]} />
            <meshStandardMaterial color="gray" />
        </mesh>
    )
}