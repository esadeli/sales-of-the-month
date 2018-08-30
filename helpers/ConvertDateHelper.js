'use strict'

function ConvertDateHelper(str){
    
    // input should DD-MM-YYYY
    let birthdate = str.split('-');
    
    let month = birthdate[1];

    switch (month) {
        case '01':
            birthdate[1] = 'Januari'
            break;

        case '02':
            birthdate[1] = 'Februari'
            break;    

        case '03':
            birthdate[1] = 'Maret'
            break;        
    
        case '04':
            birthdate[1] = 'April'
            break;    

        case '05':
            birthdate[1] = 'Mei'
            break;    

        case '06':
            birthdate[1] = 'Juni'
            break;        

        case '07':
            birthdate[1] = 'Juli'
            break;    

        case '08':
            birthdate[1] = 'Agustus'
            break;    

        case '09':
            birthdate[1] = 'September'
            break;    

        case '10':
            birthdate[1] = 'Oktober'
            break;    

        case '11':
            birthdate[1] = 'November'
            break;    

        case '12':
            birthdate[1] = 'Desember'
            break;        
     
    }

    return birthdate[0]+' 'birthdate[1]+' 'birthdate[2];
}

module.exports = ConvertDateHelper