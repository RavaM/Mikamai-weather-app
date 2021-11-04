import styled from "styled-components/macro";

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const Container = styled.div`
  position: relative;
  top: 20%;
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  max-width: 550px;
  height: fit-content;
`;

export const Header = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #333;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Body = styled.div`
  padding: 20px 30px;

  @media screen and (min-width: 600px) {
    padding: 40px 30px 45px;
  }
`;

export const Error = styled.div`
  background: orange;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Form = styled.form`

`;

export const Input = styled.input`
  margin-top: 20px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid #333;
  border-radius: 16px;
  font-size: 1.4rem;
  width: 100%;

  &::placeholder {
    font-weight: normal;
  }

  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
    margin-top: 40px;
  }
`;

export const BodyTitle = styled.p`
  font-size: 1.4rem;
  max-width: 100%;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const BodySubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 90%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  border-top: 1px solid #333;
`;

export const Button = styled.button`
  background: #32bebd;
  border: none;
  padding: 8px 16px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (min-width: 600px) {
    padding: 12px 20px;
  }
`;