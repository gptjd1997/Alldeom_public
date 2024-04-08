import { faHeading } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Headers({ editor, opened, openedHandler }) {

    return <button title="제목" className={`relative ${editor?.isActive("heading") ? "is-active" : ""}`} onClick={() => openedHandler("heading")}>
        <FontAwesomeIcon className="hover:text-lg" icon={faHeading} />
        {opened == "heading" ? (
            <div className="absolute top-full left-1/2 -ml-[45px] w-[90px] h-[38px] grid grid-flow-col">
                <button
                    className={`hover:text-lg hover:text-primary-400 hover:font-bold ${editor?.isActive("heading", { level: 1 }) ? "is-active" : ""}`}
                    onClick={() => {
                        editor?.chain().focus().toggleHeading({ level: 1 }).run()
                        console.log(editor?.isActive("heading", { level: 2 }))
                    }
                    }
                >
                    H1
                </button>
                <button
                    className={`hover:text-lg hover:text-primary-400 hover:font-bold ${editor?.isActive("heading", { level: 2 }) ? "is-active" : ""}`}
                    onClick={() =>
                        editor?.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                >
                    H2
                </button>
                <button
                    className={`hover:text-lg hover:text-primary-400 hover:font-bold ${editor?.isActive("heading", { level: 3 }) ? "is-active" : ""}`}
                    onClick={() =>
                        editor?.chain().focus().toggleHeading({ level: 3 }).run()
                    }
                >
                    H3
                </button>
            </div>
        ) : null}
    </button>
}