/**
 * Created by annepieter on 24/10/2016.
 */
var scene, camera, directionalLight, renderer, controls;
var material, geometry, cube, material2;
var objarr = [];
var jsonarr =[];
var mtlLoader = new THREE.MTLLoader();
var value = "#ffffff";
var explosion = false;
//var valueTest = document.getElementById('primary').value;

init();
animate();
function init(){

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 7;
    directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
    directionalLight.position.set( camera.position.x,camera.position.y,camera.position.z );
    directionalLight.target.position.set(0,0,0);
    var ambientlight = new THREE.AmbientLight(0xffffff, 0.5);

    scene.add(directionalLight,ambientlight);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 200, window.innerHeight - 200);
    renderer.setClearColor(0xB2DFEE);
    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera);
    controls.addEventListener( 'change' );
    material = new THREE.MeshPhongMaterial({color:0xffffff});
    material2 = new THREE.MeshPhongMaterial({color:0x343434});
    animate();

}
animate();

function animate(){

    directionalLight.position.x = camera.position.x;
    directionalLight.position.y = camera.position.y;
    directionalLight.position.z = camera.position.z;
    renderer.render(scene,camera);

    if(explosion)
    {
        scene.children[3].position.x = 
        explosion = false;
    }








    requestAnimationFrame(animate);

}

function FetchModels() {
    Frontpanelpush();
    var x = document.getElementById("sidepanels");
    var array = objarr;
    for(var i = 0; i < array.length; i++)
    {
        var option = document.createElement("option");
        var tekst = array[i].split("#");
        option.text = tekst[0];
        option.value = array[i];
        x.add(option, x[i]);
    }
    array = jsonarr;
    for(var i = 0; i < array.length; i++)
    {
        var option = document.createElement("option");
        var tekst = array[i].split("#");
        option.text = tekst[0];
        option.value = array[i];
        x.add(option, x[i]);
    }
}
function ShowModel() {


    var x = document.getElementById("sidepanels");
    var modelToLoad = x.options[x.selectedIndex].value;
    var modelColor = modelToLoad.split('#');
    var modelColor2 = modelColor[1].split('*');
    material.color.setHex('0x' + modelColor2[0]);
    material2.color.setHex('0x' + modelColor2[1]);
    document.getElementById('primary').value = '#' + modelColor2[0];
    document.getElementById('secondary').value = '#' + modelColor2[1];
    console.log(modelColor[1]);
    console.log(material);
    if (x.selectedIndex <  jsonarr.length) {
        var jsonloader = new THREE.ObjectLoader();
        document.getElementById('secondary').style.visibility = "visible";
        jsonloader.load('models/ThreeJS/logos/'+ modelColor[0] + '.json', function (frontTexture) {
            frontTexture.traverse((function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material = material2;
                }
            }));
            frontTexture.position.x = 1.95;
            frontTexture.position.y = 0.05;
            frontTexture.rotation.y = Math.PI;
            scene.remove(scene.children[15]);
            scene.add(frontTexture);
            console.log(scene.children);
        });
    }
    else {
        document.getElementById('secondary').style.visibility = "hidden";
        mtlLoader.setPath( 'models/ThreeJs/logos/' );
        modelColor = modelToLoad.split('#');
        material.color.setHex('0x' + modelColor[1]);
        mtlLoader.load(modelColor[0] + '.mtl', function (Selected) {

            Selected.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJs/logos/');
            loader.setMaterials(Selected);
            loader.load(modelColor[0] + '.obj', function (object) {
                object.position.x = 1.95;
                object.position.y = 0.05;
                scene.remove(scene.children[15]);
                scene.add(object);

            });
        });
    }
}

function colorPrimary(){
    value = document.getElementById('primary').value;
    console.log(value);
    material.color.setHex('0x' + document.getElementById('primary').value.split("#")[1]);
}

function colorSecondary(){
    value = document.getElementById('secondary').value;
    console.log(value);
    material2.color.setHex('0x' + document.getElementById('secondary').value.split("#")[1]);
}

function Explode(){
    if(scene.children[3].position.x == 4)
    {
        explosion = false;
    }
    else
    {
        explosion = true;
    }

}