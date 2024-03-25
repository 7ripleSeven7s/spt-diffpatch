const arraySample = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

/**
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * @param {number[][]} arr
 * @return {number}
 */
function hourglassSum(arr) {
  // 2D array representing the 16 hourglass possible positions
  let hourglassLoc2D = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ];
  // Storage variable for largest hourglass sum out of 16 subtotals.
  //   if (newSum > highestSum) { highestSum = newSum }
  let highestSum = 0;

  // 6 x 6 array
  /*   for (let row of arr) {
    for (let col of row) {

    }
  } */

  for (let j = 1; j <= 4; j++) {
    /* let newSum =
    arr[j-1][j-1] + arr[j-1][j] + arr[j-1][j+1]
              + arr[j][j] +
    arr[j+1][j-1] + arr[j+1][j] + arr[j+1][j+1]; */
    console.log(newSum);
    if (newSum > highestSum) {
      highestSum = newSum;
      console.log("new high ", highestSum);
    }
  }
  return highestSum;

  // max hourglass value
  /*
      0 1 2 3 4 5
    +------------
    0| 1 1 1 0 0 0 
    1| 0 1 0 0 0 0
    2| 1 1 1 0 0 0
    3| 0 0 2 4 4 0
    4| 0 0 0 2 0 0
    5| 0 0 1 2 4 0 
    -------------
    Every hourglass set-indice shifts 4-right and 4-down

    center blocks
    -----------------------
    [1,1] [1,2] [1,3] [1,4]
    
    [2,1] [2,2] [2,3] [2,4]
    
    [3,1] [3,2] [3,3] [3,4]
    
    [4,1] [4,2] [4,3] [4,4]
    -----------------------

    1 1 1    [0,0] [0,1] [0,2]    y0 : x0-2
      1            [1,1]          y1 : x1
    1 1 1    [2,0] [2,1] [2,2]    y2 : x0-2

    */
}

hourglassSum(arraySample);
