import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'--height': 8 + 'px',
		'--borderRadius': 4 + 'px',
		'--padding': 0,
	},
	medium: {
		'--height': 12 + 'px',
		'--borderRadius': 4 + 'px',
		'--padding': 0,
	},
	large: {
		'--height': 16 + 'px',
		'--borderRadius': 8 + 'px',
		'--padding': 4 + 'px',
	},
};

const ProgressBar = ({ value, size }) => {
	const styles = SIZES[size];

	if (!styles) {
		throw new Error(`Size passed is invalid: ${size}`);
	}

	return (
		<Wrapper role="progressbar" aria-valuenow={value} style={styles}>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarWrapper>
				<Bar value={value} />
			</BarWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--borderRadius);
	padding: var(--padding);
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	/*  Trim off corners when bar is full */
	overflow: hidden;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: ${(props) => props.value + '%'};
	height: var(--height);
`;

export default ProgressBar;
