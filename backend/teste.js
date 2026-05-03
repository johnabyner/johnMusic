console.log('oi');
const porra = ()=>fetch("http://localhost:3000/johnMusic/artists/virgingod")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((e)=>console.log('Deu ruim com o servidor', e));

porra();

// const res = await fetch("https://musicbrainz.org/ws/2/artist/?query=eminem&fmt=json", {
//   headers: {
//     "User-Agent": "Test/1.0 (test@test.com)"
//   }
// });

// console.log(await res.json());