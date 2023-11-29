import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function TableDashboardAdmin({ no, nama, kode, beli, jual, stok, id }) {
	return (
		<tbody className="text-center">
			<tr>
				<td className="p-1 border-2">{no}</td>
				<td className="p-1 border-2">{nama}</td>
				<td className="p-1 border-2">{kode}</td>
				<td className="p-1 border-2">{beli}</td>
				<td className="p-1 border-2 space-x-2">
					<Link to={`/admin-dashboard/cashflow/${id}`}>
						<button className="text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex items-center gap-2 m-1">
							<FaEye />
							Lihat
						</button>
					</Link>
				</td>
				<td className="p-1 border-2 space-x-2">
					<Link to={`/admin-dasboard/gudang/${id}`}>
						<button className="text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex items-center gap-2 m-1">
							<FaEye />
							Lihat
						</button>
					</Link>
				</td>
				<td className="p-1 border-2 space-x-2">
					<Link to={`admin-dashboard/transaksi/${id}`}>
						<button className="text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex items-center gap-2 m-1">
							<FaEye />
							Lihat
						</button>
					</Link>
				</td>
			</tr>
		</tbody>
	);
}

export default TableDashboardAdmin;
