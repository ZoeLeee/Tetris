import { Vector3, CubeGeometry, Mesh, MeshBasicMaterial, BoxGeometry } from "Three";

export class Cell{
  private pos:Vector3=new Vector3(-66,228);
  private color:number;
  private width:number=12;
  private height:number=24;
  private m_Cell:Mesh;
  constructor(color:number){
    this.color=color;
    let timeId=setInterval(()=>{
      this.drop();
      if(this.pos.y<=-228)
        clearInterval(timeId);
    },10)
    this.registeEvent();
  }
  registeEvent(){
    document.addEventListener("keydown",(e)=>{
      e.preventDefault();
      switch(e.code){
        case "ArrowLeft":
          this.moveleft();
          break;
        case "ArrowRight":
          this.moveRight();
          break;
      }
    })
  }
  createCell(){
    let geo=new BoxGeometry(this.width,this.height,1);
    let mat=new MeshBasicMaterial({
      color:this.color
    })
    this.m_Cell=new Mesh(geo,mat);
    this.m_Cell.position.copy(this.pos);
  }
  get Cell(){
    return this.m_Cell||new Mesh();
  }
  drop(){
    let y=this.pos.y;
    y-=1;
    this.pos.setY(y);
    this.m_Cell.position.copy(this.pos);
  }
  moveleft(){
    let x=this.pos.x;
    x--
    this.pos.setX(x);
    this.m_Cell.position.copy(this.pos);
  }
  moveRight(){
    let x=this.pos.x;
    x++;
    this.pos.setX(x);
    this.m_Cell.position.copy(this.pos);
  }
}

