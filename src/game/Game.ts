import { View } from "./view";
import { Geometry, Vector3 } from "Three";
import * as THREE from 'Three'; 
import { Shape } from "./Shape";
import { Cell } from "./Cell";

export class Game{
  view=new View();
  GameWidth=100;
  GameHeight=480;
  constructor(){
    this.initGame();
  }
  initGame(){
    this.createGameWindow();
  }
  startGame(){
    let cell=new Cell(0xff0000);
    cell.createCell();
    this.view.addObj(cell.Cell);
  }
  createGameWindow(){
    let geo=new Geometry();
    geo.vertices.push(
      new Vector3(-this.GameWidth/2-22,this.GameHeight/2),
      new Vector3(this.GameWidth/2-22,this.GameHeight/2),
      new Vector3(this.GameWidth/2-22,-this.GameHeight/2),
      new Vector3(-this.GameWidth/2-22,-this.GameHeight/2),
      new Vector3(-this.GameWidth/2-22,this.GameHeight/2)
    )
    let mat=new THREE.LineBasicMaterial({
      color:0xff00ff
    })
    let line=new THREE.Line(geo,mat);
    this.view.addObj(line);
  }
}