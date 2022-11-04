## TODO sample - React (without redux)

<br>

#### Structure de l'app

```
📁todo
|
|_ 📁todo-sample
  |
  |_ 📄_task-form.jsx (saisi de la tache)
  |_ 📄_task-header.jsx (affiche le nombre de.s tache.s a accomplir)
  |_ 📄_task-list.jsx (affiche la/les liste.s de tache avec interaction modifier/supprimer)
  |_ 📄 todo.jsx (le composant parent, rendu final -> addTask, deleteTask, toggleTask)
```

<br>

#### Steps

- **`todo.jsx`** (parent)
- [x] creer le state global `tasks` dont la valeur initiale est un tableau vide, sa valeur est un objet avec les proprietEs: id, text, isDone. Chaque objet represente une tache
- [x] creer une methode `addTask()` permettant d'ajouter une nouvelle tache au state
- [x] creer une methode `deleteTask()` permettant de supprimer une tache existant
- [x] creer une methode `toggleTask()` permettant de changer le status d'une tache existant
- [x] appeler les composants enfants `_task-header`, `_task-footer` et `_task-list` avec leurs props appropriEs
- [x] a noter que le composant `_task-footer` se trouve dans une balise `footer`
- [x] tout ces composants enfants sont englobEs dans un `container` div et une balise `article`

<hr>

- **`_task-form.jsx`** (child)
- [x] creer une autre state local `text` qui represente la tache a ajouter
- [x] creer une methode qui permet de valider la tache saisi dans la zone de formulaire (ceci va ignorer le comportement par default d'une formulaire) et ainsi de l'ajouter au state global
- [x] creer une formulaire de type texte permettant de saisir la nouvelle tache
- [x] vous pouvez creer un boutton de validation pour ajouter une tache (ou juste valider la tache en appuyant sur ENTRER)

<hr>

- **`_task-list.jsx`** (child)
- [x] ce composant va generer (avec la methode map) une modele de tache `TaskItem` (sous composant) avec les props appropriEs (check, delete, task, key)
- [x] `TaskItem` doit contenir un input de type `checkbox` et un attibut `defaultChecked` qui represente l'etat d'une tache, ce dernier est reliE avec une methode pour modifier l'etat `isDone`
- [x] creer un boutton pour supprimer la tache

<hr>

- **`_task-header.jsx`** (child)
- [x] ce composant contient juste le nombre de.s tache.s a faire (la methode filter peut etre utile pour le faire)

<br>

#### Features

- [ ] Ajouter un boutton permettant de modifier une tache a partir d'un modal
- [ ] Utiliser local storage pour garder vos taches en memoire
- [ ] Ajouter un systeme de prioritE pour chaque tache
- [ ] Check all task with one button
