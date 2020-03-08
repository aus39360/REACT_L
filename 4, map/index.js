class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name = 'Dan'
          hobbies = {['drink', 'drugs', 'footbal']}
        />
        <Friend 
          name = 'Max'
          hobbies = {['sex', 'drugs', 'drugs']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))