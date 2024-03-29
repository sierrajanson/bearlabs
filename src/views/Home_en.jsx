import "./Home.css";
import Graph from "../components/insulin.png";
import Pen_Expanded from "../components/Pen_Expanded";
import Pen from "../components/Pen";
import MapComponent from "../components/MapComponent";
export default function Home_en() {
  // navigation system
  // header
  // tagline 
    // https://mxd.codes/articles/how-to-create-a-web-map-with-open-layers-and-react
  // circles for design
  // pen componenet
  return (
    <div className="body">
        <div className="Home">
            <h1> Paveway <br></br>Pen </h1>
            <div className="home_circle"></div>
            <div className="home_yellow_circle home_circle"></div>
            <p> 
                <i>affordable quality insulin pens</i><br />
                <i>bengaluru, india</i>
            </p>
            <Pen/>

        </div>
        <div className="Why">
            <h2> Why Paveway? </h2>
            <div className="why_graphic_explanation">
                <div className="why_img">
                    <div className="holder_image why_graph_holder">
                        <img className="why_graph" src={Graph}></img>
                    </div>
                </div>
                <div className="why_text">
                    <p> According to the National Library of Medicine, the “lowest paid unskilled worker pays 1.4 to <b>9.3 days’ wages</b> for a month supply” of insulin due to favoring of imported insulin. </p>
                </div>
            </div>
            <p>We want to make insulin pens more affordable by producing them in India.</p>
        </div>
        <div className="About">
            <h2> How does it work? </h2>
            <div className="about_pen">
                <Pen_Expanded/>       
            </div>

        </div>
        <div className="Locations">
            <h2> Locations Near You </h2>
            <div className="locations_flex_container">
                <div className="locations_flex_text">
                    <h3> Contact us about ordering </h3>
                    <p> Email coming soon!</p>
                    <div className="locations_hours">
                        <p>M TBD-TBD</p>
                        <p>T TBD-TBD</p>
                        <p>W TBD-TBD</p>
                        <p>Th TBD-TBD</p>
                        <p>F TBD-TBD</p>
                    </div>
                </div>
                <div className="holder_image">
                    <MapComponent/>
                </div>
            </div>

        </div>
        <div className="Footer">
            <p> Copyright © 2024</p>
        </div>  
    </div>
  );
}

