function rand(min, max){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
    resolve(msg)
  }, tempo)
  })
}

esperaAi('frase 1', 1, 3)
.then(response => {
  console.log(response)
  return esperaAi('frase 2', rand(1, 3))
})
.then(response => {
  console.log(response)
  return esperaAi('frase 3', rand(1,3))
}).then(response => console.log(response))
.catch()