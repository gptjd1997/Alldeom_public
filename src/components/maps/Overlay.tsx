/* eslint-disable react/display-name */
import { useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import Image from "next/image";
import sampleLogo from "../../Images/sampleLogo.png";

export const Overlay = ({
	pubInfo: { key, pubName, addressName, lat, lng },
	selected,
	setSelected,
}: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const coords = { lat, lng };

	return (
		<MapMarker
			clickable={true}
			position={coords}
			onClick={() => {
				setSelected(key);
			}}
		>
			{key == selected && (
				<CustomOverlayMap
					clickable={true}
					yAnchor={0}
					xAnchor={0}
					position={coords}
					zIndex={3}
				>
					<div className="cursor-auto absolute bottom-12 -left-40 p-4 w-80 h-72 bg-gray-200 shadow-xl rounded-md border-solid border drop-shadow-lg border-opacity-40 border-bgColor grid grid-cols-8 grid-rows-10">
						<div
							className="col-[8/9] row-[1/3] text-background-9 text-right"
							onClick={() => setSelected(0)}
						>
							<span className="text-background-9 hover:text-primary cursor-pointer text-xl leading-none">
								{"\u00D7"}
							</span>
						</div>
						<div className="col-[1/8] row-[1/2] text-background-10 font-extrabold text-lg">
							{pubName}
						</div>
						<div className="col-[1/8] row-[2/3] text-background-9 text-opacity-70 font-light text-xs">
							{addressName}
						</div>
						<div className="col-[1/9] row-[9/11] flex justify-between items-center p-4 relative rounded-xl cursor-pointer bg-background-9  ">
							<span>테이블 정보 보기</span>
							<Image
								className="rounded-full"
								width={40}
								height={40}
								loading="lazy"
								placeholder="blur"
								src={sampleLogo}
								alt=""
							/>
						</div>
					</div>
				</CustomOverlayMap>
			)}
		</MapMarker>
	);
};
