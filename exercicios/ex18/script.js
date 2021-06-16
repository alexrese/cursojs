function tabuada(){
    let n = document.getElementById('txtn');    
    let tab = document.getElementById('seltab');
    if(n.value.legth == 0){
        alert('Por favor! Digite um número!');
    }else{
        n = Number(n.value);
        let c = 1;
        tab.innerHTML="";
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item);
            c++
        }
    }

}