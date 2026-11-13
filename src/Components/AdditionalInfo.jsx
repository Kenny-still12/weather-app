import { Droplets, Eye, Gauge, Wind } from "lucide-react";

export default function AdditionalInfo({ weatherResult, theme }) {

    const data = weatherResult.data;

    const stats = [
        { label: "Wind", value: data.wind?.speed, unit: "m/s", Icon: Wind },
        { label: "Humidity", value: data.main?.humidity, unit: "%", Icon: Droplets },
        { label: "Pressure", value: data.main?.pressure, unit: "hPa", Icon: Gauge },
        { label: "Visibility", value: data.visibility != null ? data.visibility / 1000 : null, unit: "km", Icon: Eye },
    ];

    return (
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ label, value, unit, Icon }) => (
                <div key={label} className={`rounded-xl border p-3 ${theme.tile}`}>
                    <p className={`flex items-center gap-1.5 text-xs ${theme.muted}`}>
                        <Icon className="size-3.5" />
                        {label}
                    </p>
                    <p className="mt-1 text-lg font-medium">
                        {value ?? "–"}
                        {value != null && <span className={`ml-1 text-sm font-normal ${theme.muted}`}>{unit}</span>}
                    </p>
                </div>
            ))}
        </div>
    )
}
