import "./Home.css";
export default function Home() {
  // navigation system
  // header
  // tagline 

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


        </div>
        <div className="Why">
            <h2> Why Paveway? </h2>
            <div className="why_graphic_explanation">
                <div className="why_img">
                    <div className="holder_image"></div>
                </div>
                <div className="why_text">
                    <p> According to the National Library of Medicine, the “lowest paid unskilled worker pays 1.4 to <b>9.3 days’ wages</b> for a month supply” of insulin due to favoring of imported insulin. </p>
                </div>
            </div>
            <p>We want to make insulin pens more affordable by producing them in India.</p>
        </div>
        <div className="About">
            <h2> How does it work? </h2>
            <div className="holder_image"></div>

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
                <div className="holder_image"></div>
            </div>

        </div>
        <div className="Footer">
            <button> Contact Us </button>
            <p> Copyright © 2024</p>
        </div>  
    </div>
  );
}

