
function LinearSearch(array,num)
{
    for(const it of array)
    {
        if(it===num)
        return 1;
    }
    return 0;
}

export default LinearSearch;