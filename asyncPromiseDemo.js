let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
    
});

let myPromiseReject = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myReject('I think we should just be friends. Its not you, its me.'); }, 5000);
});
  
myPromise.then(
    function(value) {
        console.log(value);
    },
    function (error) {
        console.error(error);
    }
);

myPromiseReject.then(
    function(value) {
        console.log(value);
    },
    function (error) {
        console.error(error);
    }
);