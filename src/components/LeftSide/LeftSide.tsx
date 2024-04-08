"use client";

import {
	faCaretLeft,
	faCircleUser,
	faHome,
	faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import sampleProfileImage from "@/Images/sampleProfileImage.png";
import Image from "next/image";

export const LeftSide = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [menuState, setMenuState] = useState("");

	const menuHandler = async (bool: Boolean) => {
		if (bool) {
			if (!menuIsOpen) {
				setMenuState("menuOpen");
				setMenuIsOpen(true);
			}
		} else {
			setMenuState("menuClose");
			await setTimeout(() => {
				setMenuIsOpen(false);
				return 0;
			}, 1000);
		}
		console.log(menuIsOpen, menuState);
	};

	return (
		<div>
			<div className="fixed left-0 transition-all duration-300 hover:shadow-primary-purple hover:shadow-defaultBox_10  border-r-2 border-primary-purple flex flex-col h-full bg-utilColors-background_9  [&>div]:bg-background-9 z-[11]">
				<Link
					href={"/"}
					className="w-24 h-24 flex justify-center items-center flex-col gap-3 [&>span]:font-semibold bgFadeIn select-none"
				>
					<FontAwesomeIcon icon={faHome} className="h-6" />
					<span>Home</span>
				</Link>
				<Link
					href={"/maps"}
					className="w-24 h-24 flex justify-center items-center flex-col gap-3 [&>span]:font-semibold bgFadeIn select-none"
				>
					<FontAwesomeIcon icon={faMap} className="h-6" />
					<span>Maps</span>
				</Link>
				<div
					className="w-24 h-24 flex justify-center items-center flex-col gap-3 [&>span]:font-semibold bgFadeIn select-none"
					onClick={() => menuHandler(true)}
				>
					<FontAwesomeIcon icon={faCircleUser} className="h-6" />
					<span>My Account</span>
				</div>
				<div
					className="w-24 h-24 flex justify-center items-center flex-col gap-3 [&>span]:font-semibold bgFadeIn select-none"
					onClick={() => menuHandler(true)}
				>
					<FontAwesomeIcon icon={faCircleUser} className="h-6" />
					<span>My Account</span>
				</div>
				<div
					className="w-24 h-24 flex justify-center items-center flex-col gap-3 [&>span]:font-semibold bgFadeIn select-none"
					onClick={() => menuHandler(true)}
				>
					<FontAwesomeIcon icon={faCircleUser} className="h-6" />
					<span>My Account</span>
				</div>
			</div>
			{menuIsOpen && (
				<div
					className={`fixed left-24 h-full w-96 bg-primary-purple sideBarInnerMenu ${menuState} flex`}
				>
					<div className="w-full shadow-2xl p-6">
						<div className="w-full h-full flex justify-center">
							<div className="">
								<Image
									className="rounded-full w-28 h-28 border-4 border-utilColors-background_8 shadow-defaultBox_10 shadow-stone-800"
									src={sampleProfileImage}
									alt="sample"
								></Image>
							</div>
						</div>
					</div>
					<div
						className="bg-primary-purpl h-full w-5 flex items-center justify-center"
						onClick={() => menuHandler(false)}
					>
						<FontAwesomeIcon
							icon={faCaretLeft}
							className="[&_path]:opacity-60"
						/>
					</div>
				</div>
			)}
		</div>
	);
};
