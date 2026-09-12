import { useState, useEffect, useRef } from "react";
import { SearchCity } from "../services/weatherApi";

export default function SearchBar({ onSelectCity }) {

    const [query, setQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const debounceRef = useRef(null);
    const skipNextSearch = useRef(false);

    useEffect(() => {
        if (skipNextSearch.current) {
            skipNextSearch.current = false;
            return;
        }

        clearTimeout(debounceRef.current);

        if (query.trim().length < 2) {
            setSuggestion([])
            return;
        }

        debounceRef.current = setTimeout(async () => {
            try {
                const results = await SearchCity(query)
                setSuggestion(results)
            } catch {
                setSuggestion([])
            }
        }, 400)
        return () => clearTimeout(debounceRef.current)

    }, [query])

    function handleSelect(s) {
        skipNextSearch.current = true;
        onSelectCity(s);
        setSuggestion([])
        setQuery(`${s.name}, ${s.state ? s.state + ", " : ""}${s.country}`)
    }
    return (
        <div className="relative p-6 gap-2">
            <input
                type="text"
                placeholder="search City"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-3 bg-white rounded-lg shadow w-full outline-none text-black"
            />
            {
                suggestion.length > 0 && (
                    <ul className="absolute z-10  top-20 rounded-lg bg-white w-full shadow mt-1 text-black">
                        {suggestion.map((s, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(s)}
                                className="p-2 hover:bg-sky-100 cursor-pointer"
                            >
                                {s.name}, {s.state ? s.state + ", " : ""}{s.country}
                            </li>
                        ))}
                    </ul>
                )
            }

        </div>

    )
}