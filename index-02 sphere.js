let scene, camera, renderer, sphere;
let ADD = .01;
let ADDr = -.06;

let createSphere = function() {
    let geometry = new THREE.SphereGeometry(1, 30, 30, 0, Math.PI, 0, Math.PI /2);
    let material = new THREE.MeshBasicMaterial({color: 0x00a1cb, wireframe: true})
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphere.position.x = 1;
    sphere.position.y = 1;
    sphere.rotation.y = 5;
}

let init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;
    camera.position.y = 1.5;
    camera.position.x = 1;

    let axes = new THREE.AxesHelper(5);
    scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    createSphere();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function() {    
    sphere.rotation.y += ADD;
    // cube.position.x += ADD;

    // console.time('mainloop');
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
    // console.timeEnd('mainloop');
}

init();
mainLoop();