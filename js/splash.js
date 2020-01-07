"use strict";

var camera, scene, renderer, mesh, material, box, boxWireFrame, boxWireFrame2;

init();
animate();

function init() {
    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    
    var container = document.getElementById('canvas-container'); // get div by id to display canvas
    var w = container.offsetWidth;
    var h = container.offsetHeight;
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(70, w / h, 1, 1000);
    camera.position.z = 400;

    // Create scene.
    scene = new THREE.Scene();

    // Box One
    box = new THREE.Object3D();
    scene.add(box);
    var geom = new THREE.BoxGeometry(40, 40, 40);
    var mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide
    });

    var boxOne = new THREE.Mesh(geom, mat);
    boxOne.rotation.set(11, 4, Math.PI / 1);
    box.add(boxOne);

    // Box Two
    boxWireFrame = new THREE.Object3D();
    scene.add(boxWireFrame);
    var geom2 = new THREE.BoxGeometry(100, 100, 100);
    var mat2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide
    });

    var boxTwo = new THREE.Mesh(geom2, mat2);
    boxTwo.rotation.set(11, 4, Math.PI / 1);
    boxWireFrame.add(boxTwo);

    //Box Three
    boxWireFrame2 = new THREE.Object3D();
    scene.add(boxWireFrame2);
    var geom3 = new THREE.BoxGeometry(200, 200, 200);
    var mat3 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide
    });

    var boxThree = new THREE.Mesh(geom3, mat3);
    boxThree.rotation.set(10, 4, Math.PI / 1);
    boxWireFrame2.add(boxThree);

  // Add lights to scene
  var ambientLight = new THREE.AmbientLight(0x999999 );
  scene.add(ambientLight);

  var lights = [];
    lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    lights[0].position.set( 1, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    lights[1].position.set( 0.75, 1, 0.5 );
    lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    lights[2].position.set( -0.75, -1, 0.5 );
    scene.add( lights[0] );
    scene.add( lights[1] );
    scene.add( lights[2] ); 
}

// animation
function animate() {
    requestAnimationFrame(animate);
    box.rotation.x += 0.003;
    box.rotation.y += 0.002;

    boxWireFrame.rotation.x += 0.004;
    boxWireFrame.rotation.y += 0.003;

    boxWireFrame2.rotation.x += 0.003;
    boxWireFrame2.rotation.y += 0.002;
    renderer.render(scene, camera);
}
