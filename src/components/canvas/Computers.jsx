import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./public/workbench/scene.gltf')
  return (
    <mesh>
      
      <hemisphereLight intensity={3} groundColor="white" /> 
      <pointLight intensity={0.2}/>
      <spotLight 
        position={[0,0,0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object ={computer.scene}
        scale={isMobile? 0.6 : 1.2}
        position={isMobile? [0,-1.5,0] : [0,-2,0]}
        rotation={[0,0,0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])


  return (
    <Canvas 
      frameLoop="demand"
      shadows
      camera = {{position:[20,3,5], fov:15}}
      gl = {{preserveDrawingBuffer:true}}
    >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={3*Math.PI/4}
            minPolarAngle={Math.PI/4}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas