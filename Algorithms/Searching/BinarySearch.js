
function BinarySearch(arr,num)
{
    let i=0;
    let j=arr.length-1;
    while(i<=j)
    {
        
        let mid=Math.floor((i+j)/2);
        if(arr[mid]===num)
        return 1;
        else if(num>arr[mid])
        i=mid+1;
        else
        j=mid-1;
    }
    return 0;
}

export default BinarySearch;