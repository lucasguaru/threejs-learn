let scene, camera, renderer, custom;
let ADD = .01;
let ADDr = -.06;

let createCustom = function () {
    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(3, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 5, 0));
    geometry.vertices.push(new THREE.Vector3(0, 0, 2));
    geometry.vertices.push(new THREE.Vector3(1, 2, -2));

    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.faces.push(new THREE.Face3(1, 5, 3));
    // geometry.faces.push(new THREE.Face3(0, 1, 2));

    let material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
    });
    custom = new THREE.Mesh(geometry, material);
    scene.add(custom);
}

let init = function () {
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

    createCustom();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function () {
    custom.rotation.x += ADD;
    custom.rotation.y += ADD;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();