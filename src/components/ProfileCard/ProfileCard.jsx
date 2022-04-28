import styled from "styled-components";
import { timetype } from "../../constant";
import { br } from "../../Device";
import ProfileImg from "../../images/image-jeremy.png";
import { InfoCard } from "../index";
import PropTypes from "prop-types";

const CardContainer = styled(InfoCard)`
    border-radius: 20px;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    ${br.md} {
        grid-row: span 2;
        flex-direction: column;
    }
`;
const ProfileCardHeader = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    border-radius: 0 0 20px 20px;
    background-color: ${(props) => props.theme.primary.profile};
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    ${br.md} {
        padding: 2em 0 0 1.5em;
        flex-direction: column;
        align-items: flex-start;
    }
`;
const ProfileCardAvatar = styled.div`
    overflow: hidden;
    box-shadow: 0 0 0 2px #fff;
    border-radius: 50%;
    img {
        width: 60px;
        max-width: 100%;
        vertical-align: middle;
    }
`;
const ProfileCardInfo = styled.div`
    color: #fff;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1em;
    padding-bottom: 2em;
    ${br.md} {
        margin-left: 0;
        flex-direction: column;
    }
`;
const ReportText = styled.span`
    width: 100%;
    font-size: 0.8em;
    color: ${(props) => props.theme.neutral.lighter_purple};
`;
const FirstName = styled.span`
    ${br.md} {
        display: block;
        font-size: 1.8rem;
    }
`;
const LastName = styled.span`
    margin-left: 0.2em;
    ${br.md} {
        display: block;
        font-size: 1.8rem;
        margin: 0.2em 0 0 0;
    }
`;
const TimeframeSelecotor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 1em;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    ${br.md} {
        gap: 1em 0;
        padding: 2em 0 2em 1.5em;
        align-items: flex-start;
        flex-direction: column;
        height: 30%;
    }
`;
const TimeframeButton = styled.button`
    border: none;
    background: transparent;
    color: ${(props) =>
        props.active ? "#fff" : props.theme.neutral.lighter_purple};
    font-size: 1em;
    padding: 0;
    flex: 1;
    cursor: pointer;
    &::first-letter {
        text-transform: uppercase;
    }
    ${br.md} {
        &:hover {
            color: #fff;
        }
    }
`;

function ProfileCard({ type, clickhandler }) {
    const isActive = (currenttype) => (type === currenttype ? "active" : null);
    return (
        <CardContainer>
            <ProfileCardHeader>
                <ProfileCardAvatar>
                    <img src={ProfileImg} alt="avatar" />
                </ProfileCardAvatar>
                <ProfileCardInfo>
                    <ReportText>Report for</ReportText>
                    <FirstName>Jeremy</FirstName>
                    <LastName>Robson</LastName>
                </ProfileCardInfo>
            </ProfileCardHeader>
            <TimeframeSelecotor>
                {Object.keys(timetype).map((_, i, arr) => (
                    <TimeframeButton
                        key={i}
                        active={isActive(_)}
                        onClick={() => clickhandler(arr[i])}
                    >
                        {arr[i]}
                    </TimeframeButton>
                ))}
            </TimeframeSelecotor>
        </CardContainer>
    );
}

export default ProfileCard;

ProfileCard.propTypes = {
    type: PropTypes.string,
    clickhandler: PropTypes.func,
};
