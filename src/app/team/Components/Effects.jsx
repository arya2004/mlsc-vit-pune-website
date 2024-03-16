import React, { Suspense, useState } from "react";
import {
  EffectComposer,
  GodRays,
  Glitch,
  Noise,
  LensFlare,
  Scanline,
  Bloom,
  DotScreen,
} from "@react-three/postprocessing";

import {useMLSCStore} from "../../store/MLSCStore";

function Effects({inPortal}) {

  // const teleporting = useMLSCStore((s) => s.teleporting);

  return (
    <EffectComposer>
      {/* <GodRays
            sun={new THREE.Vector3(0, 0, 0)}
            blendFunction={BlendFunction.Screen} // The blend function of this effect.
            samples={60} // The number of samples per pixel.
            density={0.96} // The density of the light rays.
            decay={0.9} // An illumination decay factor.
            weight={0.4} // A light ray weight factor.
            exposure={0.6} // A constant attenuation coefficient.
            clampMax={1} // An upper bound for the saturation of the overall effect.
            width={Resizer.AUTO_SIZE} // Render width.
            height={Resizer.AUTO_SIZE} // Render height.
            kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
            blur={true}
          /> */}
      <Noise opacity={0.05} />
      {/* <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} /> */}
      {inPortal && <Suspense><DotScreen /> </Suspense>}
    </EffectComposer>
  );
}

export default Effects;
