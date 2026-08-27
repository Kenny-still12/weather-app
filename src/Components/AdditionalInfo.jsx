

export default function AdditionalInfo({ weatherResult }) {

    const data = weatherResult.data;

    return (
        <div className="mt-4 p-2 flex gap-2 justify-between text-gray-100 text-xl">
            <div className="flex flex-col items-center-safe">
                <h1>wind</h1>
                <h2 className="text-gray-300">{data.wind?.speed}</h2>
            </div>
            <div className="flex flex-col items-center-safe">
                <h1>humidity</h1>
                <h2 className="text-gray-300">{data.main?.humidity}</h2>
            </div>
            <div className="flex flex-col items-center-safe">
                <h1>pressure</h1>
                <h2 className="text-gray-300">{data.main?.pressure}</h2>
            </div>
            <div className="flex flex-col items-center-safe">
                <h1>visibility</h1>
                <h2 className="text-gray-300">{data.visibility}</h2>
            </div>
        </div>
    )
}