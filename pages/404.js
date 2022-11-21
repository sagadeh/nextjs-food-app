import Link from "next/link";
import classes from "../styles/PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <section className={classes.wrapper}>
      <div>
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <span className={classes.HomePage}>Home Page</span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
