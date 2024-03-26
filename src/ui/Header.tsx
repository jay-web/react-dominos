import { useSelector } from "react-redux";
// import SearchOrder from "./SearchOrderById";
import { Link } from "react-router-dom";
import Username from "../features/user/Username";
import { IRootState } from "../store";

const Header = () => {
  const username = useSelector((state:IRootState) => state.user.username);

  return (
    <header className="bg-yellow-500 px-4 py-3 uppercase sm:px-6 flex items-center justify-between">
      <h1 className="tracking-widest">
        <Link to="/"> React Dominos </Link>
      </h1>
      {/* <SearchOrder /> */}
      {username != "" && <Username />}
    </header>
  );
};

export default Header;
