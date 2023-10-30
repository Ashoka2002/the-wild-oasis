import styled from "styled-components";

const NoticeContainer = styled.div`
  height: 100vh;
  overflow: auto;
  text-align: center;
  padding: 20px;
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

const ExploreText = styled.p`
  padding: 1rem;
  font-size: 1rem;
  color: #0cc754;
  margin-top: 10px;
`;

function IsResponsive() {
  return (
    <NoticeContainer>
      <NoticeText>
        This webpage is optimized for screens 1224px and above. It is not
        responsive for smaller devices. For the best experience, please use a
        desktop or a device with a screen size of 1224px or larger.
      </NoticeText>
      <ExploreText>
        If you wish to explore, consider using the desktop mode in your browser.
      </ExploreText>
    </NoticeContainer>
  );
}

export default IsResponsive;
