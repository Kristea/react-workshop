export default `componentDidMount () {
  fetch({
    'https://gbptm-ui.herokuapp.com/loos/near/23.592/46.769',
    {
      headers: new Headers({'Accept': 'application/json'})
    }
  })
  .then(
    res => res.json()
  )
  .then(
    data => this.setState(
      () => ({ geojson: data })
    )
  );
}





async componentDidMount() {
  const res = await fetch(
    'https://gbptm-ui.herokuapp.com/loos/near/23.592/46.769',
    {
      headers: new Headers({'Accept': 'application/json'})
    }
  )
  const geojson = await res.json()
  this.setState({ geojson })
}




`;
