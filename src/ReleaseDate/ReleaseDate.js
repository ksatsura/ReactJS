//imports
import * as React from 'react';
import styled from 'styled-components';
import '../style.css';

const ReleaseDateP = styled.p`
    border: 1px solid black;
    height: 18px;
    text-decoration: none;
`;

// @flow
type Props = {
    date: string
};

const ReleaseDate = (props: Props) => {

    return <ReleaseDateP>{props.date}</ReleaseDateP>;
};

export default ReleaseDate;