import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDataProduct } from '../redux/reducers/product-reducers';

function TableGudang({ no, nama, kode, beli, jual, stok, id }) {
	const dispatch = useDispatch()

	return (
		<tbody className="text-center">
			<tr>
				<td className="p-1 border-2">{no}</td>
				<td className="p-1 border-2">{nama}</td>
				<td className="p-1 border-2">{kode}</td>
				<td className="p-1 border-2">{beli}</td>
				<td className="p-1 border-2">{jual}</td>
				<td className="p-1 border-2">{stok}</td>
				<td className="p-1 border-2 space-x-2">
					<button className="text-white font-bold border-2 rounded bg-green-500 hover:bg-green-600 p-1">
						<Link to={`/gudang/edit/${id}`}>Edit</Link>
					</button>
					<button onClick={(e) => dispatch(deleteDataProduct(id))} className="text-white font-bold border-2 rounded bg-red-500 hover:bg-red-600 p-1">
						Hapus
					</button>
				</td>
			</tr>
		</tbody>
	);
}

export default TableGudang;
