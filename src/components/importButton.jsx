import "./importButton.css";

export default function ImportButton({ onFileSelect }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };
  return (
    <div className="import-button-container">
      <label className="import-button">
        Upload Character Sheet
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden-input"
        />
      </label>
    </div>
  );
}
