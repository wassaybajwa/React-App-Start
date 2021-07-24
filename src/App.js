import logo from './logo.svg';
import './App.css';
const fname = "Wassay";
const lname = "Bajwa";
const luckyNumber = 7;
const img = "https://picsum.photos/200";
const customStyle = {
  color: "white",
  fontSize: "15px",
  border: "1px solid"
}
const customStyleTwo = {
  color: ""
}
let greetings = "";
const date = new Date();
const currentTime = date.getHours();
if (currentTime < 12){
  greetings = "Good Morning"
  customStyleTwo.color = "red";
} else {
  if(currentTime < 18){
    greetings = "Good Afternoon"
    customStyleTwo.color = "green"
  }else{
    greetings = "Have a great night"
    customStyleTwo.color = "yellow";
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">This website is created by {fname} {lname}</h1>
        <h3 className="heading" style = {customStyleTwo}>{greetings}</h3>
        <h5 style={customStyle} >Copyright {dateYear()}</h5>
        <img src={img + "?grayscale"} alt="images"></img>

        {/* <h1>
          Hello world i am here now {fname + " " + lname} */}
          {/* ES6 Template literals {`${fname} ${lname}`} */}
          {/* {fname} {lname} */}
        {/* </h1>
        <h3>my lucky number is {Math.floor(Math.random() * 10)}</h3>
        <ul>
          <li>Grapes</li>
          <li>Apples</li>
          <li>Jamon</li>
        </ul> */}
      </header>
    </div>
  );
}

 function dateYear() {
  return (
      <p>{new Date().getFullYear()}</p>
  );
}



export default App;
