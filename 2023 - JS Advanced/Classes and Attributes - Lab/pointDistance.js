class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance(pointA,pointB){
        let distanceX = pointA.x - pointB.x;

        let distanceY = pointA.y - pointB.y;

        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        return distance;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));