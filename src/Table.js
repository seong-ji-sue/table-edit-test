import React from 'react';
import {useReactTable, getCoreRowModel} from '@tanstack/react-table';

const Table = ({columns, data}) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<table style={{border: 'solid 1px black'}}>
			<thead>
				{table.getHeaderGroups().map((headerGroup) => (
					<tr key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<th
								key={header.id}
								style={{
									borderBottom: 'solid 3px red',
									background: 'aliceblue',
									color: 'black',
									fontWeight: 'bold',
								}}
							>
								{header.isPlaceholder
									? null
									: header.column.columnDef.header}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				{table.getRowModel().rows.map((row) => (
					<tr key={row.id}>
						{row.getVisibleCells().map((cell) => (
							<td
								key={cell.id}
								style={{
									padding: '10px',
									border: 'solid 1px gray',
									background: 'papayawhip',
								}}
							>
								{cell.column.columnDef.cell(cell.getContext())}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
