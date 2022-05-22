import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<PresentationalBit>
				{displayedValue}
				<IconWrapper
					style={{
						'--size': 24 + 'px',
					}}
				>
					<Icon id="chevron-down" strokeWidth={1} size={24} />
				</IconWrapper>
			</PresentationalBit>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	/* Allow the select to span the full height in Safari */
	-webkit-appearance: none;
`;

const PresentationalBit = styled.div`
	border-radius: 8px;
	padding: 12px 16px;
	color: ${COLORS.gray700};
	background-color: ${COLORS.transparentGray15};
	font-size: ${16 / 16}rem;
	padding-right: 52px;

	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}

	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	height: var(--size);
	width: var(--size);
	margin: auto;
	/* To enable click on chevron (disable click event on IconWrapper) */
	/* Alternative to use z-index */
	pointer-events: none;
`;

export default Select;
