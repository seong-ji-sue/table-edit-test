import React from 'react';

const TagCell = ({value}) => {
	return (
		<div>
			{value.map((cidr, index) => (
				<span
					key={index}
					style={{
						display: 'inline-block',
						padding: '5px 10px',
						margin: '2px',
						border: '1px solid #ddd',
						borderRadius: '4px',
						backgroundColor: '#f3f3f3',
					}}
				>
					{cidr.ip}:{cidr.port}
				</span>
			))}
		</div>
	);
};

export default TagCell;
