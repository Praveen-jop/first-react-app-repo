function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith('L') && <li key={animal}>{animal}</li>
      })}
    </ul>
  )
}

function Conditional_render() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export default Conditional_render