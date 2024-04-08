import Image from "next/image";
// import previewIcon from "@/Images/previewIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCoins } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Post({
	props: {
		title,
		index,
		sampleImage,
		commentCounts,
		recommendedCounts,
		author,
		createdAt,
		views,
	},
}: {
	props: any;
}) {
	const router = useRouter();
	const moveOn = (id: number) => {
		router.push(`/board/free/post/${id}`);
	};

	const [preview, setPreview] = useState(false);
	return (
		<div className=" col-span-1 row-span-1 relative grid grid-cols-postTitleGrid border border-x-utilColors-background_9 border-t-utilColors-background_9 hoveredBoxShadow bg-utilColors-background_9 border-utilColors-shadow last:border-none ">
			<div className="text-xs font-semibold  ml-3 text-utilColors-text self-center">
				<FontAwesomeIcon className="mr-1" icon={faCoins} />
				{recommendedCounts}
			</div>
			<div
				onClick={() => moveOn(21321321)}
				className="pl-2 group flex flex-row hover:cursor-pointer self-center mr-auto"
			>
				<span className="group-hover:underline text-utilColors-text align-middle">
					{title}
				</span>
				<span className="text-xs text-boxColorSecond-500 m-1">
					[{commentCounts}]
				</span>
				<span
					className="relative"
					onMouseOver={() => setPreview(true)}
					onMouseOut={() => setPreview(false)}
				>
					<FontAwesomeIcon icon={faImage} className="text-sm hover:text-base" />
					{preview ? (
						<div className="absolute inset-x-5 inset-y-0 min-w-32 max-w-36 z-10 animate-fade_in">
							<Image
								src={sampleImage}
								className="p-1 bg-utilColors-background_8 shadow-defaultBox shadow-stone-800 border border-utilColors-border rounded-md"
							/>
						</div>
					) : undefined}
				</span>
			</div>
			<span className="hover:underline hover:cursor-pointer text-center self-center">
				{author}
			</span>
			<span className="text-center self-center">{createdAt}</span>
			<span className="text-center self-center">{views}</span>
		</div>
	);
}
