import { Cloud, Clouds, Stars } from "@react-three/drei";

function Fillers() {
  return (
    <>
      <ambientLight intensity={1} />
      {/* <directionalLight castShadow color="white" position={[0, 5, 0]} intensity={2} /> */}
      {/* <directionalLight castShadow color="purple" position={[0, -3, 5]} intensity={2} /> */}
      <pointLight castShadow color="white" position={[0, 10, 0]} intensity={5} />
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
          segments={10}
          bounds={[8, 2, 8]}
          concentrate='outside'
          position={[0, -20, 0]}
          color="#65b5ef"
          volume={5}
          scale={35}
          speed={0.05}
          growth={2}
          // fade={10}
        />
      </Clouds>
    </>
  );
}

export default Fillers;
