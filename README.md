# CookyJS
Bienvenue sur la première version de **CookyJS**, un plugin propulsé par [jQuery](http://jquery.com) pour simplifier l'utilisation de vos cookies sur votre site. Lisez ce document pour en comprendre plus ou savoir comment utiliser notre plugin.

## Que peut-on faire avec ?
* Créer un cookie
* Modifier un cookie
* Utiliser le cookie comme un _tableau_ de données
  * Ajouter une valeur
  * Modifier une valeur
  * Supprimer une valeur
* Supprimer un cookie

## Charger le plugin
Ajoutez simplement jQuery puis CookyJS
```javascript
<script type='text/javascript' src='https://code.jquery.com/jquery-3.1.1.min.js'></script>
<script type='text/javascript' src='./jquery.cookyjs.min.js'></script>
```

## Comment utiliser CookyJS ?
Dans les cas suivants, `[key]` sera le nom du cookie que vous voudrez créer (plus communément appelé clé), `[value]` le contenu de celui-ci (ou la valeur) et `[params]` le tableau de données que je vais expliquer en fin de document.
#### Pour créer simplement un cookie sans aucun paramètres spéciaux:
