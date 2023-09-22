var searchMatrix = function(matrix, target) {

    //Think about this as one long array length m * n

    //Get dimensions
    let numRow = matrix.length;
    let rowLength = matrix[0].length;


    let left = 0;
    let right = numRow * rowLength - 1;

    while(left <= right){
        let mid = Math.floor((right + left) / 2);
        

        //convert our mid 'index' into coordinates in matrix
        let rowPos =  Math.floor(mid / rowLength);
        let colPos =  mid % rowLength;

        //then standard binary search
        let val = matrix[rowPos][colPos];
        
        if( val < target){
            left = mid + 1;
        } 
        else if(val > target){
            right = mid - 1;
        }
        else{
            return true;
        }
    }

    return false;

};
