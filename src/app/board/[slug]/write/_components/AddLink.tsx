import useInput from "@/utils/hooks/useInput";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddLink({ opened, openedHandler, editor }) {
	const linkInput = useInput({
		defaultPlaceholder: "링크를 입력하세요",
		defaultValue: "",
	});
	const linkTextInput = useInput({
		defaultPlaceholder: "링크 텍스트를 입력하세요",
		defaultValue: "",
	});

	return (
		<div className="relative flex justify-center items-center">
			<button
				title="링크 삽입"
				onClick={(e) => {
					opened != "link" ? openedHandler("link") : openedHandler("");
				}}
				className={`iconHoverPurple 
            ${opened == "link" ? "is-active" : ""}`}
			>
				<FontAwesomeIcon className="hover:text-lg" icon={faLink} />
			</button>
			{opened == "link" ? (
				<div className="absolute top-10 left-0 bg-utilColors-background_9 border border-utilColors-border p-2 rounded-md flex flex-col z-10">
					<p className="px-1 py-1 text-fontColor-500 text-sm">link</p>
					<input
						className="bg-bgColor-600 outline-none rounded-md p-1 px-2  placeholder:text-sm"
						type="text"
						{...linkInput}
					/>
					<p className="px-1 py-1 text-fontColor-500 text-sm">display</p>
					<input
						className="bg-bgColor-600 outline-none rounded-md p-1 px-2 placeholder:text-sm"
						type="text"
						{...linkTextInput}
					/>
					<button
						className="hover:text-primary-300 p-2 text-balance self-end w-auto text-fontColor-500 disabled:cursor-default disabled:text-bgColor-500"
						disabled={linkInput.value == ""}
						onClick={() => {
							editor?.commands.insertContent(
								`<a target="_blank" href="${linkInput.value}">${
									linkTextInput.value != ""
										? linkTextInput.value
										: linkInput.value
								}</a>`,
							);
							linkInput.handleSetValue("");
							linkTextInput.handleSetValue("");
							openedHandler("");
						}}
					>
						Submit
					</button>
				</div>
			) : undefined}
		</div>
	);
}
