let matrix = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
let cSum = [0,0,0,]            
for(let c=0;c<3;c++){
for(let r=0;r<3;r++){
cSum[c] = cSum[c] + matrix[r][c] 
}
}  

for(let i=0;i<3;i++){
console.log("coloum"+(i+1)+cSum[i])
}