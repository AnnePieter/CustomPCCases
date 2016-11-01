/**
 * Created by annepieter on 24/10/2016.
 */
var scene, camera, directionalLight, renderer, controls, ambientlight;
var material, cube;
var scene, camera, directionalLight, renderer, controls;
var material, geometry, cube;
var arr = [];
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'models/ThreeJs/Stock/' );
init();
animate();
function init(){

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 5;
    directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
    directionalLight.position.set( camera.position.x,camera.position.y,camera.position.z );
    directionalLight.target.position.set(0,0,0);
    ambientlight = new THREE.AmbientLight(0xffffff, 0.5);


    scene.add(directionalLight,ambientlight);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
    renderer.setClearColor(0xB2DFEE);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera);
    controls.addEventListener( 'change' );
    material = new THREE.MeshPhongMaterial({color:0xffffff});
    animate();

}

function animate(){

    directionalLight.position.x = camera.position.x;
    directionalLight.position.y = camera.position.y;
    directionalLight.position.z = camera.position.z;
    renderer.render(scene,camera);

    requestAnimationFrame(animate);

}

function ColorHex(){
    var color = prompt("give color hex 0x......");
    if (color != null && color.toString().length == 6) {
        material.color.setHex('0x'+color);
    }
    else {alert("beter geef je groter nummer dan");ColorHex()}
}



function FetchModels() {
    Frontpanelpush();
    var x = document.getElementById("sidepanels");
    var array = arr;
    for(var i = 0; i < array.length; i++)
    {
        var option = document.createElement("option");
        option.text = array[i];
        option.value = array[i];
        x.add(option, x[i]);
    }
}
function ShowModel() {
    var x = document.getElementById("sidepanels");
    var modelToLoad = x.options[x.selectedIndex].text;
    if (modelToLoad == "FrontTextureable")
    {
        var jsonloader = new THREE.ObjectLoader();
        jsonloader.load('models/ThreeJS/Customizable/Front1.json', function(frontTexture){
            frontTexture.traverse((function (child) {
                if(child instanceof THREE.Mesh)
                {
                    child.material = material;
                }
            }));
            scene.add(frontTexture);
        });
    }
    else {
        var modelColor = modelToLoad.split('#')
        mtlLoader.load(modelToLoad[0] + '.mtl', function (Selected) {

            Selected.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJs/Stock/');
            loader.setMaterials(Selected);
            loader.load(modelToLoad[0] + '.obj', function (object) {
                scene.add(object);
            });
        });
    }

}
