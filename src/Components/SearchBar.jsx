export default function SearchBar({ setCity, handleRequest }) {

    return (
        <form
            className="flex justify-center items-center gap-3 p-6"
            onSubmit={handleRequest}
        >
            <input
                type="text"
                placeholder="search City"
                onChange={(e) => setCity(e.target.value)}
                className="p-3 bg-white rounded-lg shadow flex-1 outline-none text-black"
            />
            <button
                type="submit"
                className="p-3 bg-sky-500 rounded-lg shadow text-xl text-center text-white bold cursor-pointer hover:bg-sky-700 active:translate-y-0.5 active:shadow-sm transition-all"
            >search</button>
        </form>

    )
}