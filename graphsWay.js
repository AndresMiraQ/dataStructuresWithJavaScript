/* 
 How to represent grabhs in code?
   2 - 0
  / \
 1 - 3 
*/
//First way: Edge list

const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1,3]
];

//Second way: Adjacent list
//              0     1       2       3
const graph = [[2], [2,3], [0,1,3], [1,2]];

const graph = {
    0: [2],
    1: [2,3],
    2: [0,1,3],
    3: [1,2],
};

//third way: Adjacent matrix

const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0],
];

const graph = {
   0: [0,0,1,0],
   1: [0,0,1,1],
   2: [1,1,0,1],
   3: [0,1,1,0],
};