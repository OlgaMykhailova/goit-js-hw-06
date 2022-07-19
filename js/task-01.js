const categoriesEl = document.querySelector('#categories').children;

[...categoriesEl].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}
);

