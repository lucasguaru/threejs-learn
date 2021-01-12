let scene, camera, renderer, torus;
let aneis = [];
let ADD = .01;
let ADDr = -.06;

let createTorus = function(raio, espessura, d3, d4) {
    let geometry = new THREE.TorusGeometry(raio, espessura, d3, d4, 2 * Math.PI);
    // let geometry = new THREE.TorusGeometry(2, .5, 20, 5, 2 * Math.PI);
    let material = new THREE.MeshBasicMaterial({color: 0x123456, wireframe: false})
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    aneis.push(torus);
}

let createSphere = function() {
    let geometry = new THREE.SphereGeometry(1.4, 30, 30);
    let material = new THREE.MeshBasicMaterial({color: 0x12adda, wireframe: false})
    let sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

let createSaturn = function() {
    createSphere();
    createTorus(1.8, .3, 2, 30);
    createTorus(2.5, .3, 2, 30);
    createTorus(3.2, .3, 2, 30);
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

    createSaturn();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function() {    
    // torus.rotation.x += ADD;
    // torus.rotation.y += ADD;
    aneis.forEach(t => {
        t.rotation.x += ADD;
        t.rotation.y += ADD;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();