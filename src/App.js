import React from 'react';
import Table from './Table';
import TagCell from './Tag';

const App = () => {
	const data = React.useMemo(
		() => [
			{
				roleNm: 'Hello',
				cidr: [
					{ip: '192.2.0.100', port: 10},
					{ip: '192.2.0.122', port: 60},
				],
			},
			{
				roleNm: 'react-table',
				cidr: [
					{ip: '192.2.0.100', port: 10},
					{ip: '192.2.0.122', port: 60},
				],
			},
			{
				roleNm: 'whatever',
				cidr: [
					{ip: '192.2.0.100', port: 10},
					{ip: '192.2.0.122', port: 60},
				],
			},
		],
		[],
	);

	const columns = React.useMemo(
		() => [
			{
				header: '인증 Role 명',
				accessorKey: 'roleNm', // accessorKey is the "key" in the data
			},
			{
				header: 'IP:Port',
				accessorKey: 'cidr',
				cell: (info) => <TagCell value={info.getValue()} />,
			},
		],
		[],
	);

	return (
		<div className='App'>
			<Table columns={columns} data={data} />
		</div>
	);
};

export default App;
