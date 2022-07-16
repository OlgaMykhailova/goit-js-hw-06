const categoriesEl = document.querySelector('#categories').children;

console.log(`Number of categories: ${categoriesEl.length}`);

for (let i = 0; i < categoriesEl.length; i += 1) {
    console.log(`Category: ${categoriesEl[i].firstElementChild.textContent}`);
    console.log(`Elements: ${categoriesEl[i].lastElementChild.children.length}`);
}


