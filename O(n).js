const nemo = ['nemo'];

const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank']
const large = new Array(100000).fill("nemo");

function findNemo(array) {
    for (let i=0;i<array.length;i++) {
        if(array[i] === 'nemo') {
            console.log("Found Nemo !");
        }
    }
}
findNemo(large); // O(n) -> Linear (for loops, while loops through n items)