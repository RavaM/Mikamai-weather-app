import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: 1px solid black;
  background-color: #fff;
  height: var(--header-height);
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

export const Inner = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1025px) {
    max-width: 1366px;
    margin: 0 auto;
  }
`;

export const ButtonLink = styled.div`
  > a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1.3rem;
    color: #32bebd;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #32bebd;
      border-radius: 2px;
      transition: all .3s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
