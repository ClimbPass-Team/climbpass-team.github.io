$( document ).ready(function(){
    "use strict";

    // get base template
    let blogTemplate = document.getElementById("blog-card");
    let blogArea = document.getElementById("dynamic-blog-cards");

    blogArea.textContent = '';

    let image = blogTemplate.content.getElementById("blog-image");
    let title = blogTemplate.content.getElementById("blog-title");
    let description = blogTemplate.content.getElementById('blog-description');

    // populate data
    blogData.forEach((item, index) => {
        image.setAttribute('src', item.src);
        image.setAttribute('alt', item.alt);
        title.innerText = item.title;
        description.innerText = item.description;
        let blog_node = blogTemplate.content.cloneNode(true);

        blogArea.appendChild(blog_node);
    });
})