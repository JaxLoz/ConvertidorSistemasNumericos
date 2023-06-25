function default_conver (){
    let input_value = parseInt(document.getElementById('input-Num').value);
    let out_value = document.getElementById('out-Num');
    out_value.value=input_value;
}

function convertir_DEC_BIN (){
    
    let input_value = parseInt(document.getElementById('input-Num').value);
    
    let convetidoBIN = input_value.toString(2);
    
    let out_value = document.getElementById('out-Num');

    out_value.value=convetidoBIN;

}

function convertir_DEC_OCT (){
    let input_value = parseInt(document.getElementById('input-Num').value);
    let convertirOCT = input_value.toString(8);
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirOCT;

}

function convertir_DEC_HEX (){
    let input_value = parseInt(document.getElementById('input-Num').value);
    let convertirHEX = input_value.toString(16).toUpperCase();
    let out_vale = document.getElementById('out-Num');
    out_vale.value=convertirHEX;
}

function convertir_BIN_DEC (){
    let input_value = document.getElementById('input-Num').value;
    let convetirDEC = parseInt(input_value,2);
    let out_vale = document.getElementById('out-Num');
    out_vale.value=convetirDEC;
}

function converti_BIN_OCT (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,2);
    let convertirOCT = DEC_value.toString(8);
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirOCT;
}

function convertirn_BIN_HEX (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,2);
    let convertirOCT = DEC_value.toString(16).toUpperCase();
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirOCT;
}

function convertir_OCT_DEC (){
    let input_value = document.getElementById('input-Num').value;
    let convetirDEC = parseInt(input_value,8);
    let out_vale = document.getElementById('out-Num');
    out_vale.value=convetirDEC;
}

function convertir_OCT_BIN (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,8);
    let convertirBIN = DEC_value.toString(2);
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirBIN;
}

function convertir_OCT_HEX (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,8);
    let convertirHEX = DEC_value.toString(16).toUpperCase();
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirHEX;
}

function convertir_HEX_DEC(){
    let input_value = document.getElementById('input-Num').value;
    let convertirDECH= parseInt(input_value,16);
    let out_vale = document.getElementById('out-Num');
    out_vale.value=convertirDECH;
}

function converti_HEX_BIN (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,16);
    let convertirHEX = DEC_value.toString(2).toUpperCase();
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirHEX;
}

function convertir_HEX_OCT (){
    let input_value = document.getElementById('input-Num').value;
    let DEC_value = parseInt(input_value,16);
    let convertirOCTH = DEC_value.toString(8).toUpperCase();
    let out_value = document.getElementById('out-Num');
    out_value.value=convertirOCTH;
}

function convertir (){

    let opcion_input = 'DEC'; // valor por defecto para la primera opcion

     //Obtener valores de los dos select 
      opcion_input = document.getElementById('sel-input').value;
     let opcion_out = document.getElementById('sel-out').value;

     if(opcion_input === 'DEC' && opcion_out === 'BIN'){
        convertir_DEC_BIN();
     }else if (opcion_input === 'DEC' && opcion_out === 'OCT'){
        convertir_DEC_OCT();
     }else if(opcion_input === 'DEC' && opcion_out === 'HEX'){
        convertir_DEC_HEX();
     
    }else if(opcion_input === 'BIN' && opcion_out === 'DEC'){
        convertir_BIN_DEC();
    
    }else if(opcion_input === 'BIN' && opcion_out === 'OCT'){
        converti_BIN_OCT();
    }else if (opcion_input === 'BIN' && opcion_out === 'HEX'){
        convertirn_BIN_HEX();
    }else if(opcion_input === 'OCT' && opcion_out === 'DEC'){
        convertir_OCT_DEC();
    }else if(opcion_input === 'OCT' && opcion_out === 'BIN'){
        convertir_OCT_BIN();
    }else if(opcion_input === 'OCT' && opcion_out === 'HEX'){
        convertir_OCT_HEX();
    }else if (opcion_input === 'HEX' && opcion_out === 'DEC'){
        convertir_HEX_DEC();
    }else if (opcion_input === 'HEX' && opcion_out === 'BIN'){
        converti_HEX_BIN();
    }else if (opcion_input === 'HEX' && opcion_out === 'OCT'){
        convertir_HEX_OCT();
    }
     
}



