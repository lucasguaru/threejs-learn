function $(id) {
    return document.getElementById(id);
}

function cameraValueChange(item) {
    return function($event) {
        camera.position[item] = $event.target.value;
        $(`s-${item}`).innerHTML = $event.target.value;
    }
}

const items = ['x', 'y', 'z'];
window.onload = function() {
    items.forEach(item => {
        $(`camera-${item}`).addEventListener('change', cameraValueChange(item));
        $(`camera-${item}`).value = camera.position[item];
        $(`s-${item}`).innerHTML = camera.position[item];
    })
}