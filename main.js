
menu.onclick = function (){
    let x = document.querySelector('#myTopNav');

    if(x.className === 'topnav'){
        x.className +=' responsive';
    } else{
        x.className = 'topnav';
    }
}

