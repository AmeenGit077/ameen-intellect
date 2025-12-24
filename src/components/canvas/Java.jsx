import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const JavaModel = ({ isMobile }) => {
    const { scene } = useGLTF(
        "./java/scene.gltf",
        undefined,
        (loader) => {
            const dracoLoader = new DRACOLoader();
            loader.setDRACOLoader(dracoLoader);
        }
    );

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.10}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, 1.57, -0.1]}
            />
        </mesh>
    );
};

const MemoizedJavaModel = React.memo(JavaModel);

const JavaCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 6, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.5}
                    enableZoom={false}
                    enableRotate={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <MemoizedJavaModel isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default JavaCanvas;
