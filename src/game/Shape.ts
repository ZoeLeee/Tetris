import { Cell } from "./Cell";
import { Group, Vector3 } from "Three";

export class Shape{
  private cells:Group;
  constructor(pos:Vector3){
    this.cells=new Group();
    this.cells.add(new Cell(0x0000).createCell())
    this.cells.position.copy(pos);
  }
  get Cells(){
    return this.cells;
  }
  drop(){
    let y=this.cells.position.y;
    y-=10;
    this.cells.position.setY(y);
  }
}