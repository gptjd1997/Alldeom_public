"use client";

import Link from "next/link";

const example = [
	{ index: 1, title: "샘플 타이틀 제목 입니다" },
	{ index: 2, title: "롤알못 형님들을 위한 T1이 말아주는 롤 기초 상식" },
	{ index: 3, title: "14.6 일겜 UI 변경" },
	{ index: 4, title: "카리나, 이재욱 열재 근황" },
	{ index: 5, title: "예전에는 굉장히 흔했다는 광경" },
	{ index: 6, title: "최근 중고나라 사기수법" },
	{ index: 7, title: "조선에서 호랑이 숫자 줄이려고 한 일" },
	{ index: 8, title: "낚시 한걸로 평생 허풍 떨어도 인정" },
	{ index: 9, title: "월세 관리비 사기당한 메이플 유튜버" },
	{ index: 10, title: "닭다리 뜯어먹는 유형" },
];

export default function Home() {
	return (
		<div className="w-[100%] h-[1900px] row-span-full grid grid-cols-3 grid-rows-4 gap-4">
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center ">+</span>
				</Link>
				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center">+</span>
				</Link>

				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center">+</span>
				</Link>
				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center">+</span>
				</Link>
				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center">+</span>
				</Link>
				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
			<div className="postListWrapper">
				<Link href={"/board/free"} className="postListHeader">
					<span className="text-base">자유게시판</span>
					<span className="text-sm self-center">+</span>
				</Link>
				{example.map((v, i) => {
					return (
						<Link
							href={"/board/free"}
							className="postListTitles hoveredBoxShadow transition-all duration-300 pl-4 last:rounded-b-md"
							key={v.index}
						>
							<span>{v.title}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
