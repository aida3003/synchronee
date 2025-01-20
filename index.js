let x = 10;
let y = 5;
let z = 11;

if (x > 1) {
  console.log("x est plus grand que 1");
}
if (y > 1) {
  console.log("y est plus grand que 1");
}

//1 callbacks: une fonction qui prends en argurment une autre fonction
setTimeout(() => {
  console.log("z est plus grands que 1");
}, 2000);

const total = x + y + z;
console.log("total est :" + total);

//2 Promises(pendind: en cours, resolved: terminer avec succés, rejected: échouée)
let promesse = new Promise((pending, resolve, reject) => {
  let success = 2;
  if (success == 3) {
    resolve("le projet est reussi");
  } else if (success == 2) {
    setTimeout(() => {
      pending("le code est en cours...");
    }, 5000);
  } else {
    reject("erreur de code");
  }
});
promesse
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//3 async/await returne une promesse
(async () => {
  let success = 2;
  if (success == 3) {
    console.log("le projet est reussi totalement");
  } else if (success == 2) {
    setTimeout(() => {
      console.log("le code est en cours d'execution...");
    }, 3000);
  } else {
    console.log("erreur de code");
  }
})();
//3 async/await returne une promesse
(async () => {
  let success = 2;
  try {
    if (success == 3) {
      console.log("le projet est reussi totalemen");
    } else if (success == 2) {
      setTimeout(() => {
        console.log("le code est en cours d'execution..**.");
      }, 1000);
    }
  } catch (error) {
    console.error(error);
  }
})();

//await/async
const etudes = async () => {
  try {
    const data = new Promise((resolve, reject) => {
      let donnees = "omar gaye";
      if (donnees == "omar gaye") {
        resolve("omar gaye est connecter à la base de données");
      } else {
        reject("error dans votre base de donnees");
      }
    });
    data.then((message) => {
      console.log(message);
    });
  } catch (error) {
    console.error("error de serveur");
  }
};

etudes();

//await/async
const ecole = async () => {
  try {
    const data = await new Promise((resolve, reject) => {
      let donnees = "omar gaye";
      if (donnees == "omar gaye") {
        resolve("omar  est connecter à la base de données");
      } else {
        reject("error dans votre base de donnees");
      }
    });
    console.log(data);
  } catch (error) {
    console.error("error de serveur");
  }
};

ecole();
//Recuperer les données d'une Api par fetch() methods

/* si on utilise une execution local coté navigateur
async function donneesRecuperer() {
  try {
    const reponse = await fetch("./utilisateurs.json");
    const utilisateurs = await reponse.json();
    console.log("utilisateurs de la base de données", utilisateurs);
  } catch (error) {
    console.error(error.message);
  }
}
donneesRecuperer();*/

//si on utilise nodeJs car l'execution se fait cote serveur
const fs = require("fs").promises;
async function donneesRecuperer() {
  try {
    const data = await fs.readFile("./utilisateurs.json");
    const utilisateurs = JSON.parse(data);
    console.log("utilisateurs de la base de données", utilisateurs);
  } catch (error) {
    console.error(error.message);
  }
}
donneesRecuperer();
