import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 20px;
  padding-bottom: calc(20px + var(--footer-height));
  width: 100%;
  position: relative;
  flex: 1;
  height: calc(100% - var(--header-height));
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    height: 100%;
    width: 30px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      ${props => props.prevBg ? props.prevBg : "transparent"} -50px,
      ${props => props.bgColor}
    );
  }

  &::after {
    content: '';
    height: 100%;
    width: 30px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      ${props => props.bgColor},
      ${props => props.nextBg ? props.nextBg : "transparent"} 50px
    );
    
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  z-index: 1;

  @media screen and (min-width: 1025px) {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.p`
  color: #fff;
  font-size: 4rem;
`;

export const Date = styled.p`
  color: #333;
  text-transform: uppercase;
  font-size: 3rem;
`;

export const IconContainer = styled.div`
  width: 100%;
  max-width: 40vh;
  margin: 0 auto;

  > svg {
    width: 100% !important;
    object-fit: contain;
    height: auto;
    fill: #fff;
    margin-top: -30px;
    margin-bottom: -10px;
    transform: translateY(5%) scale(1.1);
  }

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -60%) scale(1.5);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Temperature = styled.p`
  color: #333;
  text-transform: uppercase;
  font-size: 2rem;

  > .big {
    font-size: 3rem;
  }
`;

export const Weather = styled.p`
  color: #333;
  text-transform: uppercase;
  font-size: 2.7rem;
`;