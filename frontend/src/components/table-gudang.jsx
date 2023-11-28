import React from 'react';
import { Link } from 'react-router-dom';

function TableGudang({ no, nama, kode, beli, jual, stok, id }) {
	return (
		<>
			<tbody className="text-center">
				<td className="p-1 border-2">{no}</td>
				<td className="p-1 border-2">{nama}</td>
				<td className="p-1 border-2">{kode}</td>
				<td className="p-1 border-2">{beli}</td>
				<td className="p-1 border-2">{jual}</td>
				<td className="p-1 border-2">{stok}</td>
				<td className="p-1 border-2">
					<button className="border-2 rounded bg-red-600 p-1">
						<Link to={`/gudang/${id}`}>Hapus</Link>
					</button>
				</td>
				<td className="p-1 border-2">
					<button className="border-2 rounded bg-green-500 p-1">
						<Link to={`/gudang/edit`}>Edit</Link>
						{/* harusnya gudang/edit/$id */}
					</button>
				</td>
			</tbody>
		</>
	);
}

export default TableGudang;
