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
          return  resolve(json);
        })
        .catch(e => {
          console.log('error search results:', e);
          return reject(new Error(e.statusText))
        })
      });
  }

  const barRsvp = (barId) => {

    const body = JSON.stringify({barId});
    const url = '/yelp/rsvp';
    return fetch(url,
      {
        method: 'POST', 
        credentials: 'include',
        body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .catch(error  => {
        return error
      })
}

  module.exports = {
    barSearch,
    barRsvp,
  }