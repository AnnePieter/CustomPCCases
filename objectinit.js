/**
 * Created by annepieter on 27/10/2016.
 */


/** Side panels **/
function Frontpanelpush(){
    arr.push("alienware");
    arr.push("aperture");
    arr.push("deadpool");
    arr.push("leeg");
    arr.push("MSI");
    arr.push("nvidia");
    arr.push("Overwatch");
    arr.push("VSWit");
    arr.push("VSZwart");
    arr.push("FrontTextureable");
}
/*mtlLoader.load( 'windowSide.mtl', function( windowSide ) {
    windowSide.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(windowSide);
    loader.load( 'windowSide.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'windowlessSide.mtl', function( windowless ) {
    windowless.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(windowless);
    loader.load( 'windowlessSide.obj', function ( object ) {
        scene.add( object );
    } );});*/

    /** Front panels **/

/*mtlLoader.load( 'alienware.mtl', function( alienware ) {

    alienware.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(alienware);
    loader.load( 'alienware.obj', function ( object ) {
        object.visible = false;
        scene.add( object);
    } );});

mtlLoader.load( 'Aperture.mtl', function( aperture ) {
    aperture.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(aperture);
    loader.load( 'Aperture.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

mtlLoader.load( 'deadpool.mtl', function( deadpool ) {
    deadpool.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(deadpool);
    loader.load( 'deadpool.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

mtlLoader.load( 'leeg.mtl', function( leeg ) {
    leeg.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(leeg);
    loader.load( 'leeg.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

mtlLoader.load( 'MSI.mtl', function( MSI ) {
    MSI.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(MSI);
    loader.load( 'MSI.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

mtlLoader.load( 'nvidia.mtl', function( nvidia ) {
    nvidia.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(nvidia);
    loader.load( 'nvidia.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

    mtlLoader.load('Overwatch.mtl', function (Overwatch) {
        Overwatch.preload();
        var loader = new THREE.OBJLoader();
        loader.setPath('models/ThreeJs/Stock/');
        loader.setMaterials(Overwatch);
        loader.load('Overwatch.obj', function (object) {
            object.visible = false;
            scene.add(object);
        });
    });


mtlLoader.load( 'VSWit.mtl', function( VSWit ) {
    VSWit.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(VSWit);
    loader.load( 'VSWit.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});

mtlLoader.load( 'VSZwart.mtl', function( VSZwart ) {
    VSZwart.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(VSZwart);
    loader.load( 'VSZwart.obj', function ( object ) {
        object.visible = false;
        scene.add( object );
    } );});*/

/** custom **/

var jsonloader = new THREE.ObjectLoader();
jsonloader.load('models/ThreeJS/Customizable/BottomPootjes.json', function(bottom){
    bottom.traverse((function (child) {
        if(child instanceof THREE.Mesh)
        {
            child.material = material;
        }
    }));
    scene.add(bottom);
});
jsonloader.load('models/ThreeJS/Customizable/Top.json', function(top){
    top.traverse((function (child) {
        if(child instanceof THREE.Mesh)
        {
            child.material = material;
        }
    }));
    top.position.y = 4.1;
    scene.add(top);
});

jsonloader.load('models/ThreeJS/Customizable/Back.json', function(back){
    back.traverse((function (child) {
        if(child instanceof THREE.Mesh)
        {
            child.material = material;
        }
    }));
    back.position.x = -1.95;
    back.position.y = 2.05;
    scene.add(back);
});

jsonloader.load('models/ThreeJS/Customizable/window.json', function(window){
    window.traverse((function (child) {
        if(child instanceof THREE.Mesh)
        {
            child.material = material;
        }
    }));
    window.position.z = 0.95;
    window.position.y = 2.05;
    scene.add(window);
});

jsonloader.load('models/ThreeJS/Customizable/windowless.json', function(windowless){
    windowless.traverse((function (child) {
        if(child instanceof THREE.Mesh)
        {
            child.material = material;
        }
    }));
    windowless.position.z = -0.95;
    windowless.position.y = 2.05;
    scene.add(windowless);
});






//var jsonloader = new THREE.ObjectLoader();
  //  var mesh = jsonloader.load('models/ThreeJS/Customizable/Front1.json');
 //   scene.add(mesh);

