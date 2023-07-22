import styled from 'styled-components';

interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: any;
}

const Button = ({ text, type, onClick, className }: ButtonProps) => {
  return (
    <Register className={className} type={type} onClick={onClick}>
      {text}
    </Register>
  );
};

export default Button;

const Register = styled.button`
  font-family: 'Digitalt', sans-serif;
  font-weight: 500;
  font-size: 23px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  border: 1px solid #000000;
  text-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  background: #67eb00;
  border-radius: 26px;
  display: flex;
  height: 61px;
  align-items: center;
  justify-content: center;
  margin: 0.5em auto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 3;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background-color: #4ec407;
    /* round on one side slant on the other*/
    clip-path: polygon(0 0, 100% 0, 10% 66%, 0 100%);
    -webkit-clip-path: polygon(0 0, 70% 66%, 100% 100%, 0 100%);
    transition: all 0.2s ease-in-out;
    border-radius: 26.1429px 0 0 26.1429px;
    z-index: -1;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease;
    background: #4ec407;
    border: 3.48571px solid #ffffff;
    box-shadow: 0px 3.48571px 0px rgba(0, 0, 0, 0.15);
    border-radius: 26.1429px;
    opacity: 0.8;
  }

  &:hover {
    background: #4ec407;
    text-shadow: 0px 1.74286px 0px rgba(0, 0, 0, 0.15);
    border: 1px solid #000000;
  }
`;
