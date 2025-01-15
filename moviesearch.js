const movies = [
  {
    title: "The Shawshank Redemption",
    desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: ["Drama", 'comedy', 'suspense']
  },
  {
    title: "The Godfather",
    desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genre: ["Crime", 'thriller']
  },
  {
    title: "The Dark Knight",
    desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: ["Action", "crime", 'thriller']
  },
  {
    title: "Pulp Fiction",
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    genre: ["Action", "crime", 'thriller']
  },
  {
    title: "Inception",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: ["Science Fiction", "technology"]
  }
]


const container = document.getElementById('container')

showMovies(movies)

function showMovies(givenMovies) {
  container.innerHTML = '';
  givenMovies.forEach((movie) => {
    let geners = "";
    movie.genre.forEach(g => geners += `<li>${g}</li>`)
    container.innerHTML += `
    <div class="card">
    <h1>${movie.title}</h1>
    <p>${movie.desc}</p>
    <ul>
      ${geners}
    </ul>
    </div>
    `
  })
}



const input = document.querySelector('input')

input.addEventListener('keyup', (e) => {
  let value = e.target.value;
  value = value.trim().toLowerCase()

  let searchMovies = movies.filter(m => {
    if(m.title.trim().toLowerCase().indexOf(value) != -1) {
      return true;
    }
    if(m.desc.trim().toLowerCase().indexOf(value) != -1) {
      return true;
    }

    let isFound = false;

    for(let i=0; i<m.genre.length; i++) {
      if(m.genre[i].trim().toLowerCase().indexOf(value) != -1) {
        isFound = true;
        break;
      }
    }

    

    return isFound;
  })

  showMovies(searchMovies)

})
