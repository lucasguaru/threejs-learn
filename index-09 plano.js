let scene, camera, renderer, cube1, cube2, plane;
let ADD = .04;

let createGeometry = function () {
    let geometry = new THREE.BoxGeometry(2, 2, 2);
    // let material = new THREE.MeshBasicMaterial({color: 0xc99b92b});
    
    let material = new THREE.MeshDepthMaterial();

    cube1 = new THREE.Mesh(geometry, material);
    cube1.position.z = -6;
    cube1.position.y = -5;
    // let normals = new FaceNormalsHelper(cube1, 5);
    
    geometry = new THREE.BoxGeometry(2, 2, 2);
    material = new THREE.MeshBasicMaterial({color: 0xff0040, transparency: true, opacity: 0.2});

    cube2 = new THREE.Mesh(geometry, material);
    cube2.position.z = 6;
    cube2.position.y = -5;
    
    geometry = new THREE.PlaneGeometry(50, 50, 50, 50);
    material = new THREE.MeshBasicMaterial({color: 0xa5f995, wireframe: true});

    plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI / 2;
    plane.position.y = -10;
    plane.position.z = -30;
    
    scene.add(cube1);
    // scene.add(normals);
    scene.add(cube2);
    scene.add(plane);
}

let init = function () {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;
    // camera.position.y = 1.5;
    // camera.position.x = 2;
    // camera.position.set(0, 13, 30);

    let axes = new THREE.AxesHelper(10);
    scene.add(axes);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    createGeometry();

    $('scene').appendChild(renderer.domElement);
}

let mainLoop = function () {
    cube1.position.x += ADD;
    cube2.position.x -= ADD;
    if (cube1.position.x < -6 || cube1.position.x > 6) {
        ADD *= -1;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop)
}

init();
mainLoop();