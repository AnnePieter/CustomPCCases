/**
 * Created by annepieter on 27/10/2016.
 */
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'models/ThreeJs/Stock/' );

/** Side panels **/

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
        scene.add( object );
    } );});

mtlLoader.load( 'Aperture.mtl', function( aperture ) {
    aperture.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(aperture);
    loader.load( 'Aperture.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'deadpool.mtl', function( deadpool ) {
    deadpool.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(deadpool);
    loader.load( 'deadpool.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'leeg.mtl', function( leeg ) {
    leeg.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(leeg);
    loader.load( 'leeg.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'MSI.mtl', function( MSI ) {
    MSI.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(MSI);
    loader.load( 'MSI.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'nvidia.mtl', function( nvidia ) {
    nvidia.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(nvidia);
    loader.load( 'nvidia.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'Overwatch.mtl', function( Overwatch ) {
    Overwatch.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(Overwatch);
    loader.load( 'Overwatch.obj', function ( object ) {
        scene.add( object );
    } );});


mtlLoader.load( 'VSWit.mtl', function( VSWit ) {
    VSWit.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(VSWit);
    loader.load( 'VSWit.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'VSZwart.mtl', function( VSZwart ) {
    VSZwart.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJs/Stock/' );
    loader.setMaterials(VSZwart);
    loader.load( 'VSZwart.obj', function ( object ) {
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


