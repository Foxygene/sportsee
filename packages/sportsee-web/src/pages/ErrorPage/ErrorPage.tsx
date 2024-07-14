import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <p>Oups, an error occured while fecthing data</p>
      <Link to="/">Return to Home</Link>
    </>
  );
}
