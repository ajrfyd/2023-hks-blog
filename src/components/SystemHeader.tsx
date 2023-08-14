import styled from "styled-components";

type SystemHeaderProps = {
  title: string;
}

const SystemHeader = ({ title }: SystemHeaderProps) => {

  return (
    <HeaderContainer className="title-bar">
      <button className="close"/>
      <h1 className="title">{title}</h1>
      <button className="resize"/>      
    </HeaderContainer>
  )
}

export default SystemHeader;

const HeaderContainer = styled.div`
  
`