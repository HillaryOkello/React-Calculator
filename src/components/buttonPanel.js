import PropTypes from 'prop-types';
import Button from './button';
import style from './assets/CSS/buttonPanel.module.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  const createButtons = (names) => {
    const items = [];
    for (let i = 0; i < names.length; i += 1) {
      /* eslint max-len: ["error", { "code": 102 }] */
      items.push(<Button name={names[i]} key={i} clickHandler={handleClick} wide={names[i] === 0} />);
    }
    return items;
  };

  return (
    <div className={style.panel}>
      <div className={style.group}>
        {createButtons(['AC', '+/-', '%', '/'])}
      </div>
      <div className={style.group}>
        {createButtons(['7', '8', '9', '*'])}
      </div>
      <div className={style.group}>
        {createButtons(['4', '5', '6', '-'])}
      </div>
      <div className={style.group}>
        {createButtons(['1', '2', '3', '+'])}
      </div>
      <div className={style.group}>
        {createButtons(['0', '.', '='])}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
