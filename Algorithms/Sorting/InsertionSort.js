
function InsertionSort(arr)
{
    let n=arr.length;
    for(let i=1;i<n;i++)
    {
        let j=i-1;
        let key=arr[i];
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }
        j++;
        arr[j]=key;
    }
}

export default InsertionSort;