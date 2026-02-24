function getData()
{
    return new Promise(resolve=>
    {
        resolve("Data");
    }
    );
}


getData().then(d=>console.log(d));
