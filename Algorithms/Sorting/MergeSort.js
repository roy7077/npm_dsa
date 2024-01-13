
function merge(arr,s,e)
{
    let mid=Math.floor((s+e)/2);
    let i=s;
    let j=mid+1;

    let temp_array=[];
    while(i<=mid && j<=e)
    {
        if(arr[i]<arr[j])
        {
            temp_array.push(arr[i]);
            i++;
        }
        else
        {
            temp_array.push(arr[j]);
            j++;
        }
    }

    while(i<=mid)
    {
        temp_array.push(arr[i]);
        i++;
    }

    while(j<=e)
    {
        temp_array.push(arr[j]);
        j++;
    }

    i=s;
    for(i=s;i<=e;i++)
    {
        arr[i]=temp_array[i-s];
    }
}

function sort(arr,i,j)
{
    if(i>=j)
    return ;

    let mid=Math.floor((i+j)/2);
    sort(arr,i,mid);
    sort(arr,mid+1,j);
    merge(arr,i,j);
}

function MergeSort(arr)
{
    let len=arr.length;
    sort(arr,0,len-1);
}

export default MergeSort;