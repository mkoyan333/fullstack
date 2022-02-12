let _data = [
    {
        "k1": "v1",
        "k2": ["1","11"]
    },
    {
        "k2": {
            "kk2": [2,22]
        }
    }
]


// write
_data[0].k2 = [1,11,111]

// read
console.log(_data[0].k2)
console.log(_data[0].k2.length)

for (let i = 0; i < _data.length; i++) {
    console.log(_data[i].k2)
}