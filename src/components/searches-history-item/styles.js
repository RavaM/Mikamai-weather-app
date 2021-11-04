import styled from 'styled-components/macro'

export const Container = styled.div`
  background: #fff;
  margin-bottom: 20px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const City = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 8px;
`;

export const Date = styled.div`
  font-size: 0.75rem;
  margin-left: 8px;
`;

export const Close = styled.div`
  background: #ff0000;
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .3s;
  height: 100%;

  &::before {
    content:'\u2715';
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background: #d60000;
  }
`;

export const Clickable = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 12px 16px;
`;

