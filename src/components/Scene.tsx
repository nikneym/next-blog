"use client";
import { Clone, OrbitControls } from "@react-three/drei";
import {
  Canvas,
  Euler,
  useFrame,
  useLoader,
  type Vector3 as IVector3,
} from "@react-three/fiber";
import { useRef } from "react";
import { Vector3, type Mesh } from "three";
import { GLTFLoader, MTLLoader, OBJLoader } from "three/examples/jsm/Addons.js";

interface ElementProps {
  position?: IVector3;
  rotation?: Euler;
}

interface FlowerProps extends ElementProps {}

function Flower({ position, rotation }: FlowerProps) {
  const flower = useLoader(GLTFLoader, "red-flower/scene.gltf");
  // since we want to create many flowers, it has to be cloned
  // https://discourse.threejs.org/t/duplicate-same-model-in-a-canvas-react-three-fiber/50913/10
  return (
    <mesh position={position} rotation={rotation}>
      <Clone object={flower.scene} />
    </mesh>
  );
}

interface TreeProps extends FlowerProps {}

function Tree({ position, rotation }: TreeProps) {
  const tree = useLoader(GLTFLoader, "tree/scene.gltf");

  /* <mesh position={[-3, 0, -1]} rotation={[0, 0.5, 0]}> */
  return (
    <mesh position={position} rotation={rotation}>
      <primitive object={tree.scene} scale={0.13} />
    </mesh>
  );
}

function Bench() {
  const bench = useLoader(GLTFLoader, "bench/scene.gltf");

  return (
    <mesh>
      <primitive
        object={bench.scene}
        rotation-y={-Math.PI / 2}
        position={[0, -0.1, 0]}
        scale={0.04}
      />
    </mesh>
  );
}

interface GrassProps extends ElementProps {}

function Grass({ position, rotation }: GrassProps) {
  const grass = useLoader(GLTFLoader, "grass/scene.gltf");

  return (
    <mesh position={position} rotation={rotation} scale={0.03}>
      <Clone object={grass.scene} />
    </mesh>
  );
}

function Elements() {
  const materials = useLoader(MTLLoader, "obj/Gato Preto.mtl");
  const obj = useLoader(OBJLoader, "obj/Gato Preto.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const vec = new Vector3();

  useFrame(({ camera, clock, pointer, controls }) => {
    //camera.position.x = pointer.x - 6;
    //camera.position.y = pointer.y + 7;
    //camera.lookAt(0, 0, 0);
    //camera.updateProjectionMatrix();
    //camera.lookAt(0, 0, 0);
    vec.set(pointer.x - 6, pointer.y + 4, camera.position.z);
    camera.position.lerp(vec, 0.025);
  });

  //const camera = useThree((state) => state.camera);
  const meshRef = useRef<Mesh>(null);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight color="white" castShadow position={[3.3, 1.0, 4.4]} />
      <pointLight castShadow />
      <spotLight castShadow position={[0, 2.5, 0]} />

      {/* Cat */}
      <mesh
        ref={meshRef}
        position={[0, 0.98, -0.9]}
        //rotation={[0, -0.3, 0]}
        rotation={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <primitive object={obj} scale={0.35} />
      </mesh>

      <Bench />
      <Tree position={[-5, 0, 0.2]} />

      {/* Floor */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[12]} />
        {/* <OrbitControls target={[0, 0, 0]} /> */}
        <meshStandardMaterial color="lime" />
      </mesh>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [-6, 2, 6], zoom: 1.8 }} shadows>
      <Elements />
    </Canvas>
  );
}
