//Import components
import Layout from "../components/Layout";

// Projects page
export default () => (
  <Layout>
    <div className="style">
      <h1>My Projects</h1>

      <li>
        <b>My iTunes app </b>
        <br /> Created with HTML, CSS, Javascript, React, Node and Express <br />
        <a href="https://github.com/kemp-stephane/iTunes"> https://github.com/kemp-stephane/iTunes </a>
      </li>
      .............................................................
        <br/><br/>

      <li>
        <b>Online Store with Shopping Cart </b>
        <br /> Created with HTML, CSS, Javascript <br />
        <a href="https://github.com/kemp-stephane/Capstone-Project"> https://github.com/kemp-stephane/Capstone-Project </a>
      </li>
      .............................................................
        <br/><br/>

      <li>
        <b>Flipping Game </b>
        <br /> Created with HTML, CSS, Javascript, React <br />
        <a href="https://github.com/kemp-stephane/task12"> https://github.com/kemp-stephane/task12 </a>
      </li>
      .............................................................
        <br/><br/>

      <li>
        <b>Music </b>
        <br /> Created with HTML, CSS, Javascript            <br />
        <a href="https://github.com/kemp-stephane/project"> https://github.com/kemp-stephane/project </a>
      </li>
      .............................................................
        <br/><br/>

      <li>
        <b>Database </b>
        <br /> Created with Mongodb, CSS, React, Node and Express              <br />
        <a href="https://github.com/kemp-stephane/MongoDB-and-Node-JS"> https://github.com/kemp-stephane/MongoDB-and-Node-JS </a>
      </li>
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
