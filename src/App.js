import imageSource from "./imageSource.png";
import "./style.css";

function App() {
  return (
    <div className="App">
     <div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title_red">Mouadh ZIDI</h1>
    <br />
    <img className="img" src={imageSource} alt ='imageInSrC' />
    <h1 className="image-text">image in Src</h1>
    <br />
    <img className="img" src="/img/imagePublic.png" alt ='imageInPublic'/>
    <h1 className="image-text">image in Public</h1>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
    </div>
  );
}

export default App;
