//Import layout component
import Layout from "../components/Layout";

export default () => (
  <Layout>
      <div className="style">
        <div>
          <b>Email:</b> <u>kempstephanentatangwa@gmail.com</u>
        </div>

        <div>
          <b>Github repository:</b>{" "}
          <a href="https://github.com/kempstephane">
            https://github.com/kempstephane
          </a>
        </div>

        <div>
          <b>Linkedin:</b>{" "}
          <a href="https://www.linkedin.com/in/kemp-stephane-ntatangwa-649206252">
            www.linkedin.com/in/Kemp- Stephane-Ntatangwa
          </a>
        </div>
      
    </div>

   {/* Styling for contact page */}
   <style jsx>{`
      .style {
        padding: 70px 0;
        border: 3px solid green;
        text-align: center;
      }
     
      
    `}</style>
  </Layout>
);
