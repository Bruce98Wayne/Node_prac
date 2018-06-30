var rect = require('./Export_file')
rect(10,20, (err, rectangle) => {
    if(err)
    console.log(err.message)

    else
        console.log(rectangle.Area())
} )
console.log("After Callback!");