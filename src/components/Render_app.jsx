import React from 'react'

// const Render_app = () => {
//   const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
//   const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
//   return (
//     <div>
//       <h1>Animals: </h1>
//       <ul>
//         {animalsList}
//       </ul>
//     </div>
//   )
// }

// export default Render_app

function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />
      })}
    </ul>
  )
}

function Render_app() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard']

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  )
}

export default Render_app

