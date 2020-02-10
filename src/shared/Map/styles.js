import styled from "styled-components";

export const Pin = styled.div`
  p {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    position: absolute;
    padding: 2px;
    top: -20px;
    transform: translateX(-25%);
  }

  svg {
    fill: ${props => props.theme.sea__green};
  }
`;
