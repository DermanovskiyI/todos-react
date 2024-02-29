import { Outlet, Link } from 'react-router-dom';
import './index.css';

export default function RootLayout() {
  return (
    <div>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/todo">About</Link>
        <Link to="/account">Account</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
