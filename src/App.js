import './App.css';
import { placesData } from './data.js';
import {Main} from './components/main.js';
import {Header} from './components/header.js';

function App() {
  const places = placesData.map(item => {
    return (
      <Main
      title={item.title}
      location={item.location}
      url={item.googleMapsUrl}
      start={item.startDate}
      end={item.endDate}
      description={item.description}
      item={item}
      image={item.imageUrl}
      />
    )
  })



  return (
    <div className='whole-div'>
      <Header />
      <section className='places-list'>
        {places}
      </section>
    </div>
  );
}

export default App;
