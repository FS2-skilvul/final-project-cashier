import React from 'react';
// import { useDispatch } from 'react-redux';

function TableGudangAdmin({ no, nama, kode, beli, jual, stok, id }) {
	// const dispatch = useDispatch()

	return (
		<tbody className="text-center">
			<tr>
				<td className="p-1 border-2">{no}</td>
				<td className="p-1 border-2">{nama}</td>
				<td className="p-1 border-2">{kode}</td>
				<td className="p-1 border-2">{beli}</td>
				<td className="p-1 border-2">{jual}</td>
				<td className="p-1 border-2">{stok}</td>
			</tr>
		</tbody>
	);
}

export default TableGudangAdmin;
