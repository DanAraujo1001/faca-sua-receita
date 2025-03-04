import './styles.css';

const Button = ({ value, src, onClick, className}) => {

  return (
    <button className={`container__left__buttons__button ${className}`} onClick={onClick}>
      <img src={src} alt={`${value} icon`} />
    </button>
  );
};

export default Button;
