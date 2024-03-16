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
  SelectiveBloom,
} from "@react-three/postprocessing";

// import {useMLSCStore} from "../../store/MLSCStore";

function Effects({inPortal}) {

  // const teleporting = useMLSCStore((s) => s.teleporting);

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.5} luminanceSmoothing={1} height={200} />
    </EffectComposer>
  );
}

export default Effects;
