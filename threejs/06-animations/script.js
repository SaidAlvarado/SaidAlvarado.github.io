import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()
// Animations
const tick = () =>
{

    // Time 
    const elapsedTime =  clock.getElapsedTime()
    // time = now

    // Update Object
    mesh.rotation.z = elapsedTime
    mesh.rotation.y = elapsedTime
    mesh.rotation.x = -1*elapsedTime

    mesh.position.set( 2 * Math.cos(elapsedTime), 2 * Math.sin(elapsedTime), 0)
    
    // Update camera
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)
    
    // Next frame
    window.requestAnimationFrame(tick)
}

window.requestAnimationFrame(tick)
// tick()