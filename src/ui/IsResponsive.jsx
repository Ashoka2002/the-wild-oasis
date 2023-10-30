import styled from "styled-components";

const NoticeContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NoticeText = styled.p`
  padding: 1rem;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
`;

const ExploreText = styled.p`
  font-size: 2rem;
  color: #666;
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
