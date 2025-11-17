export default function StatsChart({ stats }) {

  const maxValue = 100; 

  return (
    <div className="bg-gray-200 rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Stats</h2>

      <div className="grid grid-cols-6 gap-4 text-center">
        {stats.map((s) => {
          const statValue = Math.min(s.base_stat, maxValue);
          const filledHeight = (statValue / maxValue) * 100;

          return (
            <div key={s.stat.name} className="flex flex-col items-center flex-">
              <div className="relative w-full h-32 border border-gray-600 rounded-md overflow-hidden">
                <div className="absolute inset-0 grid grid-rows-10"></div>

                <div
                  className="absolute bottom-0 left-0 right-0 bg-blue-500"
                  style={{ height: `${filledHeight}%` }}
                />
              </div>

              <span className="mt-2 text-sm font-medium text-black text-center">
                {formatStat(s.stat.name)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formatStat(name) {
  switch (name) {
    case "hp":
      return "HP";
    case "attack":
      return "Attack";
    case "defense":
      return "Defense";
    case "special-attack":
      return "Special Attack";
    case "special-defense":
      return "Special Defense";
    case "speed":
      return "Speed";
    default:
      return name;
  }
}
