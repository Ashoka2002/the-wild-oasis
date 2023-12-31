import styled from "styled-components";

const NoticeContainer = styled.div`
  height: 100vh;
  overflow: auto;
  text-align: center;
  padding: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-color: #111827;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NoticeText = styled.p`
  padding: 1rem;
  font-size: 1.5rem;
  color: #f9fafb;
  text-align: center;
`;

function IsResponsive() {
  return (
    <NoticeContainer>
      <NoticeText>
        This webpage is optimized for screens 1024px and above. It is not
        responsive for smaller devices. For the best experience, please use a
        desktop or a device with a screen size of 1024px or larger.
      </NoticeText>
    </NoticeContainer>
  );
}

export default IsResponsive;
