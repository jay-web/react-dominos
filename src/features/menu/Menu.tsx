import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { IPizza } from "../../types";



function Menu() {
  const menu = useLoaderData() as IPizza[];

  return <>
    <ul className="divide-y divide-stone-300 px-2">
      {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
  </>
}

export default Menu;
