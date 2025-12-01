import { css } from 'styled-components';

const breakpoints = {
    phone: '37.5em', // 600px
    'tab-port': '56.25em', // 900px
    'tab-land': '75em', // 1200px
    'big-desktop': '112.5em', // 1800px
};

export const respond = (bp) => {
    return (...styles) => css`
        @media only screen and (max-width: ${breakpoints[bp]}) {
            ${css(...styles)}
        }
    `;
};
