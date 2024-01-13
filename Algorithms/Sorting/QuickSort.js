function partition(arr , low, high)
{
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) 
    {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        
        if (i < j) 
        {
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    }
    let temp=arr[j];
    arr[j]=arr[low];
    arr[low]=temp;
    return j;
}


function sort(arr, low, high)
{
    //base case
    if(low>=high)
    return ;
    
    let p=partition(arr,low,high);
    sort(arr,low,p-1);
    sort(arr,p+1,high);
}

function QuickSort(arr)
{
    let len=arr.length;
    sort(arr,0,len-1);
}

export default QuickSort;