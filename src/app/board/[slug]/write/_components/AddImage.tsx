import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";

export default function AddImage({ editor, openedHandler }) {


    const imageHandler = useCallback(
        ({ target }) => {
            const { files } = target;
            const uploadFile = files[0];
            const fileUrl = URL.createObjectURL(uploadFile);
            if (fileUrl) {
                editor?.chain().focus().setImage({ src: fileUrl }).run();
            }
        },
        [editor],
    );


    return <div title="이미지 삽입" className=" flex justify-center items-center">
        <label
            className="iconHoverPurple hover:cursor-pointer "
            htmlFor="image-upload"
            onClick={() => {
                openedHandler("image");
            }}
        >
            <FontAwesomeIcon icon={faImage} size="lg" />
        </label>
        <input
            id="image-upload"
            className="hidden"
            type="file"
            accept="image/*"
            onChange={imageHandler}
        />
    </div>
}