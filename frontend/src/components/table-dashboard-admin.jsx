import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function TableDashboardAdmin({ no, nama, nama_toko, alamat_toko, id }) {
	return (
		<tbody className="text-center">
			<tr key={id}>
				<td className="p-1 border-2">{no}</td>
				<td className="p-1 border-2">{nama}</td>
				<td className="p-1 border-2">{nama_toko}</td>
				<td className="p-1 border-2">{alamat_toko}</td>
				<td className="p-1 border-2">
					<div className='flex w-full justify-center'>
						<Link to={`/admin-dashboard/cashflow/${id}`} className='className="w-fit text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex justify-center items-center gap-2 m-1'>
							<FaEye />
							<p>Lihat</p>
						</Link>
					</div>
				</td>
				<td className="p-1 border-2 space-x-2">
					<div className='flex w-full justify-center'>
						<Link to={`/admin-dashboard/gudang/${id}`} className='className="w-fit text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex justify-center items-center gap-2 m-1'>
							<FaEye />
							<p>Lihat</p>
						</Link>
					</div>
				</td>
				<td className="p-1 border-2 space-x-2">
					<div className='flex w-full justify-center'>
						<Link to={`/admin-dashboard/transaksi/${id}`} className='className="w-fit text-white font-bold border-2 rounded-full bg-green-500 hover:bg-green-600 py-1 px-4 flex justify-center items-center gap-2 m-1'>
							<FaEye />
							<p>Lihat</p>
						</Link>
					</div>
				</td>
			</tr>
		</tbody>
	);
}

export default TableDashboardAdmin;
