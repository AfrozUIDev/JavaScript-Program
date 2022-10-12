//[[1, 2], [3, 4],[5, [6, [7, 8], 9]], [10, 11, 12],] write code to flatten this using for loop
//[[1, 2], [3, 4],[5, [6, [7, 8], 9]], [10, 11, 12],] write code to flatten this using for loop


var arr = [[1, 2], [3, 4],[5, [6, [7, 8], 9]], [10, 11, 12],];
// var arr = [ 1, 2, 3, 4, 5, [ 6, [ 7, 8 ], 9 ], 10, 11, 12 ];
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (Array.isArray(arr[i][j])) {
                        for (var k = 0; k < arr[i][j].length; k++) {
                            result.push(arr[i][j][k]);
                        }
                    } else {
                        result.push(arr[i][j]);
                    }
                }
            } else {
                result.push(arr[i]);
            }
        }
        console.log(result);







