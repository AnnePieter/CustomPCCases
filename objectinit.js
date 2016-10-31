/**
 * Created by annepieter on 27/10/2016.
 */
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'models/ThreeJS/' );

/** Side panels **/

mtlLoader.load( 'windowSide.mtl', function( windowSide ) {
    windowSide.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(windowSide);
    loader.load( 'windowSide.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'windowlessSide.mtl', function( windowless ) {
    windowless.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(windowless);
    loader.load( 'windowlessSide.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'windowTintedSide.mtl', function( windowTinted ) {
    windowTinted.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(windowTinted);
    loader.load( 'windowTintedSide.obj', function ( object ) {
        scene.add( object );
    } );});

/** Front panels **/

mtlLoader.load( 'alienware.mtl', function( alienware ) {
    alienware.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(alienware);
    loader.load( 'alienware.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'Aperture.mtl', function( aperture ) {
    aperture.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(aperture);
    loader.load( 'Aperture.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'deadpool.mtl', function( deadpool ) {
    deadpool.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(deadpool);
    loader.load( 'deadpool.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'leeg.mtl', function( leeg ) {
    leeg.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(leeg);
    loader.load( 'leeg.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'MSI.mtl', function( MSI ) {
    MSI.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(MSI);
    loader.load( 'MSI.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'nvidia.mtl', function( nvidia ) {
    nvidia.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(nvidia);
    loader.load( 'nvidia.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'Overwatch.mtl', function( Overwatch ) {
    Overwatch.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(Overwatch);
    loader.load( 'Overwatch.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'razer.mtl', function( razer ) {
    razer.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(razer);
    loader.load( 'razer.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'VSWit.mtl', function( VSWit ) {
    VSWit.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(VSWit);
    loader.load( 'VSWit.obj', function ( object ) {
        scene.add( object );
    } );});

mtlLoader.load( 'VSZwart.mtl', function( VSZwart ) {
    VSZwart.preload();
    var loader = new THREE.OBJLoader();
    loader.setPath( 'models/ThreeJS/' );
    loader.setMaterials(VSZwart);
    loader.load( 'VSZwart.obj', function ( object ) {
        scene.add( object );
    } );});
