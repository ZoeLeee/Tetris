import * as THREE from 'three'; 
import { Object3D, Vector3 } from 'three';


export class View{
  private SCREEN_WIDTH = 480;
  private SCREEN_HEIGHT = 960;
  private frustumSize = 600;
  private scene=new THREE.Scene();
  private camera:THREE.OrthographicCamera;
  private render:THREE.WebGLRenderer;
  private aspect:number;
  constructor(){
    this.initView();
  }
  addObj(obj:Object3D){
    this.scene.add(obj);
  }
  initView(){
    window.addEventListener('resize',this.onWindowResize)
    this.createCamera();
    this.createRender();
    this.animate();
  }
  createCamera(){
		this.aspect = this.SCREEN_WIDTH / this.SCREEN_HEIGHT;
    this.camera = new THREE.OrthographicCamera( 0.5 * this.frustumSize * this.aspect / - 2, 0.5 * this.frustumSize * this.aspect / 2, this.frustumSize / 2, this.frustumSize / - 2,0, 1000 );
    this.camera.position.z=5;
    this.scene.add(this.camera);
  }
  createRender(){
    this.render=new THREE.WebGLRenderer();
    this.render.setSize(this.SCREEN_WIDTH,this.SCREEN_HEIGHT);
    this.render.setClearColor(0xddddd);
    document.getElementById('app').appendChild(this.render.domElement);
  }
  animate=()=> {
    requestAnimationFrame( this.animate );
    this.render.render( this.scene, this.camera );
  }
  onWindowResize=()=> {
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;
    this.aspect = this.SCREEN_WIDTH /this.SCREEN_HEIGHT;
    this.render.setSize( this.SCREEN_WIDTH, this.SCREEN_HEIGHT );
    this.camera.updateProjectionMatrix();
    this.camera.left   = - 0.5 * this.frustumSize * this.aspect / 2;
    this.camera.right  =   0.5 * this.frustumSize * this.aspect / 2;
    this.camera.top    =   this.frustumSize / 2;
    this.camera.bottom = - this.frustumSize / 2;
    this.camera.updateProjectionMatrix();
    this.update();
  }
  update () {
    this.render.render( this.scene, this.camera );
  }
}