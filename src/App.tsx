
import "./App.css";

function App() {

  return (
    <>
      {/* // Title for the page using a regular HTML <h1> tag */}
      <h1>Vite + React + Tailwind</h1>
      {/*  Heading styled with Tailwind CSS classes (text size and color) */}
      <h1 className="text-3xl text-blue-500">Anup Shrestha React Project</h1>
      {/* A simple paragraph welcoming the user */}
      <p>Welcome to my first react project sensei !</p>
      {/* Bold paragraph indicating a section about favorite games */}
      <p className="font-bold">My Favourite Games</p>
      {/* Unordered list of favorite games */}
      <ul>
        <li>GTA</li> {/* First favorite game */}
        <li>FIFA</li> {/* Second favorite game */}
        <li>PUBG</li> {/* Third favorite game */}
      </ul>
      {/* Image with a blue border and rounded corners using Tailwind classes */}
      <img
        src="https://t3.ftcdn.net/jpg/04/12/20/88/360_F_412208819_p2xdpYNdB6CeUQeYMI6c1V2D8Y94f5sK.jpg"
        className="border-4 border-blue-500 rounded-lg"
        alt="Country Flag"
      />{" "}
      {/* Displaying an image with a styled border and alt text */}
    </>
  );
}

export default App;
