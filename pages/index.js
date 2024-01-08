//Import layout component
import Layout from "../components/Layout";
import Image from "react-bootstrap/Image";
import Link from "next/link";

// Styling for image
const imgStyle = {
    width: 300,
    border: "1px #c9c9c9 solid",
    borderRadius: "9px",
    boxShadow: "2px 2px 8px #c9c9c9",
  };

// About page
export default (props) => (
  <Layout>
        <div className="style">
          <h2><u>About</u></h2>
          <p>
            My name is Kemp Stephane Ntatangwa, i'm from burundi. I love meeting new people. 
            my hobbies is playing tennis and soccer and i'm really good at it. 
            I'm a student who is very passionate in web development. i'm currently
            studying full stack web development and I'm loving the process of learning 
            to build useful websites.
          </p>
        
        
        <div className="image">
        <Image
          src="./static/images/IMG_1047.PNG"
          alt="kemp"
          style={imgStyle}
        />
      </div>

        <div className="education">
          <h3><u>Education</u></h3>

            <div>
              <b>Damelin College</b> <br />
              Higher Certificate in system support <br />
              2016
            </div>
            .............................................................
            <div>
              <b>Damelin College</b> <br />
              Diploma in Information Technology <br />
              2020
            </div>
            .............................................................
            <div>
              <b>HyperionDev</b> <br />
              Full Stack Web Development <br />
              2023 <br />
            </div>
    </div>
    </div>

    {/* Styling for about page */}
    <style jsx>{`
      .style {
        padding: 70px 0;
        border: 3px solid green;
        text-align: center;
      }
     
      
    `}</style>
  </Layout>
);

