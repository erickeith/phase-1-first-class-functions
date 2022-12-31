function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    function returnFunction() {return 'return';};
    return returnFunction
}

function returnsAnAnonymousFunction() {

    return function() {console.log('')};
}