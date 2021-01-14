let scene, camera, renderer, text;
let ADD = .04;
let maxY = 0;

let createGeometry = function () {

    let loader = new THREE.FontLoader();
    let font = loader.parse(fontJSON);
    let geometry = new THREE.TextGeometry('Hello World', {
        font: font, size: 1, height: 0.2
    });

    let material = new THREE.MeshBasicMaterial({
        color: 0x034b59,
        // wireframe: true
    });
    text = new THREE.Mesh(geometry, material);
    text.position.x = -2;
    scene.add(text);
}

let init = function () {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xababab);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 20;
    camera.position.y = 1.5;
    camera.position.x = 2;

    let axes = new THREE.AxesHelper(10);
    scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    createGeometry();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function () {
    text.rotation.x += .01;
    // text.rotation.z = .6;

    // text.geometry.vertices[0].y -= ADD;
    // text.geometry.vertices[3].y -= ADD;
    // text.geometry.verticesNeedUpdate = true;
    // if (text.geometry.vertices[0].y < 0 || text.geometry.vertices[0].y > maxY) ADD *= -1;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();