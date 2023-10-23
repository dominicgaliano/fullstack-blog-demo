import { Link } from 'react-router-dom';

function ErrorPage() {
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

export default ErrorPage;
