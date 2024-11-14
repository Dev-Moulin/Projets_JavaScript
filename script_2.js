let factorielle_user = prompt ("De quel nombre veux-tu calculer la factorielle ?");

function factorielle(n) {
    
    let resultat = 1;
    
    for (let i = n; i > 1; i--) {
      resultat *= i;
    }

  
    return resultat;
  }
  
  // Calcul et affichage du résultat
  console.log("Le résultat est : " + factorielle(factorielle_user));