import React from 'react';

function TableKasirAdmin({
	no,
	nama,
	no_trans,
	quantity,
	harga,
	total,
	tanggal,
}) {
	return (
		<>
			<tbody className="text-center">
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{no}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{no_trans}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{nama}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{quantity}
				</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{harga}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">{total}</td>
				<td className="p-1 py-3 border-t-2 border-b-2 border-black">
					{tanggal}
				</td>
			</tbody>
		</>
	);
}

export default TableKasirAdmin;
