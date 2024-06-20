// our-domain.com/about-us/
import { Fragment } from "react";
import Link from "next/link";
import { details } from "./[developerId]";

function AboutUsPage() {
  return (
    <Fragment>
      <h1>The About us Page</h1>
      <ul>
        {details.map((item) => (
          <li key={item.id}>
            <Link href={`/about-us/${item.id}`}>{item.role} </Link>{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutUsPage;
