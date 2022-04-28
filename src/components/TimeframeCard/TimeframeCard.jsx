import { useMemo } from "react";
import styled from "styled-components";
import { type2Style } from "../../constant";
import { br } from "../../Device";
import { ReactComponent as Setting } from "../../images/icon-ellipsis.svg";
import { InfoCard } from "../index";
import PropTypes from "prop-types";

const FrameBody = styled(InfoCard)`
    box-sizing: border-box;
    padding: 1em 1.5em;
    position: relative;
    z-index: 1;
    ${br.md} {
        padding: 1em 1.2em;
        cursor: pointer;
        transition: filter 0.3s ease-out;
    }
`;
const FrameContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    ${br.md} {
        flex-grow: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`;
const TimeframeCardContainer = styled.div`
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    grid-row: span 1;
    padding-top: 2.5em;
    background: ${(props) => props.bgcolor};
    color: #fff;
    svg:first-child {
        position: absolute;
        right: 0.5em;
        top: -0.5em;
        transform: scale(0.8);
    }
    ${br.md} {
        &:hover {
            ${FrameBody} {
                filter: brightness(1.4);
            }
        }
    }
`;

const FrameHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const FrameHeaderTitle = styled.span`
    flex: 1;
    font-weight: 500;
`;
const CurrentText = styled.span`
    font-size: 2em;
    flex: 1;
    display: flex;
    align-items: center;
`;
const PrevText = styled.span`
    font-size: 0.5em;

    color: ${(props) => props.theme.neutral.lighter_purple};
`;

function TimeframeCard({ data }) {
    const { last, title, current, prev } = data;
    // just not re-render every time QQ
    const [BgIcon, BgColor] = useMemo(() => type2Style(title), [title]);
    return (
        <TimeframeCardContainer bgcolor={BgColor} br={br}>
            <BgIcon />
            <FrameBody>
                <FrameHeader>
                    <FrameHeaderTitle>{title}</FrameHeaderTitle>
                    <Setting />
                </FrameHeader>
                <FrameContent>
                    <CurrentText>{current}hrs</CurrentText>
                    <PrevText>
                        Last {last} - {prev}hrs
                    </PrevText>
                </FrameContent>
            </FrameBody>
        </TimeframeCardContainer>
    );
}

export default TimeframeCard;

TimeframeCard.propTypes = {
    data: PropTypes.object,
};
