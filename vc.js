let arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
function bubble(a){
    for(let i=0; i<a.length-1; i++){
    	let flag = 0;
        for(let j=0; j<a.length-1-i; j++){
            if(a[j]>a[j+1]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                flag = 1;
            }
        }
        if(flag==0)
        	break;
    }
}

function selection(b){
	for(let i=0; i<b.length-1; i++){
		small = b[i];
		for(let j=i+1; j<b.length; j++){
			if(b[j]<small){
				const temp = b[j];
				b[j] = small;
				small = temp;
				b[i] = small;
			}
		}
	}
}

//bubble(arr);
selection(arr);
console.log(arr);