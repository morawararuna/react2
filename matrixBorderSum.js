let matrix = [ 
    [1,2,3,4,5],
    [4,5,6,7,8],
    [7,8,9,1,2],
    [1,2,3,4,5],
    [6,7,8,9,1]
  ]
  let cSum = [0,0,0,0,0]  
for(let c=0;c<5;c++ ){
for(let r=0;r<5;r++ ){
cSum[c] = cSum[c] + matrix[r][c]}
console.log(cSum[c])
break

}
let c1Sum = [0,0,0,0,0]  
for(let c=0;c<5;c++ ){
for(let r=0;r<5;r++ ){
c1Sum[c] = c1Sum[c] + matrix[c][r]}
console.log(c1Sum[c])
break
}
let c2Sum = [0,0,0,0,0]  
for(let c=4;c<5;c++ ){
for(let r=0;r<5;r++ ){
c2Sum[c] = c2Sum[c] + matrix[c][r]}
console.log(c2Sum[c])
break
}
let c3Sum = [0,0,0,0,0]  
for(let c=4;c<5;c++ ){
for(let r=0;r<5;r++ ){
c3Sum[c] = c3Sum[c] + matrix[r][c]}
console.log(c3Sum[c])
break

}

