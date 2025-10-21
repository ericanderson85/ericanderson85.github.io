function clampMonth(m) {
    return Math.max(1, Math.min(12, m));
}

function toMonthIndex(d) {
    if (d instanceof Date) return d.getFullYear() * 12 + d.getMonth();

    if (typeof d === "string") {
        const match = d.match(/^(\d{4})(?:-(\d{1,2}))?$/);
        if (match) {
            const year = parseInt(match[1], 10);
            const month = match[2] ? clampMonth(parseInt(match[2], 10)) : 1;
            return year * 12 + (month - 1);
        }
        const date = new Date(d);
        return date.getFullYear() * 12 + date.getMonth();
    }

    const year = d.year;
    const month = clampMonth(d.month);
    return year * 12 + (month - 1);
}

function formatMonthYear(d) {
    let date;
    if (d instanceof Date) {
        date = d;
    } else if (typeof d === "string") {
        const parts = d.split("-");
        const year = parseInt(parts[0], 10);
        const month = parts[1] ? clampMonth(parseInt(parts[1], 10)) : 1;
        date = new Date(year, month - 1);
    } else {
        date = new Date(d.year, d.month ? clampMonth(d.month) - 1 : 0);
    }

    return date.toLocaleString("default", { month: "short", year: "numeric" });
}

// cubic bezier path generator for one curved branch
function branchPath(x0, y0, x1, drop) {
    const yEnd = y0 + drop;
    const c1x = x0;
    const c1y = y0 + Math.max(8, drop * 0.9);
    const c2x = x1 - Math.max(10, (x1 - x0) * 0.6);
    const c2y = yEnd;
    return `M${x0} ${y0} C${c1x} ${c1y}, ${c2x} ${c2y}, ${x1} ${yEnd}`;
}

export default function Timeline({
    items = [],
    width = 800,
    pxPerMonth = 18,
    paddingTop = 20,
    paddingBottom = 24,
    spineX = 100,
    labelX = 180,
    branchDrop = 20,
    stroke = "#525252",
    strokeWidth = 2,
    className = "",
}) {
    if (!items.length) return null;

    const sorted = [...items].sort(
        (a, b) => toMonthIndex(a.date) - toMonthIndex(b.date)
    );

    const monthIndices = sorted.map((i) => toMonthIndex(i.date));
    const minIdx = Math.min(...monthIndices);
    const maxIdx = Math.max(...monthIndices);
    const monthsRange = Math.max(1, maxIdx - minIdx);
    const height =
        paddingTop + monthsRange * pxPerMonth + branchDrop + paddingBottom;

    const spineY1 = paddingTop;
    const spineY2 = height - paddingBottom;
    const branchEndX = labelX - 10;
    const dateX = spineX - 20;

    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Curved timeline"
        >
            <line
                x1={spineX}
                y1={spineY1}
                x2={spineX}
                y2={spineY2}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {sorted.map((item, idx) => {
                const mi = monthIndices[idx];
                const y = paddingTop + (mi - minIdx) * pxPerMonth;
                const d = branchPath(spineX, y, branchEndX, branchDrop);

                const labelY = y + branchDrop + 4;
                const descriptionY = labelY + 18;

                return (
                    <g key={`${mi}-${idx}`}>
                        <path
                            d={d}
                            fill="none"
                            stroke={stroke}
                            strokeWidth={strokeWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <text
                            x={dateX}
                            y={labelY}
                            textAnchor="end"
                            className="text-neutral-500 text-sm select-none"
                        >
                            {formatMonthYear(item.date)}
                        </text>

                        <text
                            x={labelX}
                            y={labelY}
                            className="text-sm select-none"
                            fill="#1a1a1a"
                        >
                            <tspan className="font-semibold text-neutral-900">
                                {item.institution}
                            </tspan>
                            {" — "}
                            <tspan className="italic text-neutral-700">
                                {item.label}
                            </tspan>
                        </text>

                        {item.description && (
                            <text
                                x={labelX}
                                y={descriptionY}
                                className="text-neutral-600 text-xs select-none"
                            >
                                {item.description}
                            </text>
                        )}
                    </g>
                );
            })}
        </svg>
    );
}
