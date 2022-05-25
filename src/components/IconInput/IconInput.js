import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		height: 24 / 16 + 'rem',
		borderThickness: 1 + 'px',
		iconSize: 16 + 'px',
		fontSize: 14 / 16 + 'rem',
	},
	large: {
		height: 36 / 16 + 'rem',
		borderThickness: 2 + 'px',
		iconSize: 24 + 'px',
		fontSize: 18 / 16 + 'rem',
	},
};
const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = SIZES[size];

	if (!styles) throw new Error(`[IconInput] - Size ${size} passed not found`);

	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<NativeInput
				style={{
					'--height': styles.height,
					'--borderThickness': styles.borderThickness,
					'--fontSize': styles.fontSize,
					'--width': width + 'px',
				}}
				{...delegated}
			></NativeInput>
			<IconWrapper
				style={{
					'--iconSize': styles.iconSize,
				}}
			>
				<Icon id={icon} strokeWidth={1} size={styles.iconSize} />
			</IconWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.label`
	position: relative;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	height: var(--iconSize);
	width: var(--iconSize);
	margin: auto;
`;

export const NativeInput = styled.input`
	height: var(--height);
	width: var(--width);
	padding-left: var(--height);
	border: none;
	border-bottom: var(--borderThickness) solid ${COLORS.black};
	font-size: var(--fontSize);
	font-weight: 700;
	outline-offset: 2px;
	color: inherit;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}
`;

export default IconInput;
