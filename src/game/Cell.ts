import { Vector3, CubeGeometry, Mesh, MeshBasicMaterial, BoxGeometry } from "Three";

export class Cell{
  private pos:Vector3;
  private color:number;
  private width:number=12;
  private height:number=12;
  constructor(color:number){
    this.color=color;
  }
  createCell(){
    let geo=new BoxGeometry(this.width,this.height,1);
    let mat=new MeshBasicMaterial({
      color:this.color
    })
    return new Mesh(geo,mat);
  }
}

