import Link from "next/link";

const Header = () => (
  <div>
    <h1>Developer Portfolio</h1>

    <div className="linksClass">

      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>

    {/* Styling for header #dedede*/}
    <style jsx>{`
    a {
        margin-right: 1rem;
    }
    .logoAndHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.2rem;
        border-bottom: 1px solid #f0f0f0;
        box-shadow: 3px 0px 8px #f0f0f0;
    }
    .linksClass {
        margin-left: auto;
        margin-right: 1rem;
    }
    h1 {
        display: inline;
        margin-right: 1rem;
        font-size: 2rem;
    }
      }
    `}</style>
  </div>
);

export default Header;
