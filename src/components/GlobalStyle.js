import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const ResetCSS = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
        --default-color: #C3CFD9;
        --selected-color: #8DD7CF;
        --unavailable-color: #FBE192;
        --clickable-color: #E8833A;
        --footer-color: #DFE6ED;
        --dark: #293845;
    }
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        color: var(--preto);
        background-color: #FFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .root {
        display: flex;
        flex-direction: column;
    }
`;
export const Header = styled.header`
    min-width: 375px;
    height: 67px;
    background: var(--default-color);
    color: #E8833A;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    user-select: none;
`;
export const Container = styled.main`
    max-width: 768px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 610px) {
        max-width: 375px;
    }
`;
export const TitlePage = styled.h1`
    margin-top: 110px;
    color: ${props => props.sucess ? "#247A6B" : "var(--dark)"};
    font-weight: ${props => props.sucess ? "700" : "400"};
    font-size: 24px;
    text-align: center;
    user-select: none;
`;
export const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 117px;
    width: max(100%, 375px);
    background: var(--footer-color);
    display: flex;
    align-self: center;
    border-top: 1px solid #9EADBA;

    div {
        width: 64px;
        height: 89px;
        background-color: #FFF;
        padding: 5px;
        border-radius: 3px;
        display: flex;
        align-self: center;
        justify-content: center;
        margin: 0 15px 0 7vw;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            font-size: 26px;
            color: var(--dark)
        }
    }

    img {
        width: 100%;
    }
`;