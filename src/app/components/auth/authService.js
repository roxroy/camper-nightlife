  const submitSignup = user => {
    const body = JSON.stringify(user);
    console.log('submitSignup', user);
    fetch('/signup',
      {
        method: 'POST', credentials: 'include',
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
    submitSignup
  }