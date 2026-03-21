const USAFlag = () => {
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  const starsRow1 = Array.from({ length: 6 }, (_, i) => i);
  const starsRow2 = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="animate-flag-ripple origin-right drop-shadow-2xl">
      <svg
        viewBox="0 0 494 350"
        className="w-full h-full animate-flag-wave"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stripes */}
        {stripes.map((i) => (
          <rect
            key={`stripe-${i}`}
            x="0"
            y={i * (350 / 13)}
            width="494"
            height={350 / 13}
            fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
          />
        ))}

        {/* Blue canton */}
        <rect x="0" y="0" width="198" height={350 * 7 / 13} fill="#3C3B6E" />

        {/* Stars - 9 rows alternating 6 and 5 stars */}
        {Array.from({ length: 9 }, (_, row) => {
          const isEvenRow = row % 2 === 0;
          const starCount = isEvenRow ? 6 : 5;
          const offsetX = isEvenRow ? 16.5 : 33;
          return Array.from({ length: starCount }, (_, col) => {
            const cx = offsetX + col * 33;
            const cy = 12 + row * 19.5;
            return (
              <polygon
                key={`star-${row}-${col}`}
                points={starPoints(cx, cy, 5, 2.2)}
                fill="#FFFFFF"
              />
            );
          });
        })}
      </svg>
    </div>
  );
};

function starPoints(cx: number, cy: number, outerR: number, innerR: number): string {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / 2) + (i * Math.PI / 5);
    points.push(`${cx + r * Math.cos(angle)},${cy - r * Math.sin(angle)}`);
  }
  return points.join(" ");
}

export default USAFlag;
