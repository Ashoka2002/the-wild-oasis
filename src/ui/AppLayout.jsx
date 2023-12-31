import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

/* grid-template-columns: 26rem 1fr; */
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  @media only screen and (max-width: 600px) {
    padding: 4rem 4.8rem 6.4rem;
  }
  padding: 4rem 2rem 6.4rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
