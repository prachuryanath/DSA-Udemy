function compressBoxesTwice(boxes1,boxes2) {
    boxes1.forEach(function(boxes){
        console.log(boxes);     //O(a)
    });

    boxes2.forEach(function(boxes){
        console.log(boxes);     //O(b)
    });
}

//O(a+b)

function compressBoxesTwice(boxes1,boxes2) {
    boxes1.forEach(function(boxes){
        console.log(boxes);    

        boxes2.forEach(function(boxes){
            console.log(boxes);   
        }); 
    });
}

//O(a*b)