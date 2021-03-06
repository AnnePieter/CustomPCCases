/**
 * Created by annepieter on 27/10/2016.
 */


/** Side panels **/
function Frontpanelpush(){
    jsonarr.push("alienware#343434*20ea19");
    jsonarr.push("Aperture#FFFFFF*adaeff");
    jsonarr.push("MSI#343434*FF0000");
    jsonarr.push("nvidia#343434*48a11a");
    jsonarr.push("VS#FFFFFF*551A8B");
    jsonarr.push("Front1#343434*FF0000");
    objarr.push("razer#343434");
    objarr.push("alliance#1d3464");
    objarr.push("deadpool#010101");
    objarr.push("Overwatch#FF4800");
}
spawn();
/** custom **/
function spawn() {
    var jsonloader = new THREE.ObjectLoader();

    jsonloader.load('models/ThreeJS/Customizable/BottomPootjes.json', function (bottom) {
        bottom.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        bottom.position.y = -2;
        scene.children[2] = bottom;
    });

    jsonloader.load('models/ThreeJS/Customizable/Top.json', function (top) {
        top.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        top.position.y = 2.1;
        scene.children[3] = top;
    });


    jsonloader.load('models/ThreeJS/Customizable/Back.json', function (back) {
        mtlLoader.setPath('models/ThreeJS/inside/');
        mtlLoader.load('Fan.mtl', function (fan) {
            fan.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/inside/');
            loader.setMaterials(fan);
            loader.load('Fan.obj', function (object) {
                object.position.x = -1.95;
                object.position.y = 0.05;
                object.rotation.y = Math.PI;
                scene.add(object);
            });
        });
        back.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        back.position.x = -1.95;
        back.position.y = 0.05;
        scene.children[4] = back;
    });
    jsonloader.load('models/ThreeJS/Customizable/leeg.json', function (front) {
        front.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        front.position.x = 1.95;
        front.position.y = 0.05;
        scene.children[5] = front;
    });

    jsonloader.load('models/ThreeJS/Customizable/window.json', function (window) {
        mtlLoader.setPath('models/ThreeJS/Customizable/');
        mtlLoader.load('windowOnlyTinted.mtl', function (wo) {
            wo.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/Customizable/');
            loader.setMaterials(wo);
            loader.load('windowOnlyTinted.obj', function (object) {
                object.position.z = 0.95;
                object.position.y = 0.05;
                scene.children[8] = object;
            });
        });
        window.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        window.position.z = 0.95;
        window.position.y = 0.05;
        scene.children[6] = window;
    });


    jsonloader.load('models/ThreeJS/Customizable/windowless.json', function (windowless) {
        mtlLoader.setPath('models/ThreeJS/inside/');
        mtlLoader.load('Cooler.mtl', function (co) {
            co.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/inside/');
            loader.setMaterials(co);
            loader.load('Cooler.obj', function (object) {
                object.position.z = -0.8;
                object.position.y = 0.7;
                object.position.x = -0.6;
                object.scale.set(1.4, 1.4, 1.4);

                scene.add(object);
            });
        });
        mtlLoader.load('GPU.mtl', function (gpu) {
            gpu.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/inside/');
            loader.setMaterials(gpu);
            loader.load('GPU.obj', function (object) {
                object.position.z = -0.8;
                object.position.y = 0.7;
                object.position.x = -0.6;
                object.scale.set(1.4, 1.4, 1.4);
                scene.add(object);
            });
        });
        mtlLoader.load('mobotest.mtl', function (mobo) {
            mobo.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/inside/');
            loader.setMaterials(mobo);
            loader.load('mobotest.obj', function (object) {
                object.position.z = -0.8;
                object.position.y = 0.7;
                object.position.x = -0.6;
                object.scale.set(1.4, 1.4, 1.4);
                scene.add(object);
            });
        });
        mtlLoader.load('ram.mtl', function (ram) {
            ram.preload();
            var loader = new THREE.OBJLoader();
            loader.setPath('models/ThreeJS/inside/');
            loader.setMaterials(ram);
            loader.load('ram.obj', function (object) {
                object.position.z = -0.8;
                object.position.y = 0.7;
                object.position.x = -0.6;
                object.scale.set(1.4, 1.4, 1.4);
                scene.add(object);
            });
        });


        windowless.traverse((function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
            }
        }));
        windowless.position.z = -0.95;
        windowless.position.y = 0.05;
        scene.children[7] = windowless;
    });

}
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath('models/ThreeJS/bureau/');
mtlLoader.load('bureau.mtl', function (ram) {
    ram.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath('models/ThreeJS/bureau/');
    loader.setMaterials(ram);
    loader.load('bureau.obj', function (object) {
        object.position.y = -2.3;
        object.position.z = 4.5;
        object.rotation.y = Math.PI / 2;

        object.scale.set(1.4, 1.4, 1.4);
        scene.children[14] = object;
        console.log(scene.children);
    });
});
