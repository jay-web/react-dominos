import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { IRootState } from "../store";

function Home() {
  const username = useSelector((state: IRootState) => state.user.username);
  return (
    <div className="text-center font-semibold my-10 px-4">
      <h1 className="mb-4 text-xl text-stone-500 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">Straight out of the oven, straight to you.</span>
      </h1>
     { username == "" ? <CreateUser /> :  <Button type="small" to="/menu">Place your Order, {username}</Button>}
    </div>
  );
}

export default Home;
