  const barSearch = (location) => {

    return new Promise(function(resolve, reject) {  
      const url = `/yelp/${location}`;
      fetch(url,
        {
          method: 'GET', 
          credentials: 'include'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error(`status ${response.status}`);
          }
          return response.json();
        })
        .then(json => {
          console.log('search results:', json);
          return  resolve(json);
        })
        .catch(e => {
          console.log('error search results:', e);
          return reject(new Error(e.statusText))
        })
      });
  }

  module.exports = {
    barSearch
  }