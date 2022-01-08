import react from 'react';
import { Box } from '@mui/material';
import Styled from 'styled-components';

const Layout = ({ children }) => {
  return <Background>{children}</Background>;
};

const Background = Styled(Box)`
    // position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    color: black;
    margin: 0;
    padding: 0;
`;

export default Layout;
