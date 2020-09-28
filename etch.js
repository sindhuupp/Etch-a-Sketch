const  maindiv= document.querySelector('#container');
maindiv.style.width= '90%';
maindiv.style.height= '75%';
maindiv.style.borderWidth= '20px';
const table = document.createElement('table');
table.setAttribute('id','sketchsize');
table.style.width= '100%';
table.style.height= '100%';

maindiv.appendChild(table);
const  bdiv= document.querySelector('#buttons');
const button1= document.createElement('button');
button1.setAttribute('id','button1')
button1.textContent= "clear";
const button2 = document.createElement('button');
button2.textContent= "grid size";
button2.setAttribute('id','button2');
bdiv.appendChild(button1);
bdiv.appendChild(button2);



function rows(number)
{
    var cell = new Array;
    y=0;
    for(i=0;i<number;i++)
    {
        let mw= maindiv.style.width;
        let mh= maindiv.style.height;
        let bw= maindiv.style.borderWidth;
        const row = document.getElementById('sketchsize').insertRow(i);
        row.classList.add('row');
        row.style.width= '((mw-bw)/number)px';
        row.style.height='((mw-bw)/number)px';
        for(x=0;x<number;x++) 
        {
            const col= row.insertCell(x);
            col.classList.add('column');
            col.style.width= '((mw-bw)/number)px';
            col.style.height='((mw-bw)/number)px';
            col.style.backgroundColor="white";
            cell[y] = col;                  //initializing each cell with y number//
            y=y+1;
            col.addEventListener("click",change);
        } 
    }
    
    function change()
    {
    for(z=0;z<(number*number);z++)  //adding another event listener//
    {
        cell[z].addEventListener("mouseover",changecolor);
        cell[z].addEventListener("dblclick",remove);
    }
    } 

    function remove()
    {
    for(z=0;z<(number*number);z++)  
    {
        
        cell[z].removeEventListener("mouseover",changecolor);
    }
    }

    function clear()
    {
    for(z=0;z<(number*number);z++)
    {
       cell[z].style.backgroundColor="white";
    }
    }

    button1.addEventListener("click",clear)
}

function changecolor(e)
    {
    var x = (Math.floor(Math.random() * 256));
    var y = (Math.floor(Math.random() * 256));
    var z = (Math.floor(Math.random() * 256));
    var bgColor = "rgb(" + x + "," + y + "," + z+ ")";
    e.target.style.backgroundColor= bgColor;
    } 

function remove(e)
    {
    e.target.style.backgroundColor="none";  
    }

button2.addEventListener("click",grid)

function grid()
{
    let size=  prompt("enter your grid size. Please enter values between 1 to 300");
    if( size>0 && size<=300)
    {
    const tab= document.getElementById('sketchsize');
    tab.innerHTML=" ";
    rows(size);
    }
    else 
    {
    prompt ("please enter a valid number")
    }
}
rows(16)