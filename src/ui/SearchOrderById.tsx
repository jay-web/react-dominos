import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
    const [query, setQuery ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate(`/order/${query}`);
        setQuery("");
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} 
        placeholder="Search order by id"
        className="rounded-full 
                        px-4 py-2 
                        transition-all 
                        duration-300 text-sm 
                        bg-yellow-100
                        placeholder:text-stone-400 
                        sm:focus:w-72 w-28 focus:outline-none focus:ring focus:ring-yellow-600
                        sm:w-64 "
         />
    </form>
}

export default SearchOrder;