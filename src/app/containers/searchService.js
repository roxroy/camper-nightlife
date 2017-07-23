  const barSearch = (location) => {
    const body = JSON.stringify(location);
    console.log('barSearch', body);
    fetch('/yelp',
      {
        method: 'GET', credentials: 'include',
        body: body,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
        });
      })
      .catch(e => {
      })
  }

  module.exports = {
    barSearch
  }