class Transform extends Component{
    x
    y
    r
    h

    get w(){
        return this.r
    }
    set w(value){
        this.r = value
    }

    get x2(){
        return this.r
    }

    get y2(){
        return this.h
    }

    set x2(value){
        this.r = value
    }

    set y2(value){
        this.h = value
    }
    
    get position(){
        return new Vector2(this.x, this.y)
    }
    
    set position(vector){
        this.x = vector.x
        this.y = vector.y
    }
    get scale(){
        return new Vector2(this.w, this.h)
    }

    set scale(vector){
        this.w = vector.x
        this.h = vector.y
    }
}