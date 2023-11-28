import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getDataTransaction } from '../redux/reducers/transaction-reducers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function BarChart() {
    const { transactions, isLoading } = useSelector((state) => state.transaction);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataTransaction());
    }, [dispatch]);

    const currentYear = new Date().getFullYear();

    const generateMonthlyChartData = () => {

        // Inisialisasi data bulanan
        const monthlyData = Array.from({ length: 12 }, () => ({
            pendapatan: 0,
            pengeluaran: 0,
        }));

        // Iterasi transaksi dan mengkategorikannya ke dalam data bulanan
        transactions
            .filter((transaction) => new Date(transaction.createdAt).getFullYear() === currentYear)
            .forEach((transaction) => {
                const monthIndex = new Date(transaction.createdAt).getMonth();
                monthlyData[monthIndex].pendapatan += transaction.total_biaya;
                // Jika ingin menghitung pengeluaran, tambahkan logika di sini
                transaction.products.forEach((product) => {
                    monthlyData[monthIndex].pengeluaran += product.harga_beli * product.Detail_Transaction.qty
                    console.log(monthlyData[monthIndex])
                });
            });

        return monthlyData;
    };

    // Mendapatkan data bulanan
    const monthlyData = generateMonthlyChartData();

    // Data untuk Chart.js
    const data = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [
            {
                label: `PENDAPATAN TAHUN ${currentYear}`,
                data: monthlyData.map((month) => month.pendapatan),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            // Jika ingin menambahkan dataset untuk pengeluaran, tambahkan logika di sini
            {
                label: `PENGELUARAN TAHUN ${currentYear}`,
                data: monthlyData.map((month) => month.pengeluaran),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                title: {
                    font: {
                        size: 30, // Ubah ukuran font legenda di sini
                    },
                },
            },
            title: {
                display: true,
                text: `PENDAPATAN DAN PENGELUARAN TAHUN ${currentYear}`,
                font: {
                    size: 30, // Ubah ukuran font judul di sini
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 18, // Ubah ukuran font sumbu x di sini
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 18, // Ubah ukuran font sumbu y di sini
                    },
                },
            },
        },
    };

    return (
        <div>
            <Bar options={options} data={data} className='w-full lg:w-[1200px] bg-white px-12 py-6' />
        </div>
    );
}

export default BarChart
