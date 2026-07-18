export default function Form({ setCity, handleRequest }) {

    return (
        <form
            action=""
            className="flex justify-center items-center gap-3 p-6"
            onSubmit={(e) => handleRequest(e)}
        >
            <input
                type="text"
                name=""
                id=""
                onChange={(e) => setCity(e.target.value)}
                className="p-3 bg-white rounded-4xl shadow flex-1"
            />
            <button
                type="submit"
                className="p-3 bg-sky-500 rounded-full shadow text-xl text-center text-white bold"
            >search</button>
        </form>

    )
}