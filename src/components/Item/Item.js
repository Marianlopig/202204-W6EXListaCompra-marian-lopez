import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const Item = () => {
  return (
    <>
      <StyledArticle className="row">
        <StyledCheckboxContainer className="col">
          <input type="checkbox" />
        </StyledCheckboxContainer>
        <StyledArticleName className="px-0 col">Pan</StyledArticleName>
        <StyledPrice className="col">0.75€</StyledPrice>
        <a href="delete-article" className="col">
          <FaTimes className="icon" />
        </a>
      </StyledArticle>
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default Item;
