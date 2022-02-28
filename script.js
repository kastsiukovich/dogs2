const NEWS_URL = 'https://jsonplaceholder.typicode.com/posts';

const getAllNews = (countLimit) => {
    fetch(`${NEWS_URL}/?_limit=${countLimit}`).then(
        response => {
            console.log(response.json());
            // return response.json();
        }
    )
        .then(
            data => {
                // console.log(data[10].title.toUpperCase());
                const newsContainer = document.querySelector('#posts');
                newsContainer.innerHTML = '';
                data.forEach((news) => {
                    newsContainer.innerHTML += `
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">${news.title}</span>
                    <p>${news.body}</p>
                    </div>
                </div>
                `
                })
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
}

document.querySelector('#five-bews').addEventListener('click', () => {
    getAllNews(5);
})

document.querySelector('#ten-news').addEventListener('click', () => {
    getAllNews(10);
})



const getNews = (postId) => {
    fetch(`${NEWS_URL}/${postId}`).then(
        response => {
            // console.log(response.json());
            return response.json();
        }
    )
        .then(
            data => {
                //console.log(data[10].title.toUpperCase());
                const newsContainer = document.querySelector('#posts');
                newsContainer.innerHTML = '';
                newsContainer.innerHTML += `
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">${data.title}</span>
                    <p>${data.body}</p>
                    </div>
                </div>
                `
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
}

document.querySelector('#third-news').addEventListener('click', () => {
    getNews(3);
})