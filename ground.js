class Ground{
    constructor(x,y,w,h){
        this.body= Bodies.rectangle(x,y,w,h,{isStatic:true})
        this.w=w
        this.h=h
        World.add(world,this.body)

            }
            show(){
                push ()
                rectMode(CENTER)
                fill (148,127,146)
                rect (this.body.position.x,this.body.position.y,this.w,this.h)
                pop ()
            }
}