async function add()
{
    return 5;
}
const x= add();
console.log(x);

//Op: Promise {5}. This is because async always returns a promise, this promise contains a value.



//this value can be fetched in two ways
//1) .then()
//2) await ket word.
