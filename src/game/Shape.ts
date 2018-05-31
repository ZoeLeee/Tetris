import { Cell } from "./Cell";
import { Group, Vector3 } from "Three";

export class Shape{
  private cells:Group;
  constructor(pos:Vector3){
    this.cells=new Group();
    this.cells.position.copy(pos);
  }
  get Cells(){
    return this.cells;
  }

}