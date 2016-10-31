/**
 * Created by annepieter on 24/10/2016.
 */
var scene, camera, directionalLight, renderer, controls;
var material,geometry, cube;
init();
animate();
function init(){

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 5;
    directionalLight = new THREE.DirectionalLight(0xE5E5E5,0.5);
    directionalLight.position.set( 5,10,5 );
    directionalLight.target.position.set(0,0,0);

    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
    renderer.setClearColor(0xB2DFEE);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera);
    controls.addEventListener( 'change' );

    animate();

}

function animate(){
    renderer.render(scene,camera);

    requestAnimationFrame(animate);

}
animate();

function ColorHex(){
    var color = prompt("give color hex 0x......");
    if (color != null && color.toString().length == 6) {
        cube.material.color.setHex('0x'+color);
        console.log(cube.material.color);
    }
    else {alert("beter geef je groter nummer dan");ColorHex()}
}
