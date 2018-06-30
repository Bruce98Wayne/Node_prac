module.exports = (x,y,cb) => {
    console.log("Before Timeout")
    if(x<=0 || y<=0){
        setTimeout(() => cb(new Error("Area cannot be computed!"), null)
            , 2000)
    }

    else{
        setTimeout(() => cb
            (null, {Area: () => (x*y)}),
            2000)
    }
}