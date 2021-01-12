let scene, camera, renderer, cube;
let ADD = .01;
let ADDr = -.06;

let createCube = function() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({color: 0x00a1cb})
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
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

    createCube();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function() {
    // cube.position.x += ADD;
    cube.rotation.y -= ADDr;

    if (cube.position.x <= -1.5 || cube.position.x >= 1.5)
        ADD *= -1;

    // console.time('mainloop');
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
    // console.timeEnd('mainloop');
}

init();
mainLoop();