
let words = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let add_excitement = (arr, punct) => {
    sentence = arr[0];
    console.log(sentence);
    added = punct;
    for (let i = 1; i < arr.length; i++){
        console.log(sentence);
        sentence += " " + arr[i];
        if ((i+1)%3 === 0){
            sentence += added;
            added += punct;
        }
        
    }
}

add_excitement(words, "?");