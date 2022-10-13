import React from "react";
import "./App.css";

function App() {
  const [colors, setColors] = React.useState([
    "#006FB4",
    "#89399C",
    "#E00034",
    "#E26721",
    "#009F9F",
    "#2B8230",
    "#FFFFFF",
    "#000000",
  ]);
  const [txt, setTxt] = React.useState("#000000");
  const [title, setTitle] = React.useState("#000000");
  const [back, setBack] = React.useState("#FFFFFF");

  const [light, setLight] = React.useState("400%");
  const [dark, setDark] = React.useState("50%");
  const [high, setHigh] = React.useState("800%");

  const [contrast,setContrast] = React.useState("");
  return (
    <div className="App">
      <div className="leftpart">
        <h2>Adjustments</h2>
        <div className="colorbox">
          <p>Adjust Text Color</p>
          <div className="colorss">
            {colors.map((i) => (
              <div
                onClick={() => {
                  setTxt(i);
                }}
                className="colorcircle"
                style={{ backgroundColor: i }}
              >
                {txt === i ? (
                  <div
                    className="activepart"
                    style={{ backgroundColor: "rgb(211, 219, 217)" }}
                  ></div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="colorbox">
          <p>Adjust Title Color</p>
          <div className="colorss">
            {colors.map((i) => (
              <div
                onClick={() => {
                  setTitle(i);
                }}
                className="colorcircle"
                style={{ backgroundColor: i }}
              >
                {title === i ? (
                  <div
                    className="activepart"
                    style={{ backgroundColor: "rgb(211, 219, 217)" }}
                  ></div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="colorbox">
          <p>Adjust Background Color</p>
          <div className="colorss">
            {colors.map((i) => (
              <div
                onClick={() => {
                  setBack(i);
                }}
                className="colorcircle"
                style={{ backgroundColor: i }}
              >
                {back === i ? (
                  <div
                    className="activepart"
                    style={{ backgroundColor: "rgb(211, 219, 217)" }}
                  ></div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="colorss">
                  <div className="bottombox" onClick={()=>{setContrast(dark)}}>
                  <i class="fa-solid fa-moon" style={{fontSize:"25px"}}></i>
                  <p>Dark Contrast</p>
                  </div>

                  <div className="bottombox" onClick={()=>{setContrast(light)}} >
                  <i class="fa-solid fa-sun"  style={{fontSize:"25px"}}></i>
                  <p>Light Contrast</p>
                  </div>

                  <div className="bottombox"  onClick={()=>{setContrast(high)}}>
                  <i class="fa fa-adjust" aria-hidden="true"  style={{fontSize:"25px"}}></i>
                  <p>High Contrast</p>
                  </div>
        </div>
      </div>

      <div className="rightpart">
        <header className="App-header" style={{ backgroundColor: back,filter:`brightness(${contrast})` }}>
          <h1 style={{ color: title }}>Lorem ipsum</h1>
          <p style={{ color: txt }}>
            Lorem ipsum dolor sit amet. Ut rerum suscipit rem rerum nesciunt et
            soluta quibusdam eum repellendus expedita. In dolores Quis aut
            voluptas itaque est natus consequatur ut voluptate excepturi aut
            dolorem dolorum sed voluptas sint. Qui numquam ipsum est quisquam
            voluptatem vel voluptatem internos sed reprehenderit enim 33 esse
            molestiae a animi sunt. Sed cupiditate laborum ea consequuntur
            debitis et dolore quis quo reiciendis excepturi.
            <br />
            Vel esse expedita non dolore adipisci qui officiis magnam At
            voluptate temporibus At minima quasi eum rerum placeat id laudantium
            omnis. Aut delectus iusto ea deserunt assumenda quo odit recusandae
            non itaque voluptatum. Ex consequuntur cupiditate est corporis sequi
            est laboriosam nobis. Non odit officia ut error quia et incidunt
            sint et quisquam veritatis et asperiores voluptate ex exercitationem
            assumenda?
            <br />
            In ducimus quaerat est quidem repellat sit quam deleniti? Qui
            similique autem ut repellat fugiat nam numquam corrupti non quaerat
            soluta.
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
