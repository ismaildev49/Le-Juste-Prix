let maxNumber = prompt("Ecrivez un chiffre maximal SVP.")
maxNumber = parseInt(maxNumber)

do {
switch (Number.isInteger(maxNumber)) {
    case true :
        maxNumber= prompt("Ceci n'est pas un chiffre. Merci d'entrer un chiffre correct")
        maxNumber= parseInt(maxNumber)
        console.log(typeof randomNumber)
        break

    case false :
        let randomNumber = Math.floor(Math.random() * (maxNumber+1)) 
        
        count = 0
        attempt = prompt(`Devine le juste prix compris entre 0 et ${maxNumber}`)
        attempt = parseInt(attempt)
        do {
            switch (Number.isInteger(attempt)) {
                case false :

                    if (attempt > randomNumber) {
                        attempt = prompt("C'est moins. Réessaye.")
                        attempt = parseInt(attempt)
                        count++
                        break
                    } else if (attempt < randomNumber) {
                        attempt= prompt("C'est plus. Réessaye")
                        attempt = parseInt(attempt)
                        count++
                        break
                    }
                case true :
                    attempt= prompt("Ceci n'est pas un chiffre. Merci d'entrer un chiffre correct")
                    attempt = parseInt(attempt)
                    count++
                    break
    }

        } while (attempt != randomNumber)
count++
alert(`Félicitations ! Tu as correctement deviné le juste prix en ${count} essais !`)

    
}
} while( Number.isNaN(maxNumber) == true)


