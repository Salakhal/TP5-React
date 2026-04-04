import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  // Exemple: Températures pré-remplies pour démonstration
  const [celsius, setCelsius] = useState('25');
  const [fahrenheit, setFahrenheit] = useState('77');

  const celsiusToFahrenheit = (c) => {
    if (c === '') return '';
    const celsiusNum = parseFloat(c);
    if (isNaN(celsiusNum)) return '';
    return ((celsiusNum * 9/5) + 32).toFixed(1);
  };

  const fahrenheitToCelsius = (f) => {
    if (f === '') return '';
    const fahrenheitNum = parseFloat(f);
    if (isNaN(fahrenheitNum)) return '';
    return ((fahrenheitNum - 32) * 5/9).toFixed(1);
  };

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit(celsiusToFahrenheit(value));
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius(fahrenheitToCelsius(value));
  };

  const getTemperatureAdvice = (temp) => {
    if (!temp) return null;
    const t = parseFloat(temp);
    if (t >= 35) return { icon: '🥵', text: 'Canicule ! Restez au frais et buvez beaucoup d\'eau', color: '#fc8181' };
    if (t >= 30) return { icon: '🔥', text: 'Il fait très chaud ! Évitez les efforts physiques', color: '#f6ad55' };
    if (t >= 25) return { icon: '😎', text: 'Température idéale pour la plage !', color: '#fbd38d' };
    if (t >= 20) return { icon: '😊', text: 'Temps agréable, parfait pour une promenade', color: '#68d391' };
    if (t >= 15) return { icon: '🧥', text: 'Un peu frais, prenez une veste légère', color: '#63b3ed' };
    if (t >= 10) return { icon: '🧣', text: 'Frais ! N\'oubliez pas votre écharpe', color: '#90cdf4' };
    if (t >= 0) return { icon: '❄️', text: 'Froid ! Couvrez-vous bien', color: '#a0aec0' };
    return { icon: '🥶', text: 'Gel ! Restez au chaud à la maison', color: '#cbd5e0' };
  };

  const getExamples = () => {
    const examples = [
      { temp: '0', label: 'Eau gelée' },
      { temp: '20', label: 'Température ambiante' },
      { temp: '37', label: 'Corps humain' },
      { temp: '100', label: 'Eau bouillante' }
    ];
    
    const setExample = (temp) => {
      handleCelsiusChange(temp);
    };

    return (
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {examples.map(ex => (
          <button
            key={ex.temp}
            type="button"
            onClick={() => setExample(ex.temp)}
            style={{ 
              padding: '6px 12px', 
              fontSize: '0.85rem',
              background: 'rgba(255,255,255,0.1)'
            }}
          >
            {ex.temp}°C ({ex.label})
          </button>
        ))}
      </div>
    );
  };

  const advice = getTemperatureAdvice(celsius);
  const fahrenheitAdvice = getTemperatureAdvice(fahrenheitToCelsius(fahrenheit));

  return (
    <div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'rgba(255,255,255,0.8)' }}>
          🌡️ Celsius
        </label>
        <TemperatureInput
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
          label="Celsius"
          unit="°C"
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'rgba(255,255,255,0.8)' }}>
          🌡️ Fahrenheit
        </label>
        <TemperatureInput
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
          label="Fahrenheit"
          unit="°F"
        />
      </div>
      
      {getExamples()}
      
      {celsius && fahrenheit && (
        <div className="temperature-info">
          <p style={{ fontSize: '1.2rem', marginBottom: '8px', fontWeight: 'bold' }}>
            📊 {celsius}°C = {fahrenheit}°F
          </p>
          {advice && (
            <p style={{ marginTop: '8px', color: advice.color }}>
              {advice.icon} {advice.text}
            </p>
          )}
          <div style={{ 
            marginTop: '12px', 
            padding: '10px', 
            background: 'rgba(0,0,0,0.2)', 
            borderRadius: '10px',
            fontSize: '0.9rem'
          }}>
            💡 Formule: °F = (°C × 9/5) + 32
          </div>
        </div>
      )}
    </div>
  );
}

export default TemperatureConvertor;