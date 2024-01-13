
function SelectionSort(arr)
{
    let n=arr.length;
    for(let i=0;i<n;i++)
    {
        let min=arr[i];
        let ind=i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<min)
            {
                min=arr[j];
                ind=j;
            }
        }

        if(min<arr[i])
        {
            let temp=arr[i];
            arr[i]=min;
            arr[ind]=temp;
        }
    }
}

export default SelectionSort;