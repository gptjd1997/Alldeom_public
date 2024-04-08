export const Contents = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col p-2 items-center col-[2/3] row-[2/3] h-auto ">
			{children}
		</div>
	);
};
