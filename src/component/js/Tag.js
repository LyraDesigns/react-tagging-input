// @flow

import React  from 'react';

const Tag = (props: Object) => {

	const onRemoveClick = (e: MouseEvent) => {
		e.preventDefault();

		props.onRemoveTag(e);
	};

	const removeIcon: ?React$Element<any> = !props.readOnly ? (
		<a onClick={onRemoveClick}>
			{props.removeTagIcon|| String.fromCharCode(215)}
		</a>
	) : null;

	const onTagClick = (e: MouseEvent) => {
		e.preventDefault();
		props.onClickTag(e);
	};

	const nameObject: ?React$Element<any> = !props.readOnly ? (
		<span onClick={onTagClick}>{props.name}</span>
	) : null;

	return (
		<li>
			{nameObject}
			{removeIcon}
		</li>
	);
};

export default Tag;
