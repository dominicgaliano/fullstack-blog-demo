// import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

import { Link } from 'react-router-dom';

function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{/* <i>{errorMessage(error)}</i> */}</p>
        <Link to={`/feed`}>Return Home</Link>
      </div>
    </>
  );
}

// function errorMessage(error: unknown): string {
//   if (isRouteErrorResponse(error)) {
//     return `${error.status} ${error.statusText}`;
//   } else if (error instanceof Error) {
//     return error.message;
//   } else if (typeof error === 'string') {
//     return error;
//   } else {
//     console.error(error);
//     return 'Unknown error';
//   }
// }

export default ErrorPage;
