import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--footer-height);
  padding: 0 20px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (min-width: 1025px) {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const City = styled.div`
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
`;

export const Horizontal = styled.div`
  background-color: #fff;
  height: 3px;
  border-radius: 2px;
`;

export const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.3);
  transition: all .3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  > svg {
    font-size: 1.4rem;
  }
`;