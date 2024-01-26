import React, { useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'
import { useGLTF, useAnimations } from '@react-three/drei'


export function Avatar(props) {
    const group = useRef()
    
    const { scene } = useGLTF("https://models.readyplayer.me/654a2335d09f0280f032b08c.glb");
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes } = useGraph(clone);

    // const { actions } = useAnimations(animations, group)
    return (
      <group ref={group} {...props} dispose={null}>
        <primitive object={clone}  />
      </group>
    );
}