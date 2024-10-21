document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('upload-form');
    const articlesContainer = document.getElementById('articles');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Obținerea datelor din formular
      const title = document.getElementById('article-title').value;
      const content = document.getElementById('article-content').value;
      const imageInput = document.getElementById('image-upload');
      const image = imageInput.files[0];
  
      // Crearea articolului
      const article = document.createElement('article');
      const articleTitle = document.createElement('h3');
      const articleContent = document.createElement('p');
      const articleImage = document.createElement('img');
  
      articleTitle.textContent = title;
      articleContent.textContent = content;
  
      // Afișarea imaginii încărcate
      const reader = new FileReader();
      reader.onload = function (e) {
        articleImage.src = e.target.result;
        articleImage.style.width = '100%';
        article.appendChild(articleImage);
      };
      reader.readAsDataURL(image);
  
      // Adăugarea titlului și conținutului articolului
      article.appendChild(articleTitle);
      article.appendChild(articleContent);
  
      // Afișarea articolului în pagina
      articlesContainer.appendChild(article);
  
      // Resetarea formularului după trimitere
      form.reset();
    });
  });
  