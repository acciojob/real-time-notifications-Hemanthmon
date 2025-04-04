fetch('people.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => {
    const sortedData = data.sort((a, b) => a.age - b.age); // ascending by age
    console.log('Sorted Data (by age):', sortedData);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
