document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function() {
      if (xhr.status === 200) {
        const posts = JSON.parse(xhr.responseText);
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.textContent = post.title;
          postsContainer.appendChild(postElement);
        });
      } else {
        console.error('Failed to fetch posts:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Failed to fetch posts.');
    };
    xhr.send();
  });
  