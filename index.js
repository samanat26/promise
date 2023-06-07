
// let data = new Promise((resolve, reject) => {
//    setTimeout(() => {
//         resolve("data resolved")
//    }, 3000);
// })


//async keyword with any function always returns promise 
// async function getdata(){
//     let res = await data;
//     console.log(res);
// }
// console.log(getdata())
// getdata().then (data=>console.log(data));
// getdata().then (console.log) //another way to write

// getdata();

//..........Ex 01 - with promise........

dell = {
    "company" : "dell",
    "color" : "black",
    "memory" : "ssd"
    
};

let res1 = document.getElementById('result1');
let res2 = document.getElementById('result2');
let res3= document.getElementById ('result3');

let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dell)
    }, 3000);
})

let apiData= fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())



function fetch1(){
    res1.innerText='Fetching Data...';

    data.then(res =>{
        // console.log(res);
        res1.innerText =  JSON.stringify(res);
    })

}

//..........Ex 02 - with Async / Await........

async function fetch2() {
    res2.innerText = 'Fetching Api';
    let res = await data;
    res2.innerText = JSON.stringify (res);
    
}

//..........Ex 03 - By Fetching Api ........

//....by promise....

// function fetch3(){
   
//     res3.innerHTML ='Fetching Data...';
//     apiData.then(res=>{
//         res3.innerHTML= JSON.stringify(res)
//     })

// }

//.....by Async and Await

async function fetch3 () 
{
 res3.innerText= 'fetching data' ;
 let getApiData= await apiData;
 res3.innerText = JSON.stringify(getApiData);   
}