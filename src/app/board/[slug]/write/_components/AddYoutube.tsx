
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youtubeIcon from "@/Icons/youtube.png"
import Image from "next/image";
import useInput from "@/utils/hooks/useInput";

export default function AddYoutube({ opened, openedHandler, editor }) {
    const urlInput = useInput({ defaultValue: "", defaultPlaceholder: "" })

    const addYoutube = () => {
        editor?.commands.setYoutubeVideo({
            src: urlInput.value,
            width: 640,
            height: 480,
        })

        urlInput.handleSetValue("");
        openedHandler("");
    }

    return (
        <div className="relative flex items-center">
            <button onClick={() => {

                opened != "youtube" ? openedHandler("youtube") : openedHandler("")
            }}>
                <Image src={youtubeIcon} className="text-primary-500 w-7 ml-2 mt-[2px]" alt="Youtube"></Image>

            </button>
            {opened == "youtube" ? (
                <div className="absolute top-10 left-0 bg-bgColor-700 p-2 rounded-md flex flex-col z-10">
                    <p className="px-1 py-1 text-fontColor-500 text-sm">link</p>
                    <input
                        className="bg-bgColor-600 outline-none rounded-md p-1 px-2  placeholder:text-sm"
                        type="text"
                        {...urlInput}
                    />
                    <button
                        className="hover:text-primary-300 p-2 text-balance self-end w-auto text-fontColor-500 disabled:cursor-default disabled:text-bgColor-500"
                        disabled={urlInput.value == ""}
                        onClick={addYoutube}
                    >
                        Submit
                    </button>
                </div>
            ) : undefined}
        </div>)
}