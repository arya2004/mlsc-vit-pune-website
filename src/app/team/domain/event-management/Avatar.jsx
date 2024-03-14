import React, { useRef, useMemo, useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { SkeletonUtils } from 'three-stdlib'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'


export function Avatar(props) {
    const group = useRef()
    
    const { scene } = useGLTF("https://models.readyplayer.me/654a2335d09f0280f032b08c.glb");
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    console.log("SCENE", scene);
    const { nodes } = useGraph(clone);

    const { animations: bBoy_hip_hop } = useFBX('/animations/Bboy Hip Hop Move.fbx');
    const { animations: gangnum_style } = useFBX('/animations/Gangnam Style.fbx');
    const { animations: hip_hop} = useFBX('/animations/Hip Hop Dancing.fbx');
    const { animations: house_dancing} = useFBX('/animations/House Dancing.fbx');
    const { animations: swing_dancing} = useFBX('/animations/Swing Dancing.fbx');

    const { animations: standing_pose } = useFBX('/animations/Male Standing Pose.fbx');
    const { animations: standing_pose_1 } = useFBX('/animations/Male Standing Pose (1).fbx');
    const { animations: standing_pose_2 } = useFBX('/animations/Male Standing Pose (2).fbx');

    bBoy_hip_hop[0].name = "Bboy Hip Hop Move";
    gangnum_style[0].name = "Gangnum Style";
    hip_hop[0].name = "Hip Hop Dance";
    house_dancing[0].name = "House Dancing";
    swing_dancing[0].name = "Swing Dancing";

    standing_pose[0].name = "Standing Pose";
    standing_pose_1[0].name = "Standing Pose 1";
    standing_pose_2[0].name = "Standing Pose 2";
    
    const {actions} = useAnimations([bBoy_hip_hop[0], gangnum_style[0], hip_hop[0], house_dancing[0], swing_dancing[0],  standing_pose[0], standing_pose_1[0], standing_pose_2[0]], group);

    useEffect(() => {
        actions['Standing Pose 2'].play();
    }, [actions]);
    
    

    // const { actions } = useAnimations(animations, group)
    return (
      <group castShadow ref={group} {...props} dispose={null}>
        <primitive object={clone}  />
      </group>
    );
}