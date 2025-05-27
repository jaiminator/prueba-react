import Titulito from './components/Titulito'
import './App.css'
import Human from './components/Human'

function App() {

  const humansArray = [
        {name: "Nico", planet: "Earth", image: "https://photojournal.jpl.nasa.gov/browse/PIA00114.gif"},
        {name: "Jorge", planet: "Mars", image: "https://styles.redditmedia.com/t5_2qku9/styles/communityIcon_z5gbxg4feoe31.jpg?format=pjpg&s=69cb64628c9f8ee4d2496c4c432a800f59a4bb55"},
        {name: "Felipe", planet: "Neptune", image: "https://b.thumbs.redditmedia.com/9KPMHfkLV9M3LRTGllY2IYf3vA3lpK8hiyblPFB4Fik.png"},
    ];

  return (
    <>
      <h2>List of humans</h2>
      {humansArray.map((humanElem) => <Human humanProp={humanElem}/>)}
    </>
  )
}

export default App
