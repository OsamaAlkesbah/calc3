let title = document.querySelector('.window');
let ar=[];
let i = 0;
let x = 1;
let falg ;
let z;

let numm = 0;
let numm2 = 0;

function num (id)
{
    let number = document.getElementById(id);
    title.innerHTML += number.innerHTML;
    ar[i]=number.innerHTML;
    i++;
}

function dot(id)
{
    let number = document.getElementById(id);

        for(let c=0 ; c<i; c++)
        {
            if(ar[c] == '.')
            {
                x = 0;
            }
        } 

        if(x != 0 )
        {
            title.innerHTML += '.';
            ar[i]=number.innerHTML;
            i++;
        } 
        x = 1; 
}

function cl ()
{
    title.innerHTML = '';
    i = 0;
}

function dl()
{
    title.innerHTML = '';
    for(let c=0 ; c<i-1; c++)
    {
        title.innerHTML += ar[c];
    } 
    i--;
}

function op(id)
{
    let elemen = document.getElementById(id).innerHTML;
    if(elemen == '+' && title.innerHTML != '')
    {
         numm= parseFloat(title.innerHTML) ; 
         title.innerHTML = ''; 
         falg = 0;
         z = 1;
    }
    else if ( title.innerHTML == '' && z == 1)
    {
        falg = 0;
    }
    if(elemen == '-'  && title.innerHTML != '')
    {
         numm= parseFloat(title.innerHTML) ; 
         title.innerHTML = ''; 
         falg = 1;
         z = 2;
    }
    else if ( title.innerHTML == '' && z == 2)
    {
        falg = 1;
    }
    if(elemen == '/' && title.innerHTML != '')
    {
         numm= parseFloat(title.innerHTML) ; 
         title.innerHTML = ''; 
         falg = 2;
         z = 3;
    }
    else if ( title.innerHTML == '' && z == 3)
    {
        falg = 2;
    }
    if(elemen == '*' && title.innerHTML != '')
    {
         numm= parseFloat(title.innerHTML) ; 
         title.innerHTML = ''; 
         falg = 3;
         z = 4;
    }
    else if ( title.innerHTML == '' && z == 4)
    {
        falg = 3;
    }
}

function eq()
{
    if(falg == 0)
    {
    numm2 =  parseFloat(title.innerHTML);
    numm += numm2 ;
    title.innerHTML = numm;
    let len = title.innerHTML.length;
    ar[len] = title.innerHTML;    
    }
    if(falg == 1)
    {
    numm2 =  parseFloat(title.innerHTML);
    numm -= numm2 ;
    title.innerHTML = numm;
    }
    if(falg == 2)
    {
    numm2 =  parseFloat(title.innerHTML);
    numm /= numm2 ;
    title.innerHTML = numm;
    }
    if(falg == 3)
    {
    numm2 =  parseFloat(title.innerHTML);
    numm *= numm2 ;
    title.innerHTML = numm;
    }

}