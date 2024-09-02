// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// fetch('https://dummyjson.com/carts')
//     .then(value => value.json())
//     .then(cartsObj => {
//         let {carts} = cartsObj
//         console.log(carts);
//         for (const element of carts) {
//             let div = document.createElement('div')
//             div.classList.add('container')
//             let h1 = document.createElement('h1')
//             h1.innerText = `${element.id} - UserID: ${element.userId}`;
//             let h2 = document.createElement('h2')
//             h2.innerText = `Total: ${element.total}:
//             Total Discounted: ${element.discountedTotal}
//             Total Products:${element.totalProducts}
//             Total Quantity:${element.totalQuantity}`;
//             let ol = document.createElement('ol');
//             for (const product of element.products) {
//                 let li = document.createElement('li');
//                 li.innerText = `
//                 "id": ${product.id},
//                 "title": ${product.title},
//                 "price": ${product.price},
//                 "quantity": ${product.quantity},
//                 "total": ${product.total},
//                 "discountPercentage": ${product.discountPercentage},
//                 "discountedTotal": ${product.discountedTotal}`;
//                 let img = document.createElement('img');
//                 img.src =product.thumbnail;
//                 ol.append(img, li)
//             }
//             div.append(h1, h2, ol)
//             document.body.appendChild(div);
//         }
//     });


// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

const allRecipes = document.getElementsByClassName('all-recipes')[0];

const url = new URL('https://dummyjson.com/recipes');
url.searchParams.set('limit', '50');
fetch(url)
    .then(value => value.json())
    .then(recipesObj => {
        const {recipes} = recipesObj;

        for (const recipe of recipes) {
            let div = document.createElement('div');
            div.classList.add('recipe');
            let h1 = document.createElement('h1');
            h1.innerText = recipe.name;
            let h2 = document.createElement('h2');
            h2.innerText = `ID: ${recipe.id}
            Cuisine: ${recipe.cuisine}`;
            let h3 = document.createElement('h3');
            h3.innerText = `
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            cookTimeMinutes: ${recipe.cookTimeMinutes},
            servings: ${recipe.servings},
            difficulty: "${recipe.difficulty}",
            caloriesPerServing: ${recipe.caloriesPerServing},
            rating: ${recipe.rating},
            reviewCount: ${recipe.reviewCount},
            userId: ${recipe.userId}`;
            let img = document.createElement('img');
            img.src = recipe.image;
            img.classList.add('img');

            div.append(h1, h2, h3, img);
            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])){
                    const olTitl = document.createElement('h2');
                    olTitl.classList.add('list-title-class')
                    olTitl.innerText = `${recipeKey}:`
                    let ol = document.createElement('ol');
                    const array = recipe[recipeKey];
                    for (const item of array) {
                        let li = document.createElement('li');
                        li.innerText = item;
                        ol.appendChild(li);
                        div.append(olTitl, ol);
                    }
                }


            }



            allRecipes.appendChild(div);
        }

    });
