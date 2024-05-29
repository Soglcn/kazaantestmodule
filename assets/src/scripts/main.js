import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.model-viewer').appendChild(renderer.domElement);



renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const rgbeLoader = new RGBELoader();
rgbeLoader.setDataType(THREE.HalfFloatType);

rgbeLoader.load(
    './src/images/hdri.hdr',
    (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping; 
        scene.background = texture; 
        scene.environment = texture; 

    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100).toFixed(0) + '% HDR loaded');
    },
    (error) => {
        console.error('Error loading HDR:', error);
    }
); 



const loader = new GLTFLoader();
let model;

loader.load(
    './src/models/TEST-MODEL-2.glb',
    (gltf) => {
        model = gltf.scene;

        const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.15, roughness: 0.85 });
        model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = material;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        scene.add(model);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100).toFixed(0) + '% loaded');
    },
    (error) => {
        console.error('Error loading model:', error);
    }
);

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
// directionalLight.position.set(-15, 25, 10);
// directionalLight.castShadow = true;

// directionalLight.shadow.radius = 50;
// directionalLight.shadow.mapSize.width = 4096;
// directionalLight.shadow.mapSize.height = 4096;

// directionalLight.shadow.filter = THREE.PCFSoftShadowMap;

// scene.add(directionalLight);

// const pointLight = new THREE.PointLight(0x73ff00, 15);
// scene.add(pointLight);

// const pointLight1 = new THREE.PointLight(0xff7417, 25);
// pointLight1.position.set(-2, 5, 5);
// scene.add(pointLight1);

// const pointLight2 = new THREE.PointLight(0x009dff, 50);
// pointLight2.position.set(5, 5, -5);
// scene.add(pointLight2);


// const gridMaterial = new THREE.LineBasicMaterial({ color: 0x212121 });
// const gridHelper = new THREE.GridHelper(2000, 2000); 
// gridHelper.material = gridMaterial;
// gridHelper.position.set(0, -1, 0);
// scene.add(gridHelper);

function onDocumentMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
    vector.unproject(camera);

    const direction = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / direction.z;
    const position = camera.position.clone().add(direction.multiplyScalar(distance));

    const offsetY = 3;
    position.y += offsetY;

    // pointLight.position.copy(position);
}

document.addEventListener('mousemove', onDocumentMouseMove, false);

let targetPosition = { x: 0, y: 5, z: 10 };
let targetLookAt = { x: 0, y: 0, z: 0 };
let currentPosition = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
let currentLookAt = { x: 0, y: 0, z: 0 };

const keyframes = [
    { percent: 0, position: { x: 0, y: 5, z: 10 }, lookAt: { x: 0, y: 0, z: 0 } },
    { percent: 8, position: { x: -16, y: 2, z: 10 }, lookAt: { x: 20, y: -5, z: -40 } },
    { percent: 20, position: { x: 5, y: 5, z: 10 }, lookAt: { x: 0, y: -50, z: -100 } },
    { percent: 40, position: { x: 15, y: 2, z: -5 }, lookAt: { x: -5, y: 0, z: 0 } },
    { percent: 60, position: { x: 15, y: 2, z: 5 }, lookAt: { x: -50, y: -10, z: -25 } },
    { percent: 80, position: { x: 5, y: 5, z: 5 }, lookAt: { x: -150, y: -100, z: -150 } },
    { percent: 100, position: { x: 0, y: 5, z: 10 }, lookAt: { x: 0, y: 0, z: 0 } }
];

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollPercentage = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    console.log(`Scrolling: ${Math.floor(scrollPercentage)}%`);

    let keyframeIndex = 0;
    for (let i = 0; i < keyframes.length - 1; i++) {
        if (scrollPercentage >= keyframes[i].percent && scrollPercentage < keyframes[i + 1].percent) {
            keyframeIndex = i;
            break;
        }
    }


    const startKeyframe = keyframes[keyframeIndex];
    const endKeyframe = keyframes[keyframeIndex + 1];
    const progress = (scrollPercentage - startKeyframe.percent) / (endKeyframe.percent - startKeyframe.percent);

    targetPosition.x = lerp(startKeyframe.position.x, endKeyframe.position.x, progress);
    targetPosition.y = lerp(startKeyframe.position.y, endKeyframe.position.y, progress);
    targetPosition.z = lerp(startKeyframe.position.z, endKeyframe.position.z, progress);

    targetLookAt.x = lerp(startKeyframe.lookAt.x, endKeyframe.lookAt.x, progress);
    targetLookAt.y = lerp(startKeyframe.lookAt.y, endKeyframe.lookAt.y, progress);
    targetLookAt.z = lerp(startKeyframe.lookAt.z, endKeyframe.lookAt.z, progress);
});


function lerp(start, end, progress) {
    return (1 - progress) * start + progress * end;
}

function animate() {
    requestAnimationFrame(animate);

    currentPosition.x = THREE.MathUtils.lerp(currentPosition.x, targetPosition.x, 0.075);
    currentPosition.y = THREE.MathUtils.lerp(currentPosition.y, targetPosition.y, 0.075);
    currentPosition.z = THREE.MathUtils.lerp(currentPosition.z, targetPosition.z, 0.075);

    currentLookAt.x = THREE.MathUtils.lerp(currentLookAt.x, targetLookAt.x, 0.05);
    currentLookAt.y = THREE.MathUtils.lerp(currentLookAt.y, targetLookAt.y, 0.05);
    currentLookAt.z = THREE.MathUtils.lerp(currentLookAt.z, targetLookAt.z, 0.05);

    camera.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
    camera.lookAt(currentLookAt.x, currentLookAt.y, currentLookAt.z);

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
