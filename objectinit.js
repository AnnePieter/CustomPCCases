/**
 * Created by annepieter on 27/10/2016.
 */
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( 'js/' );
mtlLoader.load( 'MSI.mtl', function( materials1 ) {
    materials1.preload();
    var loader = new THREE.OBJLoader();
    loader.setMaterials(materials1);
    loader.load( 'js/MSI.obj', function ( object ) {
        scene.add( object );
    } );});