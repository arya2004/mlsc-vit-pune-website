import { Cloud, Clouds, Stars } from "@react-three/drei";

function Fillers() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight castShadow color="white" position={[5, 10, 0]} intensity={2} />
      <directionalLight castShadow color="purple" position={[0, -10, 0]} intensity={2} />
      <Stars
        radius={150}
        depth={100}
        count={200}
        factor={4}
        saturation={0}
        speed={1}
      />

      <Clouds>
        <Cloud
          segments={80}
          bounds={[10, 2, 10]}
          concentrate="outside"
          position={[0, -20, 0]}
          color="#65b5ef"
          volume={8}
          scale={32}
          speed={0.05}
          growth={2}
        />
      </Clouds>
    </>
  );
}

export default Fillers;
