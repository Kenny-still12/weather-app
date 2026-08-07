export default function Form({ setCity, handleRequest }) {

    return (
        <form
            className="flex justify-center items-center gap-3 p-6"
            onSubmit={handleRequest}
        >
            <input
                type="text"
                name=""
                id=""
                onChange={(e) => setCity(e.target.value)}
                className="p-3 bg-white rounded-lg shadow flex-1"
            />
            <button
                type="submit"
                className="p-3 bg-sky-500 rounded-lg shadow text-xl text-center text-white bold"
            >search</button>
        </form>

    )
}