# FOUSSIERMARINP6
 
# OpenClassrooms P6 - API backend SoPekocko "Piquante"
6ème projet de la formation de [développeur web de OpenClassrooms](https://openclassrooms.com/fr/paths/185-developpeur-web)

## Scénario
Développement d'une application web nommée "Piquante" dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.  
Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

## Objectifs du projet et compétences évaluées
Développement Backend en Javascript
- Serveur **Node.js**
- Framework **Express**
- Base de données **MongoDB**
  - Hébergement sur MongoDB Atlas
  - Opérations relatives à la BDD réalisées avec mongoose
- **API REST**
- Sécurité **OWASP** et **RGPD**

## Mesures de sécurité mises en place
- Hashage du mot de passe utilisateur avec **bcrypt**
- Manupulation sécurisée de la base de donnée avec **mongoose**
- Vérification que l'email utilisateur soit unique dans la base de données avec **mongoose-unique-validator**
- Authentification de l'utilisateur par token avec **jsonwebtoken**
- Protection des headers avec **helmet**
- Désactive la mise en cache du navigateur avec **nocache**
- Nombre d'essai de connexion limité avec **../middleware/limit**



## Pour tester l'application

1. Cloner ce repository (https://github.com/mf1511/FOUSSIERMarin_6_20102021), et le lancer : 
    - Dans un terminal, accéder au dossier du frontend
    - Installer les dépendances: **npm install**
    - Lancer: **ng serve**

2. Ajouter un fichier de configuration nommé **".env"** à la racine du backend. A l'intérieur, 5 variables d'environnement "secrètes" seront définies:
    - MONGODB_PATH = 'lien_vers_la_base_de_données_mongoDB'
    - TOKEN_KEY = 'clé_secrète_pour_crypter_les_tokens'
    - EMAIL_KEY = 'clé_secrète_pour_crypter_les_emails'
    - COOKIE_KEY = 'clé_secrète_pou_la_session'
    - AUTHORIZED_ORIGIN = 'http://localhost:8081'
3. Lancer le backend
    - Dans un autre terminal, accéder au dossier du backend
    - Installer les dépendances: **npm install**
    - Installer dotenv: **npm install dotenv**
    - Lancer **node server**
4. Le frontend est accessible à l'adresse http://localhost:8081
5. Pour des tests spécifiques (avec postman par exemple), le backend répond à l'adresse: http://localhost:3000 (attention: authentification requise pour toutes les routes /api/sauces/)

