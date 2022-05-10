import styled from "styled-components";
import Item from "../Item/Item";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const List = () => {
  return (
    <>
      <StyledArticles className="list-unstyled col-12"></StyledArticles>
      <Item />
    </>
  );
};

export default List;
