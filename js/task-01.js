const categoriesEl = document.querySelector('#categories').children;

console.log(`Number of categories: ${categoriesEl.length}`);

[...categoriesEl].forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}
);

