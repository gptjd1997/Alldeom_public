'use client'

import Comments from "./Comments"
import Contents from "./Contents"


export default function Page({ params: { postId } }: { params: { slug: string, postId: string } }) {



    return <div className="boxWrapper">
        <div className="h-10 w-full [&>*]:w-full">
            <Contents></Contents>
            <Comments></Comments>
        </div>
    </div>
}