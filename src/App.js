import styled, { ThemeProvider } from "styled-components";
import { TimeframeCard, ProfileCard } from "./components/index";
import { theme, timetype, Type2Data } from "./constant";
import { useState } from "react";
import data from "./data.json";
import { br } from "./Device";

const TimerLayout = styled.div`
    display: grid;
    padding: 0 30px;
    max-width: 1440px;
    width: 100%;
    gap: 1em;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    padding: 2em;
    ${br.md} {
        padding: 1.2em 2em;
        grid-auto-rows: minmax(200px, 1fr);
        grid-template-columns: repeat(4, 1fr);
    }
`;

function App() {
    const [timeframe, setTimeframe] = useState(() =>
        Type2Data(timetype.daily, data)
    );
    const [type, setType] = useState(timetype.daily);
    const clickhandler = (type) => {
        setTimeframe(() => Type2Data(type, data));
        setType(() => type);
    };
    return (
        <ThemeProvider theme={theme}>
            <TimerLayout>
                <ProfileCard clickhandler={clickhandler} type={type} />
                {timeframe.map(({ last, title, prev, current }, i) => (
                    <TimeframeCard
                        key={i}
                        data={{ last, title, prev, current }}
                    />
                ))}
            </TimerLayout>
        </ThemeProvider>
    );
}

export default App;
