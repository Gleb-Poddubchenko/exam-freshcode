import React, { useState } from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ onClick }) => {
  const [selected, setSelected] = useState(null);

  const buttons = [
    { label: 'Yes', description: 'But minor variations are allowed', value: 'yes_variations', recommended: true },
    { label: 'Yes', description: 'The Domain should exactly match the name', value: 'yes_exact', recommended: false },
    { label: 'No', description: 'I am only looking for a name, not a Domain', value: 'no', recommended: false },
  ];

  const handleClick = (value) => {
    setSelected(value); // Устанавливаем активную кнопку
    if (onClick) {
      onClick(value); // Передаем значение в родительский компонент
    }
  };

  return (
    <div className="buttonGroup">
      {buttons.map((button) => (
        <div
          key={button.value}
          className={`button ${selected === button.value ? 'active' : ''}`}
          onClick={() => handleClick(button.value)}
        >
          <div className="buttonHeader">
            <span className="buttonLabel">{button.label}</span>
            {button.recommended && <span className="recommended">Recommended</span>}
          </div>
          <p className="buttonDescription">{button.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;