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
```javascript
$.cookie.create([key], [value]);
```
#### Pour créer un cookie avec les paramètres (tous)
```javascript
$.cookie.create([key], [value], {
  'domain': [url], // Lien de votre site (écit comme ceci: example.com)
  'path': [path], // Fichier où vous voulez inclure le cookie
  'expires': [days] // Nombre de jour avant l'expiration du cookie
});
```
#### Pour lire un cookie
```javascript
$.cookie.read([key]);
```
#### Pour modifier un cookie
```javascript
$.cookie.([key], [newvalue]); // "[newvalue]" est la nouvelle valeur
```
#### Pour supprimer un cookie
```javascript
$.cookie.remove([key]);
```
#### Pour créer un tableau dans un cookie
Vous pouvez executer ceci sur un cookie déjà généré avec `$.cookie.push()` où encore avec `$.cookie.create()`
```javascript
$.cookie.push([key], [value]);
```
#### Pour modifier la valeur d'un tableau dans un cookie
Dans ce cas, `[search]` est la valeur à rechercher dans le cookir `[key]` et `[newvalue]` la nouvelle valeur
Attention, ça remplacera toutes les occurences
```javascript
$.cookie.push.edit([key], [search], [newvalue]);
```
#### Pour supprimer une valeur d'un tableau dans un cookie
Dans ce cas, `[value]` est la valeur à supprimer dans le cookie `[key]`
Attention, ça supprimera toutes les occurences
```javascript
$.cookie.push.remove([key], [value]);
```
<hr>
# Bonne utilisation
