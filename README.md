## V2 Hackaton Wild Code School

## Ecology / Green IT

## 6 semaines en paralèle des cours 

## Projet BigBill invest

BigBill invest est un jeu rétro dans lequel vous allez incarner un riche homme d’affaires qui cherche à investir son argent. Vous allez avoir la possibilité d’investir dans une vingtaine de secteurs différents, et de les développer en les améliorant. Attention, chaque achat a un impact sur la planète. Tout au long de votre développement, vous allez devoir faire attention à votre impact écologique. Cet impact écologique se caractérise par votre consommation d’eau, d’énergie, des rejets de particules fines et de l’utilisation des sols. 

Comme un empire financier ne se construit pas seul vous avez également la possibilité d’embaucher des employés pour vous aider dans votre ascension. Les employés possèdent des compétences et des caractéristiques propres à chacun.   

Au cours de la partie des événements peuvent intervenir, comme des catastrophes climatiques. À vous de savoir les éviter et de faire le nécessaire quand celles-ci arrivent.  

Serez-vous avides d’argent sans regarder les conséquences de vos actes, ou serez-vous assez adroits pour trouver le bon équilibre entre votre profit et votre impact sur la planète ? 


## Setup & Use

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
