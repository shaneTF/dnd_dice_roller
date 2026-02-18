import "./characterLevel.css";

export default function CharacterLevel({
  characterLevel,
  characterLevelChange,
}) {
  return (
    <div className="lvl-block">
      <div className="lvl-label">LVL</div>
      <input
        type="text"
        className="lvl-input"
        value={characterLevel}
        onChange={(e) => characterLevelChange(e.target.value)}
      />
    </div>
  );
}
