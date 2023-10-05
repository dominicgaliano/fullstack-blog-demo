import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Register</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/feed`}>Feed</Link>
        </li>
      </ul>
    </nav>
  );
}
