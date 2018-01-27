<img alt="Logo" src="https://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Node.js challenge

Witaj w challengu Node.js, gdzie codziennie przez 7 dni zdobędziesz konkretną dawkę informacji dotyczących Node.js oraz wykorzystasz ją w praktyce. **Pamiętaj żeby wykonywać dni challengu po kolei - od dnia pierwszego do ostatniego** (dzięki temu Twoja wiedza będzie poukładana i kompletna).

Każdy dzień to jeden temat przewodni. W jego ramach **stworzysz aplikację Node.js, która faktycznie będzie potrafiła coś zrobić** - od razu zobaczysz wynik swojej pracy.

___

> Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

**Do pełnego i satysfakcjonującego doświadczania tego challengu jest potrzebna znajomość JavaScript z elementami ES6.** Jeżeli potrzebujesz informacji z zakresu ES6 to znajdziesz je tutaj: [*tutorial ES6*][es6-tutorial].

## Jak zacząć?

1. Stwórz [*fork*][forking] repozytorium z zadaniami.
2. [*Sklonuj*][ref-clone] repozytorium na swój komputer.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

## Plan challengu

* Pierwszy dzień to wstęp do Twojej przygody z Node.js - dowiesz się w jaki sposób przygotować środowisko oraz jak pisać i testować programy Node.js.
* W kolejnych dniach dowiesz się w jaki sposób za pomocą Node.js wchodzić w interakcję z systemem operacyjnym (np. modyfikować pliki czy dokonywać szyfrowania).
* Druga część challengu jest poświęcona tworzeniu back-endu - dowiesz się jak stworzyć własny serwer.
* Pod koniec doświadczysz roli full-stack developera - stworzysz komunikujący się ze sobą front-end i back-end.  

___

# Dzień 5: Express

Czas na poważne programowanie ;) Zaczniemy korzystać dzisiaj z narzędzi popularnie wykorzystywanych do tworzenia komercyjnych back-endów. Dlatego nauczymy się tzw. _frameworka Express_. Zobaczysz, że wprowadza on kilka ułatwień w stosunku do modułu `http` - będziemy go porównywali.

> Wiedza z zakresu działania modułu `http` jest niezbędna aby dobrze rozumieć działanie _frameworka Express_. Express działa na podstawie modułu `http` i to dlatego najpierw nauczyliśmy się go wczoraj używać.

## Czym jest Express.js?

<img src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" alt="Express.js" width="250">

Express.js to tzw. _framework_ back-endowy dla Node.js. Jest on pewnego rodzaju abstrakcją dla rzeczy, które można samemu wykonać za pomocą modułu `http`. Ważnym jest, aby dobrze rozumieć jak działa on pod spodem - wtedy można korzystać z jego przyjemnych ułatwień :)

_Framework_ to nieco większa biblioteka, która w pewien sposób wymusza strukturę pisania aplikacji. Akurat Express jest bardzo elastyczny i nie wymusza zbyt wiele.

Nauczysz się podstaw Express - **najbardziej znanego frameworka back-endowego dla Node.js.** W przyszłości pracując jako back-endowiec lub full-stack developer z pewnością natrafisz na Express (lub inne frameworki, które pod spodem również korzystają z Expressa :) ).

# npm

Wcześniej korzystaliśmy z wbudowanych w Node.js modułów - teraz jednak potrzebujemy czegoś więcej - będziemy doinstalowywali zewnętrzne moduły.

Z pewnością znane jest Ci narzedzie `npm` - jest to menedżer paczek dla Node.js (z ang. _Node Package Manager_).

Aby z niego skorzystać w folderze aplikacji musimy linią komend/terminalem zawsze najpierw wykonać komendę `npm init` oraz odpowiedzieć na kilka pytań. Załóżmy, że nasza aplikacja będzie się nazywać `challenge` (trzymaj się tej nazwy, łatwo coś popsuć nieprawidłową nazwą). Reszta pytań nie ma większego znaczenia dla nas teraz (zatwierdzamy enterem). Całość może wyglądać np. tak:

```cmd
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (app) challenge
version: (1.0.0)
description:
entry point: (zadanie01.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to ...\package.json:

{
  "name": "challenge",
  "version": "1.0.0",
  "description": "",
  "main": "zadanie01.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)

$
```

Po tym przygotowaniu możemy zacząć instalować potrzebne moduły :) Potrzebujemy Express, więc wykonujemy komendę:

```cmd
npm install express --save
```

> Cierpliwości, to może chwilę trwać :)

Aby w naszym kodzie wykorzystać ten nowy moduł wykorzystamy standardową procedurę:

```JavaScript
const express = require('express');
```

## `http` -> `express`: pierwsze starcie

Pierwszą rzeczą, którą postaramy się przepisać z modułu `http` będzie po prostu uruchomienie serwera, nasłuchiwanie na porcie 3000 i zwracanie przeglądarce _Hello, World!_.

Będzie to wyglądało tak w Express:

```JavaScript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
```

Tutaj porównanie z tym samym, ale za pomocą modułu `http`:

```JavaScript
const http = require('http');

const srv = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end('Hello, World!');
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
```

**Rozłóżmy użycie Express na czynniki pierwsze:**

Dołączamy nasz nowo zainstalowany moduł:

```JavaScript
const express = require('express');
```

Poniższa linia tworzy nowy serwer back-endowy za pomocą Expressa:

```JavaScript
const app = express();
```

A tutaj jesteśmy w stanie zareagować na zapytanie i wysłać wynik:

```JavaScript
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

Zauważ dwie różnice: po 1. Express automatycznie domyślnie ustawia odpowiednie kodowanie znaków. Po 2. metoda do przesłania tekstów nazywa się w Expressie `res.send(twojTekst)`. Widać też podobieństwo - mamy tutaj doczynienia z obiektami `req` i `res`, które działają podobnie do tych w module `http`.

Poniższe linie na pewno Cię nie dziwią - rozpoczynamy nasłuchiwanie:

```JavaScript
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
```

Uruchomienie tak napisanego programu (pamiętaj, że żeby działał wcześniej trzeba wykonać `npm init` oraz `npm install express --save`!) i odwiedzenie np. localhost:3000 spowoduje wyświetlenie spodziewanego _Hello, World_.

## Routing

<img src="http://s0.geograph.org.uk/geophotos/03/53/31/3533144_6f2ed8df.jpg" alt="" width="300">

W Express routing (z ang. _ścieżkowanie_, _trasowanie_), oznacza przypisanie do konkretnego adresu konkretnej odpowiedzi. Np. odwiedzając `localhost:3000` chcemy zobaczyć coś innego niż na `localhost:3000/contact`.

Wykonanie tego w czystym module `http` jest dosyć trudne i mało czytelne. Na szczęście Express rozwiązuje tę kwestię bardzo prosto. Najczęściej w środku naszego programu (między `const app = express();`, a `app.listen(...`) wykorzystujemy taką składnię: `app.metoda_http_malymi_literami(sciezkaOdSlash, callback)`. Oznacza to: kiedy ktoś odwiedzi adres, który od pierwszego slasha jest taki jak podany i użyje podanej metody HTTP to uruchom ten konkretny callback.

Długi akapit :) Całość sprowadza się do tego przykładu:

```JavaScript
// (...)

app.get('/', (req, res) => { //np. localhost:3000
    res.send('Hello, World!');
});

app.get('/contact', (req, res) => { //np. localhost:3000/contact
    res.send('Zapraszam do kontaktu: ja@domena.pl!');
});

// (...)
```

Wygląda czytelnie :) ?

> Należy Ci się kilka słów wyjaśnienia:
> 
> 1. Domyślną metodą HTTP jest zawsze `GET`, dlatego piszemy `app.get(...`.
> 
> 2. Przeglądarka często skraca zapis (`domena/` do `domena`) i ścieżka `/` oznacza również brak jakiegokolwiek adresu po slashu (strona główna).

## Parametry ścieżek

Routing może być nieco bardziej zaawansowany - taki pozwalający przesłać pewnie informacje w adresie. Każdą taką informację będziemy nazywali parametrem.

Spójrz na poniższy przykład:

```JavaScript
// (...)

app.get('/hello/:myname', (req, res) => { //np. localhost:3000/hello/Programist(k)o
    const name = req.params.myname;
    res.send('Witaj, ' + name);
});

// (...)
```

Ten zapis sprawi, że kiedy odwiedzisz np. _localhost:3000/hello/Kuba_ to zobaczysz _Witaj, Kuba_, a pod adresem _localhost:3000/hello/Wędrowcze_ napis _Witaj, Wędrowcze_ itd.

Oto kilka ważnych zasad:

1. Aby przyjąć informację w adresie należy w części ścieżki skorzystać z `:nazwaparametru`. Najlepiej gdy ta nazwa będzie po prostu małymi literami.
2. Jeżeli korzystasz z tego to pamiętaj, że każda część adresu musi być oddzielona slashem (lub kropką, lub myślnikiem). Te ścieżki są poprawne: `/:name`, `/hello/:name/:surname`, `/blog/:category/list`, `/blog/:category/post/:id`, ale te **już nie**: ~~`/hello/:name:surname`, `/hello:name/:surname`, `/hello,:name,:surname`~~.
3. Aby odebrać informację w callbacku użyjesz właściwości `req.params.nazwaparametru` - pamiętaj, że nazwa musi być taka sama jak podczas deklarowania ścieżki.

## Pliki statyczne

Ostatnią ważną dawką wiedzy na dzisiaj będzie zwracanie plików statycznych.

Rozważ taki przykład, w którym chcemy HTMLową stronę główną, wraz ze stylem CSS:

```JavaScript
// (...)

app.get('/', (req, res) => { //Strona główna
    res.send(`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`);
});

app.get('/css/style.css', (req, res) => { //Odnośnik do CSSa
    res.setHeader('content-type', 'text/css'); //Trzeba ręcznie ustawić typ zawartości, żeby przeglądarka faktycznie ziterpretowała nasz tekst jako CSS
    res.send(`h1{
    color : green;
}`);
});

// (...)
```

Niby działa, ale jaka jest czytelność i praktyczność takiego rozwiązania?

Pliki statyczne to wszystkie dane w postaci np. plików HTML, CSS, JavaScript, grafik, czy fontów, które są takie same dla każdego użytkownika i których nie chcemy wypiswać w stringu w programie. Jest to skomplikowane zagadnienie (trzeba m.in. automatycznie wykrywać typ zawartości plików itd), na szczęście w Expressie to proste. Wystarczy użyć metody `app.use(middleware)` i jako middleware przekazać funkcję `express.static(folderZPlikamiStatycznymi)`.

Np. taki zapis:

```JavaScript
app.use(express.static('./public/przykladStatyczne/'));
```

Spowoduje, że każde zapytanie, którego nazwą będzie plik znajdujący się w podanym folderze - zostanie automatycznie obsłużone przez Express. 

> Aby obsłużyć stronę główną stwórz plik `index.html` - jest on interpretowany jako plik statyczny dla ścieżki `/`.

Całość wygląda np. tak:

```JavaScript
const express = require('express');
const app = express();

app.use(express.static('./public/przykladStatyczne/'));

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
```

> Cały ten przykład w bardziej rozbudowanej formie znajdziesz w pliku `app/przykladStatyczne.js`
> Aby go uruchomić pamiętać o `npm init` i `npm install express --save`!



# Ćwiczenia

> Ćwiczenia wykonuj w odpowiednich plikach. W folderze `app` są one ponumerowane tak samo jak poniżej - zadaniu `1. Rozgrzewka` odpowiada plik `app/zadanie01.js` itd.
> Aby uruchomić zadanie podaj jego nazwę (pamiętaj, aby linia komend/terminal był otwarty na katalogu `app` tego repozytorium), np.:
> ```cmd
> node ./zadanie01.js
> ```

> Pamiętaj, aby zainicjować npm i zainstalować wymagane moduły!

## 1: Dodawanie ze ścieżki

Stwórz taką aplikację Express, która potrafi przyjąć w ścieżce dwie liczby. Następnie odbierz je, zsumuj, a sumę wyświetl w przeglądarce.

> Pamiętaj, że parametry są zwracane jako string. Potrzebujesz więc użyć np. `parseInt()`, żeby zmienić je w liczby.

## 2. Przepraszam, jak masz na imię?

Stwórz taką aplikację Express, która ma trzy ścieżki:

- `'/name/set/:imie'` - zapamiętuje ona w programie podane imię oraz wyświetla je w przeglądarce.
- `'/name/show'` - wyświetla ona podane wcześniej imię.
- `'/name/check'` - wyświetla ona informację, czy imię zostało już zapisane w programie czy nie. 

> Podpowiedź: wykorzystaj zmienną.

## Zadanie dnia: Ankieta

Stwórz aplikację Express. Powinna ona serwować statyczne pliki z folderu `./public/zadanieDnia/`. Na stronie głównej możliwe jest głosowanie w ankiecie.

Obsłuż głosowanie tak, żeby przejście do którejkolwiek ścieżki `/vote/yes`, `/vote/no` powodowało dodanie głosu do odpowiedniej opcji. Zwróć do przeglądaki `Dziękujemy za głos!`.

Na ścieżce `/votes/check` wyświetl wyniki ankiety - ilość głosów oddanych na każdą opcję.

> \* A jeżeli chciał(a)byś teraz dodać trzecią opcję "To się okaże" / maybe - w jaki sposób najłatwiej to zaimplementować, by nie powtarzać wielokrotnie jednego kodu (zasada DRY)?

**To wszystko na dziś - gratulacje! Do jutra :)**


<!-- Links -->
[forking]: https://guides.github.com/activities/forking/
[ref-clone]: http://gitref.org/creating/#clone
[es6-tutorial]: http://qnimate.com/post-series/ecmascript-6-complete-tutorial/
[download-node]: https://nodejs.org/en/download/
[localhost]: http://localhost:3000
[localhost127]: http://127.0.0.1:3000
[httpcats]: http://http.cat/
[httpdogs]: https://httpstatusdogs.com/