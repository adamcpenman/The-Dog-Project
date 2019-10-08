import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

import { useInput, useLocalStorage } from "./utils/input";
import { useDodImages } from "./utils/api";

function App(props){

const [breed, setBreed] = useLocalStorage('breed', 'husky');
const [count, setCount] = useLocalStorage('count', 1);
// const [images, setImages] = useState([]);
const [images, setImages] = useDodImages(breed, count);

// useEffect (() => {
// //    this.setState({ images: [] })
// setImages([])
//   fetchDogImages()
// }, [breed, count])

// // const handleChange = (event) => {
// //   setBreed(event.target.value)
// //   // this.setState({
// //   //   breed: event.target.value
// //   // })
// // }

//   const fetchDogImages = () => {
//    axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
//   .then(result => {
//     setImages(result.data.message)
//     // this.setState({
//     // images: result.data.message
//     // })
//     console.log(result)
//   })
//   .catch(error => {
//     console.log('error', error)
//   })
// }

  return (
      <div>
        <h1>The Dog Website</h1>
          <select value={breed} onChange={e => setBreed(e.target.value)}>
            <option value="husky">Husky</option>
            <option value="beagle">Beagle</option>
            <option value="corgi">Corgi</option>
            <option value="boxer">Boxer</option>
            <option value="basenji">Basenji</option>
          </select>

          <input  
            type="number"
            placeholder="Image Count"
            value={count}
            onChange={e => setCount(e.target.value)}
          />

          <div className="dogImages">
            {images.map((item, index) => (
              <img key={index} src={item} alt="dog" />
            ))}
          </div>
      </div>
    )
}

// class App extends React.Component{
// //make a controlled input by creating state
// constructor() {
//   super()
//   this.state = {
//     breed: "husky",
//     images: []
//   }
// }

// componentDidMount(){
//   //runs a single time
//     this.fetchDogImages()
// }

// componentDidUpdate(prevProps, prevState) {
//   //calling an if statement to not have an infinite loop
//   if (prevState.breed !== this.state.breed) {
//   //ifinite loop by itself without prevProps, prevState
//  this.setState({
//    images: []
//  })

//  this.fetchDogImages()
// }
// }

// //useEffect(() => {

// // }, [])

// fetchDogImages = () => {
//    axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
//   .then(result => {
//     this.setState({
//     images: result.data.message
//     })
//     console.log(result)
//   })
//   .catch(error => {
//     console.log('error', error)
//   })
// }

// handleChange = (event) => {
//   //change the state
//   this.setState({
//     breed: event.target.value
//   })
// }
//   render() {
//     return (
//       <div>
//         <h1>The Dog Website</h1>
//               {/* //connecting selector with the state above from constructor*/}
//           <select value={this.state.breed} onChange={this.handleChange}>
//             <option value="husky">Husky</option>
//             <option value="beagle">Beagle</option>
//             <option value="corgi">Corgi</option>
//             <option value="boxer">Boxer</option>
//             <option value="basenji">Basenji</option>
//           </select>

//           <div className="dogImages">
//             {/* looping over the images from axios to set them to the display */}
//             {this.state.images.map((item, index) => (
//               <img key={index} src={item} alt="dog" />
//             ))}
//           </div>
//       </div>
//     )
//   }
// }

export default App;
