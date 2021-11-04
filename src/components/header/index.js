import { Container, ButtonLink, Inner } from './styles';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Header.Container>
      <Header.Inner>
        <Header.Link to="/">Home</Header.Link>
        <Header.Link to="/search-history">Latest search</Header.Link>
      </Header.Inner>
    </Header.Container>
  )
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Inner = function HeaderInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Header.Link = function HeaderLink({ children, to, ...restProps }) {
  return <ButtonLink><Link to={to}>{children}</Link></ButtonLink>;
}