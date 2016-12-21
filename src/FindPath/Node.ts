class Pnode extends Locations {
//声明构造	
	F:number;
	G:number;
	H:number;
	walkable:Boolean = true;
	parent:Pnode;//父节点
	costMultipier = 1;//消耗

	constructor(x:number,y:number) {
		super(x,y);
	}//构造函数
}