let maxNumber
let isValid = false
let count = 0

while (!isValid) {
  maxNumber = prompt("Choisissez un nombre maximal")


  if (maxNumber!=null && maxNumber!= "") {


    if (!isNaN(maxNumber)) {

      maxNumber = parseInt(maxNumber)
      if (maxNumber>0) {
        isValid = true
      } else{
        alert ("Entrez un nombre plus grand que zéro")
      }
    } else {
      alert("Ceci n'est pas un nombre")
    }
  } else { 
    alert("Ceci n'est pas un nombre")
  }
}

let randomNumber = Math.floor(Math.random()*maxNumber) +1

let attempt

isValid = false

while ( !isValid) {
  attempt = prompt( `Devinez le nombre entre 0 et ${maxNumber}`)
  if (attempt != null && attempt != ""){
    if (!isNaN(attempt)) {
      isValid=true
      attempt = parseInt(attempt)
      count ++
      if(attempt==randomNumber) {
        alert(`Félicitations ! Tu as trouvé le juste prix en ${count} essais`)
        isValid=true
      } else if (attempt< randomNumber) {
        alert("C'est plus. Réessayez")
        isValid = false
        continue
      } else {
        alert( "Cest moins. Réessayez")
        isValid=false
        continue
      }
    } else {
      alert("Ceci n'est pas un nombre")
    }
  } else {
    alert("Ceci n'est pas un nombre")
  }

}

