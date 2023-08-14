import styled from "styled-components";
import Title from "../components/Title";

const Home = () => {
  return (
    <HomeContainer className="standard-dialog">
      <Title title="Welcome to HK's Blog" size={3} />
    </HomeContainer>
  )
}

export default Home;

const HomeContainer = styled.div`
  flex: 8;
  height: 100vh;
  margin: .9rem .5rem;
`