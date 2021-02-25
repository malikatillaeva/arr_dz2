let arr = ['A', 'E', 'Y', 'I', 'O', 'U', 'a', 'e', 'y', 'i', 'o', 'u']

function vowels(str) {
    console.log(str);
    let l = 0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j <arr.length; j++){
            if(str[i] == arr[j])
            l++;   
        }     
    }
    return l; 
}

