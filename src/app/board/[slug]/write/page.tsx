"use client";

import {
	faBold,
	faItalic,
	faStrikethrough,
	faListUl,
	faQuoteRight,
	faListOl,
} from "@fortawesome/free-solid-svg-icons";
import Blockquote from "@tiptap/extension-blockquote";
import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import ColorPalette from "./_components/ColorPalette";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import ToolbarBtn from "./_components/ToolbarBtn";
import TextAlignBtns from "./_components/TextAlignBtns";
import Youtube from "@tiptap/extension-youtube";
import AddYoutube from "./_components/AddYoutube";
import AddLink from "./_components/AddLink";
import AddImage from "./_components/AddImage";
import Headers from "./_components/Headers";

export default function Page() {
	const [color, setColor] = useState("#aabbcc");
	const [opened, setOpened] = useState("");
	const editor = useEditor({
		extensions: [
			StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
			Color,
			TextStyle,
			Blockquote,
			Link.configure({
				openOnClick: true,
				autolink: true,
				validate: (href) => /^https?:\/\//.test(href),
			}),
			TextAlign.configure({ types: ["heading", "paragraph"] }),
			Image,
			Youtube,
		],
		content: "",
	});

	const openedHandler = (actived: string) => {
		setOpened(actived);
	};

	return (
		<div className="w-full min-h-full bg-utilColors-background_9  hover:shadow-defaultBox_10 rounded-md !shadow-primary-purple duration-500 border-2 border-primary-purple transition-all p-8 flex flex-col gap-4 overflow-y-auto">
			<div className="text-xl font-semibold m-3 mt-0">게시물 등록</div>
			<form className="flex flex-col" action="">
				<input
					className="bg-utilColors-background_8 w-[600px] border border-utilColors-border outline-none h-11 p-4"
					type="text"
					name="title"
					id=""
					placeholder="제목을 입력 해주세요"
				/>
			</form>
			<div className="border border-utilColors-border ">
				<div className="bg-utilColors-background_10 w-full h-20 grid grid-cols-[repeat(30,minmax(0,1fr))] grid-rows-2">
					<div className="mx-2 col-span-3 grid grid-cols-[repeat(3,minmax(0,1fr))]">
						<AddLink
							editor={editor}
							opened={opened}
							openedHandler={openedHandler}
						/>
						<AddImage editor={editor} openedHandler={openedHandler} />
						<AddYoutube
							editor={editor}
							opened={opened}
							openedHandler={openedHandler}
						/>
					</div>
					<div className="mx-2 col-span-5 grid grid-cols-[repeat(5,minmax(0,1fr))]">
						<div
							title="폰트 색상"
							className=" flex justify-center items-center relative "
						>
							<button
								onClick={() => openedHandler("color")}
								style={{ background: color }}
								className={`iconHoverPurple rounded-md w-6 h-6 border-2 hover:border-primary-300`}
							/>
							{opened == "color" ? (
								<ColorPalette
									editor={editor}
									color={color}
									setColor={setColor}
									setOpened={setOpened}
								/>
							) : null}
						</div>
						<Headers
							editor={editor}
							opened={opened}
							openedHandler={openedHandler}
						/>
						<ToolbarBtn
							title={"굵게"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faBold}
							type={"mark"}
							mark={"bold"}
						></ToolbarBtn>
						<ToolbarBtn
							title={"이탤릭"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faItalic}
							type={"mark"}
							mark={"italic"}
						></ToolbarBtn>
						<ToolbarBtn
							title={"취소선"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faStrikethrough}
							type={"mark"}
							mark={"strike"}
						></ToolbarBtn>
					</div>
					<div className="mx-2 col-span-3 grid grid-cols-[repeat(3,minmax(0,1fr))]">
						<ToolbarBtn
							title={"글머리표•"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faListUl}
							type={"list"}
							mark={"bulletList"}
						></ToolbarBtn>
						<ToolbarBtn
							title={"글머리표⒈"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faListOl}
							type={"list"}
							mark={"orderedList"}
						></ToolbarBtn>
						<ToolbarBtn
							title={"인용구"}
							editor={editor}
							openedHandler={openedHandler}
							icon={faQuoteRight}
							type={"list"}
							mark={"blockquote"}
						></ToolbarBtn>
					</div>
					<div className="mx-2 col-span-4 grid grid-cols-[repeat(4,minmax(0,1fr))]">
						<TextAlignBtns editor={editor} openedHandler={openedHandler} />
					</div>
					<div className="col-span-full  bg-bgColor-500  border-b border-utilColors-border"></div>
				</div>
				<EditorContent
					onClick={() => editor?.chain().focus()}
					className="min-h-[700px] bg-utilColors-background_8 h-auto p-3 [&_img]:max-w-[700px] [&_img]:m-2 hover:cursor-text"
					editor={editor}
				/>
			</div>
			<div className="flex justify-end">
				<button
					className="bg-bgColor-400 m-1 p-2 text-base rounded-lg text-balance font-semibold"
					type="submit"
				>
					취소
				</button>
				<button
					className="bg-primary-600 m-1 p-2 text-base rounded-lg text-balance font-semibold"
					type="submit"
				>
					작성 완료
				</button>
			</div>
		</div>
	);
}
