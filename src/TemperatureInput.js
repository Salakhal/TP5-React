function TemperatureInput({ temperature, onTemperatureChange, label = 'Température', unit = '°C' }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      onTemperatureChange(value);
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        value={temperature}
        onChange={handleChange}
        placeholder={`${label} en ${unit}`}
      />
    </div>
  );
}

export default TemperatureInput;