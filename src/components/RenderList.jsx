// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// function RenderList() {
//   const listItems = people.map((person) => <li key={person}>{person}</li>);
//   return (
//     <>
//       <h1>Scientists</h1>
//       <ul>{listItems}</ul>
//     </>
//   )
// }

// export default RenderList


function getImageUrl(person) {
  return (
    `/assets/images/${person.name}.jpg`
  )
}

const people = [{
  id: 0,
  name: "Creola Katherine Johnson",
  profession: "mathematician",
  accomplishment: "spaceflight calculations",
  imageId: "szV5sdG"
}, {
  id: 1,
  name: "Mario José Molina-Pasquel Henríquez",
  profession: "chemist",
  accomplishment: "discovery of Arctic ozone hole",
  imageId: "aVY44A0"
}, {
  id: 2,
  name: "Mohammad Abdus Salam",
  profession: "physicist",
  accomplishment: "electromagnetism theory",
  imageId: "bE7W1ji"
}, {
  id: 3,
  name: "Percy Lavon Julian",
  profession: "chemist",
  accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
  imageId: "rN7hYRS"
}, {
  id: 4,
  name: "Subrahmanyan Chandrasekhar",
  profession: "astrophysicist",
  accomplishment: "white dwarf star mass calculations",
  imageId: "lrWQx8l"
}];

function RenderList() {
  const chemists = people.filter(person => person.profession === "chemist");
  const listItems = chemists.map(person => (
    <li key={person.id}>
      <img 
        src={getImageUrl(person)} 
        alt={person.name} 
        style={{width: '100px', height: '100px'}}
      />
      <p>
        <b>{person.name}:</b> 
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default RenderList;
