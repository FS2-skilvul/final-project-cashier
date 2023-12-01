import React from 'react';

const ContainerFitur = ({ image, title, description }) => {
	return (
		<div className="text-center border shadow rounded-3xl m-4 px-6 hover:bg-primary  hover:text-secondary flex flex-col items-center">
			<img
				src={image}
				alt={title}
				className="flex items-center w-full rounded my-6"
			/>
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="my-4">{description}</p>
		</div>
	);
};

export default ContainerFitur;
