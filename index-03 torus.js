let scene, camera, renderer, torus;
let ADD = .01;
let ADDr = -.06;

let createTorus = function() {
    let geometry = new THREE.TorusGeometry(2, 1, 20, 5, 1.8 * Math.PI);
    let material = new THREE.MeshBasicMaterial({color: 0x123456, wireframe: false})
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    torus.rotation.x = -1;
}

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;
    camera.position.y = 1.5;
    camera.position.x = 1;

    // let axes = new THREE.AxesHelper(5);
    // scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    createTorus();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function() {    
    torus.rotation.x += ADD;
    torus.rotation.y += ADD;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();