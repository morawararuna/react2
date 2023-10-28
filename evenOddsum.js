let num=2429
evensum=0
oddsum=0
while(num!=0)
{
r=num%10
if(r%2==0)
{

    evensum=evensum+r

}
else {
    oddsum=oddsum+r
    
}
num=num/10;
    num=parseInt(num,10)

}

console.log(evensum)
console.log(oddsum)


