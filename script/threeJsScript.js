//################################
//Alap dolgok kirajzoltatása
//Scene létrehozása
const scene = new THREE.Scene();

//Kmaera beállítások
const camera = new THREE.PerspectiveCamera(50,1/1);
camera.position.z = 30;
camera.position.y = 10;
camera.position.x = 15;
camera.rotateY(1/2);
camera.rotateX(-1/4);

//Fények
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(2,2,5);
scene.add( light);

const light2 = new THREE.DirectionalLight( 0xf0f0f0, 1);
light2.position.set( 5, 11.28, 7.5);
scene.add( light2 );



let modell;
//Modell Betöltő

        const loader = new THREE.GLTFLoader();


        loader.load( 'assets/3d_assets/house.gltf', function ( gltf ) {
            modell = gltf.scene;
            modell.rotateY(-1/1.9);
            scene.add( modell );


        }, undefined, function ( error ) {

            console.error( error );

        } );


// Canvas
const canvas = document.querySelector('canvas.webgl')


//Renderer létrehozása
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

//SkyBox
const loader2 = new THREE.TextureLoader();
const bgTexture = loader2.load('assets/img/skybox.jpg');
scene.background = bgTexture;


//Cavas Újraméterezése

renderer.setSize(700, 700);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


const canvasAspect = canvas.clientWidth / canvas.clientHeight;
const imageAspect = bgTexture.image ? bgTexture.image.width / bgTexture.image.height : 1;
const aspect = imageAspect / canvasAspect;

bgTexture.offset.x = aspect > 1 ? (1 - 1 / aspect) / 2 : 0;
bgTexture.repeat.x = aspect > 1 ? 1 / aspect : 1;

bgTexture.offset.y = aspect > 1 ? 0 : (1 - aspect) / 2;
bgTexture.repeat.y = aspect > 1 ? 1 : aspect;


//################################

renderer.render(scene, camera);


let change=0;
//################################
//Loop függvény
function animate(){
    renderer.render(scene, camera);

    change += 0.01;

    if(modell){
        modell.rotation.y += (0.01 * Math.sin(change)) ;
    }
    requestAnimationFrame(animate);
}

animate();