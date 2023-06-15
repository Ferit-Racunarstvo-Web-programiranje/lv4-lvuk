# Fruit Shop

Projekt je realiziran pomoću React.js framework-a te za bazu podataka je korišten Firebase.

### Funkcionalnosti

1. Dolaskom na webshop ispod svakog proizvoda se nalazi gumb za stavljanje proziovda u košaricu.**Svi prozivodi koji se nalaze na stranici su spremljeni u bazu podataka te se dohvaćaju iz nje**. Automatski kada se prozivod stavi u košaricu ona se ažurira.

2. Klikom na ikonicu košarice u gornjem desnom kutu aplikacija vas navigira na `/cart` endpoint. **Na toj stranici su prikazane sve sastavnice košarice te količina određenog prozivoda koja se može povećavati ili smanjivat**. Ispod toga je prikazan kratak summary košarice.

3. Potvrdom kupovine u košarici aplikacija vas navigira na **stranicu za narudžbe** na `/cashout` endpointu na kojoj ste dužni unijeti stvari potrebne kako bi se narudžba zaključila.

4. Također stranica ima endpoint `/add-products` koji omogućava lakše unošenje novih proizvoda u bazu. Stranica nažalost nema nikakav login nego je taj endpoint napravljen kako bi meni olakšao unos prozivoda.

### Kako pokrenuti aplikaciju lokalno

1. Skinuti kod sa GitHub-a
2. U terminal ući u direktorij gdje je aplikacija i instalirati sve dependencije pomoću `npm install`
3. Pokrenuti aplikaciju sa `npm start` i otvoriti će se u web pregledniku

### Aplikacija dostupna na internetu

[FruitShop Online](https://lv4-fruit-shop.netlify.app/)
