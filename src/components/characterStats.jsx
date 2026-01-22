import "./characterStats.css";

export default function CharacterStats({ stats, onStatChange }) {
  const statsList = [
    { key: "str", label: "STR" },
    { key: "dex", label: "DEX" },
    { key: "con", label: "CON" },
    { key: "int", label: "INT" },
    { key: "wis", label: "WIS" },
    { key: "cha", label: "CHA" },
  ];
  return (
    <div className="stat-list">
      {statsList.map((stat) => (
        <div className="stat-block" key={stat.key}>
          <div className="stat-label">{stat.label}</div>
          <input
            type="text"
            className="stat-input"
            value={stats[stat.key || ""]}
            onChange={(e) =>
              onStatChange({ ...stats, [stat.key]: e.target.value })
            }
          />
        </div>
      ))}
    </div>
  );
}
