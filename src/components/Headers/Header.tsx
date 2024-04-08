"use client";

import useInput from "@/utils/hooks/useInput";
import Link from "next/link";

export const Header = () => {
	const useSearchInput = useInput({
		defaultValue: "",
		defaultPlaceholder: "닉네임",
	});

	return (
		<div className="sticky items-center col-[1/4] row-[1/2] top-0 z-30 bg-primary-500 grid grid-cols-gridWrapperTemplate gap border-b border-primary-700">
			<div className="col-[2/3] row-span-[1/2] flex justify-around">
				<Link
					href={"/"}
					className="flex justify-center text-xl font-bold text-fontColor-500 px-5"
				>
					Logo
				</Link>
				<div>
					<form className="flex justify-center" action="">
						<input
							className="w-[500px]  h-8 outline-none rounded-full text-sm pl-4 text-bgColor-500 justify-center "
							type="text"
							{...useSearchInput}
						/>
					</form>
				</div>
				<div className="flex justify-end ml-4 items-center">
					<div className="min-w-14 max-h-8 px-2">✌</div>
					<div className="min-w-14 max-h-8 px-2">😊</div>
					<div className="min-w-14 max-h-8 px-2">Login</div>
				</div>
			</div>
		</div>
	);
};
