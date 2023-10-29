//first non repeating number
//Input: {-1, 2, -1, 3, 0}
//Output: 2
let num=[-1,2,-1,3,0]
for(let i=0;i<num.length;i++){
    let count=0
    for(let j=i+1;j<num.length;j++){
        if(num[i]==num[j])
        count++
    }
    if(count==0)
    {
        console.log(num[i])
        break
    }
    }
