function Homepage(props) {
  const { player } = props;
  return (
    <div className="App">
      <h1>NBA App</h1>
      <p>{player.firstname}</p>
    </div>
  );
}

export default Homepage;
