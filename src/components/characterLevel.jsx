export default function CharacterLevel({
  characterLevel,
  characterLevelChange,
}) {
  return (
    <div className="stat-block">
      <div className="stat-label">LVL</div>
      <input
        type="text"
        className="stat-input"
        value={characterLevel}
        onChange={(e) => characterLevelChange(e.target.value)}
      />
    </div>
  );
}
