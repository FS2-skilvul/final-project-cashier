import React from 'react';

function TableKasir({ no, nama, no_trans, quantity, harga, total, tanggal }) {
	const formattedDate = new Date(tanggal).toLocaleDateString('id-ID');

	return (
		<tbody className="text-center">
			<tr>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{no}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{no_trans}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{nama.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{quantity.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{harga.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{total}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{formattedDate}
				</td>
			</tr>
		</tbody>
	);
}

export default TableKasir;
