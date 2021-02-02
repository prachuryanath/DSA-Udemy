let user = {
    age : 54,
    name : 'Kylie',
    magic : true,
    scream : function() {
        console.log('ahhhhhhh !');
    }
}

console.log(user.age)    //O(1)
user.spell = 'abra kadabra';    //O(1)
user.scream();

//O(n/k) = O(n)  -> Collision 

const a = new Map()
const b = new Set()