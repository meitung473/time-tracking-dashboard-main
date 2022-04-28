import { ReactComponent as Exercise } from "./images/icon-exercise.svg";
import { ReactComponent as Play } from "./images/icon-play.svg";
import { ReactComponent as Selfcare } from "./images/icon-self-care.svg";
import { ReactComponent as Social } from "./images/icon-social.svg";
import { ReactComponent as Study } from "./images/icon-study.svg";
import { ReactComponent as Work } from "./images/icon-work.svg";

export const timetype = {
    daily: "daily",
    weekly: "weekly",
    monthly: "monthly",
};

export const Icon = {
    Exercise: <Exercise />,
    Play: <Play />,
    Study: <Study />,
    Work: <Work />,
    SelfCare: <Selfcare />,
    Social: <Social />,
};

export const theme = {
    primary: {
        profile: "hsla(246, 80%, 60%, 1)",
        Exercise: "hsla(145, 58%, 55%, 1)",
        Play: "hsla(195, 74%, 62%, 1)",
        Study: "hsla(348, 100%, 68%, 1)",
        Work: "hsla(15, 100%, 70%, 1)",
        SelfCare: "hsla(43, 84%, 65%, 1)",
        Social: "hsla(263, 63%, 51%, 1)",
    },
    neutral: {
        lighter_purple: "hsla(236, 100%, 87%, 1)",
        blue_dark: "hsla(235, 46%, 20%, 1)",
        blue_superdark: "hsla(226, 43%, 10%, 1)",
    },
};

/**
 * find style
 * @param {String} type
 * @returns [React compontent,colors]
 */
export function type2Style(type) {
    if (type.includes(" ")) {
        type = type.replace(" ", "");
    }
    // React Element->Component
    const BgIcon = () => Icon[type];
    return [BgIcon, theme.primary[type]];
}

/**
 * find data
 * @param {String} type
 * @returns [{title,pre,current}]
 */
export function Type2Data(type, data) {
    return data.reduce((p, n) => {
        const { title, timeframes } = n;
        let type2text = "";
        switch (type) {
            case timetype.daily:
                type2text = "day";
                break;
            case timetype.weekly:
                type2text = "week";
                break;
            case timetype.monthly:
                type2text = "month";
                break;
            default:
                break;
        }
        p.push({
            last: type2text,
            title,
            prev: timeframes[type].previous,
            current: timeframes[type].current,
        });
        return p;
    }, []);
}
