function List(props) {
  if(!props.animals) {
    return <p>Loading...</p>
  }
  if (props.animals.length === 0) {
    return <p>No animals found</p>
  }
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>
      })}
    </ul>
  )
}

function Conditional_render() {
  const animals = []

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export default Conditional_render