let scene, camera, renderer, butterfly;
let ADD = .04;
let maxY = 0;

let createCustom = function () {
    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(2, 2.2, 2));
    geometry.vertices.push(new THREE.Vector3(3, 1.2, 3));
    geometry.vertices.push(new THREE.Vector3(.7, .3, 2));
    geometry.vertices.push(new THREE.Vector3(1, 2, 1));
    maxY = geometry.vertices[0].y;

    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.faces.push(new THREE.Face3(1, 2, 3));
    // geometry.faces.push(new THREE.Face3(0, 2, 3));

    // let material = new THREE.MeshDepthMaterial();

    let material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        // wireframe: true
    });
    butterfly = new THREE.Mesh(geometry, material);
    scene.add(butterfly);
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

    createCustom();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function () {
    butterfly.rotation.x = .7;
    butterfly.rotation.z = .6;

    butterfly.geometry.vertices[0].y -= ADD;
    butterfly.geometry.vertices[3].y -= ADD;
    butterfly.geometry.verticesNeedUpdate = true;
    if (butterfly.geometry.vertices[0].y < 0 || butterfly.geometry.vertices[0].y > maxY) ADD *= -1;

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();