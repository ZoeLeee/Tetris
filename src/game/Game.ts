import { View } from "./view";
import { Geometry, Vector3 } from "Three";
import * as THREE from 'Three'; 
import { Shape } from "./Shape";

export class Game{
  view=new View();
  private GameWidth=240;
  private GameHeight=480;
  constructor(){
    this.initGame();
  }
  initGame(){
    this.createGameWindow();
  }
  startGame(){
    let shape=new Shape(new Vector3(-100,200))
    this.view.addObj(shape.Cells);

    setInterval(()=>{
      shape.drop();
      this.view.update();
    },100);
  }
  createGameWindow(){
    let geo=new Geometry();
    geo.vertices.push(
      new Vector3(-this.GameWidth/2,this.GameHeight/2),
      new Vector3(this.GameWidth/2,this.GameHeight/2),
      new Vector3(this.GameWidth/2,-this.GameHeight/2),
      new Vector3(-this.GameWidth/2,-this.GameHeight/2),
      new Vector3(-this.GameWidth/2,this.GameHeight/2)
    )
    let mat=new THREE.LineBasicMaterial({
      color:0x0000ff
    })
    let line=new THREE.Line(geo,mat);
    this.view.addObj(line);
  }
}