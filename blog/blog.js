$( document ).ready(function(){
    "use strict";

    // get base template
    let blogTemplate = document.getElementById("blog-card");
    let blogArea = document.getElementById("dynamic-blog-cards");

    blogArea.textContent = '';

    let image = blogTemplate.content.getElementById("blog-image");
    let link = blogTemplate.content.getElementById("card-link");
    let title = blogTemplate.content.getElementById("blog-title");
    let description = blogTemplate.content.getElementById('blog-description');

    // populate data
    blogData.forEach((item, index) => {
        link.setAttribute('href', item.link);
        image.setAttribute('src', item.src);
        image.setAttribute('alt', item.alt);
        title.innerText = item.title;
        description.innerText = item.description;
        let blog_node = blogTemplate.content.cloneNode(true);

        blogArea.appendChild(blog_node);
    });
})