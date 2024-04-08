"use client";
import { useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";

export default function ColorPalette({
	color,
	setColor,
	setOpened,
	editor,
}: any) {
	const colorRef = useRef();

	// 색상 변경 핸들러
	const colorHanlder = (props: any) => {
		if (props.target?.value) {
			setColor(props.target.value);
			editor.chain().focus().setColor(props.target.value).run();
		} else {
			setColor(props);
			editor.chain().focus().setColor(color).run();
		}
	};

	// 마운트시 document에 closeColorListner 이벤트 추가 & 언 마운트시 closeColorListner 이벤트 제거
	useEffect(() => {
		document.addEventListener("mousedown", closeColorListner);

		return () => {
			document.removeEventListener("mousedown", closeColorListner);
		};
	}, []);

	//자신(ColorPalette) 제외 클릭 시 ColorPalette Components close
	const closeColorListner = (event: any) => {
		if (!colorRef?.current.contains(event.target)) {
			setOpened("");
		}
	};
	return (
		<div
			ref={colorRef}
			className="z-10 absolute left-0 -bottom-60 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))] gap-2 p-2 w-44 h-60 bg-utilColors-background_9 border border-utilColors-border outline-none"
		>
			<button
				onClick={(event) => colorHanlder(event)}
				className={`rounded-full bg-[#ef4444] aspect-square`}
				value={"#ef4444"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#f97316] aspect-square"
				value={"#f97316"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#eab308] aspect-square"
				value={"#eab308"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#22c55e] aspect-square"
				value={"#22c55e"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#06b6d4] aspect-square"
				value={"#06b6d4"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#000] aspect-square"
				value={"#000"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#444] aspect-square"
				value={"#444"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#888] aspect-square"
				value={"#999"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#bbb] aspect-square"
				value={"#ccc"}
			/>
			<button
				onClick={(event) => colorHanlder(event)}
				className="rounded-full bg-[#fff] aspect-square"
				value={"#fff"}
			/>
			<div className="col-span-5 row-span-5 my-2 flex justify-center">
				<HexColorPicker color={color} onChange={colorHanlder} />
			</div>
		</div>
	);
}
