import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://hlafvlrngevjbhugkhxh.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-10-11T13%3A24%3A48.736Z"
        alt="cabin"
      />
    </Row>
  );
}

export default Cabins;
