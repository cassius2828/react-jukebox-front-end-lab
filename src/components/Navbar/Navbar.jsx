import { Link } from "react-router-dom";

const navRoutes = [
  { path: "/", text: "home" },
  { path: "/auth/sign-up", text: "sign up" },
  { path: "/auth/sign-in", text: "sign in" },
  { path: "/auth/sign-out", text: "sign out" },
];

const Navbar = () => {
  return (
    <nav>
      <h2>Juke Box</h2>
      <ul>
        {navRoutes.map((item) => {
          return (
            <Link to={item.path} key={item.text + item.path}>
              {item.text}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
