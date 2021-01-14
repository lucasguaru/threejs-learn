let scene, camera, renderer, text;
let ADD = .04;
let maxY = 0;

let createGeometry = function () {

    let loader = new THREE.FontLoader();
    let font = loader.parse(fontJSON);
        
    let titles = "99 bottles of beer on the wall,\n99 bottles of beer.\nTake one down, pass it around,\n98 bottles of beer on the wall,\n98 bottles of beer.\nTake one down, pass it around,\n97 bottles of beer on the wall,\n97 bottles of beer.\nTake one down, pass it around,\n96 bottles of beer on the wall,\n96 bottles of beer.\nTake one down, pass it around,\n95 bottles of beer on the wall,\n95 bottles of beer.";

    let geometry = new THREE.TextGeometry(titles, {
        font: font, size: 1, height: 0.05
    });

    let material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        // wireframe: true
    });
    text = new THREE.Mesh(geometry, material);

    text.position.x = -10;
    text.rotation.x = -1.3;
    scene.add(text);
}

let init = function () {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    // camera.position.z = 20;
    // camera.position.y = 1.5;
    // camera.position.x = 2;
    camera.position.set(0, 13, 30);

    let axes = new THREE.AxesHelper(10);
    // scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    createGeometry();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function () {
    text.position.z -= ADD;
    text.position.y += ADD / 2;
    // text.rotation.z = .6;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();