const addButton = document.getElementById('add-button');
const movieInput = document.getElementById('movie-input');
const movieList = document.getElementById('movie-list');

addButton.addEventListener('click', addMovie);

function addMovie() {
    const movieName = movieInput.value.trim();
    if (movieName === '') {
        alert('Please enter a movie name!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'movie-item';
    listItem.innerHTML = `
        <span>${movieName}</span>
        <button class="watch-button">Mark Watched</button>
    `;

    movieList.appendChild(listItem);

    const watchButton = listItem.querySelector('.watch-button');
    watchButton.addEventListener('click', function() {
        listItem.classList.toggle('watched');
        if (listItem.classList.contains('watched')) {
            watchButton.textContent = 'Watched';
            watchButton.disabled = true;
        }
    });

    movieInput.value = '';
}
