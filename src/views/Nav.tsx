import styled from "styled-components";
import SystemHeader from '../components/SystemHeader';
import Separator from '../components/Separator';

const Nav = () => {
  return (
    <NavContainer className="window sidebar">
      <SystemHeader title="Menus" />
      <Separator />
      <MenuContainer className="window-pane"/>
    </NavContainer>
  )  
};

export default Nav;

const NavContainer = styled.aside`
  flex: 4;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  
`;