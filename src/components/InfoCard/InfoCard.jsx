import styled from "styled-components";
const InfoCard = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.neutral.blue_dark};
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    border-radius: 20px 20px 0 0;
    align-items: start;
`;

export default InfoCard;
