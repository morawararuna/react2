let a=[11,56,78,54,3,6,3,9,1]
let b=[56,94,6] 
let isSubset = true
for(let i=0;i<b.length;i++){
    let gotValue = false
    for(let j=0;j<a.length;j++){
     if(b[i] == a[j])
      gotValue = true;
    }
    if(gotValue == false)  {
        isSubset = false
        break
    }
}

if(isSubset == true) 
console.log("Yes it is Sub Set")
else console.log("No it is  Not Sub Set")