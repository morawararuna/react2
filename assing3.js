input=[1,1,1,2,2]
//output=1
let x
x=input.length/2
let count=0
for(i=0;i<input.length;i++){
    for(j=i+1;j<input.length;j++){
if(input[i]==input[j]){
    count++

    }
}

if(count>x)
{
    console.log(input[i])
    break
    
} 
}

