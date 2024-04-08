import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToolbarBtn({ title, editor, openedHandler, icon, mark, type }) {
	return <button title={title}
		onClick={() => {
			if (type == "list") {
				editor?.chain().focus().toggleList(mark, "listItem").run();

				return openedHandler(mark);
			}
			editor?.chain().focus().toggleMark(mark).run();
			openedHandler(mark);
		}}
		className={`iconHoverPurple hover:[&>*]:text-lg ${editor?.isActive(mark) ? "is-active" : ""
			}`}
	>
		<FontAwesomeIcon icon={icon} />
	</button>
}