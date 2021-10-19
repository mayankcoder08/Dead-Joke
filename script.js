// GET https://icanhazdadjoke.com/

const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


// USING PROMISES
const generateJoke = () => {

const setHeader = {
    headers: {
        Accept : "application/json"
    }
}


    fetch('https://icanhazdadjoke.com/', setHeader)
    .then( (res) => res.json()
    )
    .then( (data) => {
        jokes.innerHTML = data.joke;
    })
    .catch( (err) => {
        console.log(err)
    })
}


// USING ASYN AWAIT
// const generateJoke = async ()=>{
//     try{
//         const setHeader ={
//             headers:{
//                 Accept:"applicaion/json"
//             }
//         }
    
//         const res = await fetch('https://icanhazdadjoke.com/',setHeader);
//         const data = await res.json();
//         jokes.innerHTML = data.joke;
//     }catch(err){
//         console.log(`the error is ${err}`);
//     }

// }

jokeBtn.addEventListener('click', generateJoke);

generateJoke(); // to get atleast one joke when site loads.