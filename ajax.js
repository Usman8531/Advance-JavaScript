console.log(`HLo File testing`);

const fetchBtn=document.querySelector('#FetchBtn');

fetchBtn.addEventListener('click',Btnevet)

function Btnevet(){
    console.log(`Button is clicked`);
    
    // Initiate the Object
    
    let xhr=new XMLHttpRequest();

    // open object

    // GET REquest 
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
    // xhr.open('GET','Usman.txt',true)
    
    // use This for POST Request 
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)
    xhr.getResponseHeader('Content_tpye','application/JSON');
    
    // what to do on progress (OPtional)
    xhr.onprogress=()=>{
        console.log(`This is on Progress`);
    }
    
    // what to do on load
    
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("Error occured");
        }
    }

    // on ready state 

    xhr.onreadystatechange=function(){
console.log("ready state is", xhr.readyState);
    }
    
    // send the request 
    
    // for POST Request 
    prms=`{"name":"test","salary":"123","age":"23"}`


    xhr.send(prms);
    
    // for Get Request 
    // xhr.send();
    

    console.log(`The Process is completed`);
    
}

const popBtn=document.querySelector('#backupBtn');

popBtn.addEventListener('click',popevent)

function popevent(){
    console.log(`Back up Button is clicked`);
    
    // Initiate the Object
    
    let xhr=new XMLHttpRequest();

    // open object

    // GET REquest 
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true)
    
    // what to do on progress (OPtional)
    xhr.onprogress=()=>{
        console.log(`This is on Progress`);
    }
    
    // what to do on load
    
    xhr.onload=function(){
        if(this.status===200){
           let obj=JSON.parse(this.responseText);
           console.log(obj);
        let list=document.querySelector("#list");
        str="";
        for(key in obj){
            str+="<li>"+obj[key]+"</li>"
        }
        list.innerHTML=str;
        }
        else{
            console.log("Error occured");
        }
    }

    // on ready state 

//     xhr.onreadystatechange=function(){
// console.log("ready state is", xhr.readyState);
//     }
    
    // send the request 
    
    // for Get Request 
    xhr.send();
    

    console.log(`we get the data of ALL employees`);
    
}