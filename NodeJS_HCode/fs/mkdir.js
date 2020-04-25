const fs = require('fs')

//creating a code that creates folders 
//pre-established by me in a project structure

const assets = ['css','js', 'imgs', 'fonts', 'lib']

function make(dirName) {
    dirName.forEach(item => {
        fs.mkdir(`project/assets/${item}` ,{recursive: true}, (err, data) => { //with the recursive in true it is possible to create sub directories
            if(err) throw err
            data = 'Successfully Created Directory'
            console.log(`${data}:${item}`)
        })
    });
}

make(assets)
