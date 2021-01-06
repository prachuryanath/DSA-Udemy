const nemo = ['nemo'];

const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank']
const large = new Array(100000).fill("nemo");

function findNemo(array) {
    for (let i=0;i<array.length;i++) {
        if(array[i] === 'nemo') {
            console.log("Found Nemo !");
            break;
        }
    }
}
findNemo(large); // O(n) -> Linear (for loops, while loops through n items)

const findNemo2 = array =>{
    array.forEach(fish=> {
        if(fish==='nemo') {
            console.log('Found NEMO!');
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if(fish==='nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo2(everyone);
findNemo3(everyone);