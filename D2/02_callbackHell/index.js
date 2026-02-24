setTimeout(()=>
{
    console.log("1");
    setTimeout(()=>
    {
        console.log("2");
        setTimeout(()=>
        {
            console.log("3");
        }, 1000);
    },1000);
}, 1000);


//This is nested Callback which is aka callback hell, this is very difficult to resolve.
