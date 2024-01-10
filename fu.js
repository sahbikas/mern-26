  const cats = [
    {
      name: 'Category 1',
      subchildren: [
        {
          name: 'Category 1.1',
        },
        {
          name: 'Category 1.2',
          subchildren: [
            {
              name: 'Category 1.2.1',
            },
            {
              name: 'Category 1.2.2',
            },
          ],
        },
      ],
    },
    {
      name: 'Category 2',
      subchildren: [
        {
          name: 'Category 2.1',
          subchildren: [
            {
              name: 'Category 2.1.1',
            },
          ],
        },
      ],
    },
  ];
  
  function displayCategories(cats, indentation = 0) {
    cats.forEach(category => {
      console.log(' '.repeat(indentation) + category.name);
      if (category. subchildren) {
        displayCategories(category. subchildren, indentation + 2);
      }
    });
  }
  
  // Call the function to display the nested categories
  displayCategories(cats);
  