function receivesAFunction(spy) {
    return spy();
}

 
function returnsANamedFunction (spy) {
     return function spy() {
        const fn = returnsANamedFunction() 
     }
}

function returnsAnAnonymousFunction() {
    return function() {
        const fn = returnsAnAnonymousFunction()
    }
}