import React from 'react';

function TableKasirAdmin({ no, nama, no_trans, quantity, harga, total, tanggal, id }) {
	const formattedDate = new Date(tanggal).toLocaleDateString('id-ID');
	return (
		<tbody className="text-center">
			<tr key={id}>
				<td className="p-1 py-3 border-2">{no}</td>
				<td className="p-1 py-3 border-2">
					{no_trans}
				</td>
				<td className="p-1 py-3 border-2">
					{nama.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-2">
					{quantity.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-2">
					{harga.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</td>
				<td className="p-1 py-3 border-2">{total}</td>
				<td className="p-1 py-3 border-2">
					{formattedDate}
				</td>
			</tr>
		</tbody>
	);
}

export default TableKasirAdmin;
