rect1 = [[0, 0], [8, 0], [8, 8], [0, 8]]
rect2 = [[-5, 0], [5, 0], [4, 5], [-5, 4]]

function checkRectOverlap(rect1, rect2) {
    
    if ((rect1[0][0] < rect2[0][0] && rect2[0][0] < rect1[1][0]) 
        || (rect1[0][0] < rect2[1][0] && rect2[1][0] < rect1[1][0])
        || (rect2[0][0] < rect1[0][0] && rect1[1][0] < rect2[1][0])) {  
        
        if ((rect1[0][1] < rect2[0][1] && rect2[0][1] < rect1[1][1]) 
            || (rect1[0][1] < rect2[1][1] && rect2[1][1] < rect1[1][1]) 
            || (rect2[0][1] < rect1[0][1] && rect1[1][1] < rect2[1][1])) { 
            return true;
        }
    }
    return false;
}
//1.durum
console.log(checkRectOverlap(rect1, rect2))


//3.durum
rect3 = [[0, 0], [8, 0], [8, 8], [0, 8]]
rect4 = [[-1,0], [1,0], [2, 1], [-1, 1]]

console.log(checkRectOverlap(rect3, rect4))

//4.durum
rect5 = [[-5,-1], [-5, 2], [-7, 2], [-7, -1]]
rect6 = [[-6,1], [-4,0], [-2, 1], [1, -6]]

console.log(checkRectOverlap(rect5, rect6))
