function verificar() {
    var data = new Date();    
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[Erro] Verifique os dados e tente novamente!");
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 5){
                img.setAttribute('src', 'bebe.png');
            }else if (idade < 21){
                img.setAttribute('src', 'crianca_h.png');
            }else if (idade < 50){
                img.setAttribute('src', 'adulto_h.png');
            } else{
                img.setAttribute('src', 'velho.png');
            }
        }else if (fsex[1].checked){
            genero = "Mulher";
            if(idade >= 0 && idade < 5){                
                img.setAttribute('src', 'bebe.png');
            }else if (idade < 21){                
                img.setAttribute('src', 'crianca_m.png');
            }else if (idade < 50){
                img.setAttribute('src', 'adulta_m.png');
            } else{                
                img.setAttribute('src', 'velha.png');
            }
        }
        res.style.textAling = 'center';
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`;  
        res.appendChild(img);      

    }
}