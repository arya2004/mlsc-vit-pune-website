import { Octahedron, MeshPortalMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function Portal() {
  return (
    <Octahedron scale={[2, 4, 1]}>
      <MeshPortalMaterial side={THREE.DoubleSide}>
        <Environment files="/environments/motherboard-bg.hdr" background />
        {/* <mesh>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial side={THREE.BackSide} />
      </mesh> */}
        <ambientLight intensity={0.5} />
      </MeshPortalMaterial>
    </Octahedron>
  );
}

export default Portal;
