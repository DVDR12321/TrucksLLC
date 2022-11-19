import styled from "@emotion/styled";
import Image from '../../assets/headerimage.jpg';

export const DivBody = styled('div')`
    padding-top:30px;
    height: 400vh;
    margin:0;
    background: #ada996; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
export const HeadDiv = styled('div')`
    display:flex;
    height:40vh;
    place-content:center;
    background: url(${Image});
    color:white;
`;
export const H1 = styled('h1')`
    align-self:center;
    font-size:10vh;
`;
// export const LineContainer = styled('div')`
//     position:fixed;
//     top:0;
//     left:0;
//     width:100%;
//     height:100%;
//     text-align:center;
//     overflow:hidden;
// `;
export const StyledSvg = styled('svg')`
        display:inline:block;
        height:100%;   
`;
export const Section = styled('div')`
    display:grid;
    height:70vh;
    place-content:center;
    font-size:4em;
`;
