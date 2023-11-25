import React from 'react';

const ContainerFitur = ({ image, title, description }) => {
	return (
		<div className="text-center border shadow text-xl rounded-[10%] p-4 hover:bg-primary  hover:text-secondary">
			<img src={image} alt={title} className="w-full rounded-[14%]" />
			<h1 className="text-4xl font-bold mt-4 ">{title}</h1>
			<p className="px-12 my-4">{description}</p>
		</div>
	);
};

export default ContainerFitur;
