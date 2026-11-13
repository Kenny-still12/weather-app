const pattern = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const light = {
    text: "text-stone-800",
    muted: "text-stone-500",
    tile: "bg-white/70 border-stone-900/5",
};

const dark = {
    text: "text-slate-100",
    muted: "text-slate-400",
    tile: "bg-slate-950/40 border-white/10",
};

const themes = {
    Clear: {
        ...light,
        card: "bg-amber-50 border-amber-200",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'>" +
            "<circle cx='6' cy='6' r='1.6' fill='#d97706' fill-opacity='0.22'/>" +
            "<circle cx='24' cy='24' r='1.6' fill='#d97706' fill-opacity='0.22'/>" +
            "</svg>"
        ),
    },
    Clouds: {
        ...light,
        card: "bg-slate-100 border-slate-200",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='48' height='24'>" +
            "<path d='M0 16 Q12 6 24 16 T48 16' fill='none' stroke='#475569' stroke-opacity='0.12' stroke-width='1.5'/>" +
            "</svg>"
        ),
    },
    Rain: {
        ...dark,
        card: "bg-slate-800 border-slate-700",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>" +
            "<line x1='8' y1='2' x2='5' y2='10' stroke='#94a3b8' stroke-opacity='0.25' stroke-width='1.5' stroke-linecap='round'/>" +
            "<line x1='20' y1='14' x2='17' y2='22' stroke='#94a3b8' stroke-opacity='0.25' stroke-width='1.5' stroke-linecap='round'/>" +
            "</svg>"
        ),
    },
    Thunderstorm: {
        ...dark,
        card: "bg-zinc-900 border-zinc-700",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'>" +
            "<path d='M20 8 l-6 12 h7 l-5 12' fill='none' stroke='#facc15' stroke-opacity='0.14' stroke-width='1.5' stroke-linejoin='round'/>" +
            "</svg>"
        ),
    },
    Snow: {
        ...light,
        card: "bg-sky-50 border-sky-100",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'>" +
            "<g stroke='#0369a1' stroke-opacity='0.15' stroke-width='1.2' stroke-linecap='round'>" +
            "<line x1='8' y1='5' x2='8' y2='11'/><line x1='5' y1='8' x2='11' y2='8'/>" +
            "<line x1='24' y1='21' x2='24' y2='27'/><line x1='21' y1='24' x2='27' y2='24'/>" +
            "</g></svg>"
        ),
    },
    Fog: {
        ...light,
        card: "bg-stone-100 border-stone-200",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='60' height='20'>" +
            "<line x1='4' y1='6' x2='34' y2='6' stroke='#57534e' stroke-opacity='0.12' stroke-width='2' stroke-linecap='round'/>" +
            "<line x1='26' y1='15' x2='56' y2='15' stroke='#57534e' stroke-opacity='0.12' stroke-width='2' stroke-linecap='round'/>" +
            "</svg>"
        ),
    },
    Default: {
        ...light,
        card: "bg-white border-stone-200",
        pattern: pattern(
            "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>" +
            "<circle cx='2' cy='2' r='1' fill='#78716c' fill-opacity='0.18'/>" +
            "</svg>"
        ),
    },
};

const aliases = {
    Drizzle: "Rain",
    Mist: "Fog",
    Smoke: "Fog",
    Haze: "Fog",
    Dust: "Fog",
    Sand: "Fog",
    Ash: "Fog",
    Squall: "Fog",
    Tornado: "Thunderstorm",
};

export default function getWeatherTheme(condition) {
    return themes[aliases[condition] ?? condition] ?? themes.Default;
}
