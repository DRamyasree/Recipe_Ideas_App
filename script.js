document.addEventListener('DOMContentLoaded', () => {
  const recipes = [
    {
      name: 'Avocado Toast',
      category: 'Breakfast',
      details: 'Healthy toast with smashed avocado, eggs & herbs.',
      image:
        'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Blueberry Pancakes',
      category: 'Breakfast',
      details: 'Fluffy pancakes filled with blueberries and syrup.',
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Grilled Sandwich',
      category: 'Lunch',
      details: 'Cheese & veggie sandwich with a crispy golden crust.',
      image:
        'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Chicken Biryani',
      category: 'Lunch',
      details: 'Fragrant basmati rice with tender chicken and spices.',
      image:
        'https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Pasta Alfredo',
      category: 'Dinner',
      details: 'Creamy Italian pasta made with butter, garlic & cheese.',
      image:
        'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Grilled Salmon',
      category: 'Dinner',
      details: 'Perfectly grilled salmon served with lemon butter sauce.',
      image:
        'https://images.pexels.com/photos/3296273/pexels-photo-3296273.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Veggie Stir Fry',
      category: 'Dinner',
      details: 'Colorful veggies tossed in a light soy sauce glaze.',
      image:
        'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Chocolate Cake',
      category: 'Dessert',
      details: 'Moist chocolate cake topped with creamy frosting.',
      image: 'chocolate_cake.jpeg',
    },
    {
      name: 'Cupcakes',
      category: 'Dessert',
      details: 'Colorful cupcakes with buttercream icing and sprinkles.',
      image: 'cupcakes.jpeg',
    },
    {
      name: 'Brownies',
      category: 'Dessert',
      details: 'Fudgy chocolate brownies with a crisp crust.',
      image:
        'https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Strawberry Smoothie',
      category: 'Drinks',
      details: 'A healthy smoothie with strawberries & yogurt.',
      image:
        'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Iced Coffee',
      category: 'Drinks',
      details: 'Refreshing cold coffee topped with cream.',
      image:
        'https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Lemon Mojito',
      category: 'Drinks',
      details: 'Minty lemon mocktail with soda and ice.',
      image:
        'https://images.pexels.com/photos/1398688/pexels-photo-1398688.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Fruit Salad',
      category: 'Breakfast',
      details: 'A colorful mix of seasonal fruits & honey.',
      image:
        'https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Mango Lassi',
      category: 'Drinks',
      details: 'A sweet Indian yogurt drink with ripe mangoes.',
      image: 'mango-lassi-cocktail.webp',
    },
  ];

  const searchInput = document.getElementById('searchInput');
  const recipeContainer = document.getElementById('recipeContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function displayRecipes(list) {
    recipeContainer.innerHTML = '';
    list.forEach((r) => {
      const card = document.createElement('div');
      card.classList.add('recipe-card');
      card.innerHTML = `
        <img src="${r.image}" alt="${r.name}">
        <h3>${r.name}</h3>
        <p>${r.details}</p>
      `;
      recipeContainer.appendChild(card);
    });
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = recipes.filter((r) =>
      r.name.toLowerCase().includes(query)
    );
    displayRecipes(filtered);
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      if (category === 'All') displayRecipes(recipes);
      else {
        const filtered = recipes.filter((r) => r.category === category);
        displayRecipes(filtered);
      }
    });
  });

  displayRecipes(recipes);
});
