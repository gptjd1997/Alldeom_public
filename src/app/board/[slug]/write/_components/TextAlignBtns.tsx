import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextAlignBtns({ editor, openedHandler }) {

    return <>
        <button
            onClick={() => {
                editor?.chain().focus().setTextAlign('left').run();
                openedHandler("textalign");
            }}
            className={`iconHoverPurple ${editor?.isActive({ textAlgin: "left" }) ? "is-active" : ""
                }`}
        >
            <FontAwesomeIcon className="hover:text-lg" icon={faAlignLeft} />
        </button>
        <button
            onClick={() => {
                editor?.chain().focus().setTextAlign("center").run();
                openedHandler("textalign");
            }}
            className={`iconHoverPurple ${editor?.isActive({ textAlgin: "center" }) ? "is-active" : ""
                }`}
        >
            <FontAwesomeIcon className="hover:text-lg" icon={faAlignCenter} />
        </button>
        <button
            onClick={() => {
                editor?.chain().focus().setTextAlign("right").run();
                openedHandler("textalign");
            }}
            className={`iconHoverPurple ${editor?.isActive({ textAlgin: "right" }) ? "is-active" : ""
                }`}
        >
            <FontAwesomeIcon className="hover:text-lg" icon={faAlignRight} />
        </button>
        <button
            onClick={() => {
                editor?.chain().focus().setTextAlign("justify").run();
                openedHandler("justify");
            }}
            className={`iconHoverPurple ${editor?.isActive({ textAlgin: "justify" }) ? "is-active" : ""
                }`}
        >
            <FontAwesomeIcon className="hover:text-lg" icon={faAlignJustify} />
        </button>
    </>
}