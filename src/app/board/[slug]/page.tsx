"use client";
import Post from "@/app/board/[slug]/Post";
import sampleLogo from "@/Images/sampleLogo.png";
import {
	faAngleLeft,
	faAngleRight,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const example = [
	{
		index: 1,
		title: "이런 미션 만든 놈 나와",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 2,
		title: "롤알못 형님들을 위한 T1이 말아주는 롤 기초 상식",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 3,
		title: "졸업파티에 엄마 데려온 찐따",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 4,
		title: "야 나한테 여소 받을래???",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 5,
		title: "찐따랑 멀티 플레이 게임하면 안되는 이유",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 6,
		title: "DRX 대표 인스타ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 7,
		title: 'PBE에 적용된 "2차추가" 밸런스 패치안 (14.3)',
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 8,
		title: "회사 급식판 레전드",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 9,
		title: "결의 룬은 유난히 지나치게 경계하고 패치한 흔적들이 눈에 보임",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 10,
		title: "출시 전 성인모드 공약 걸었건 게임",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 11,
		title: "비올 때 사람별 우산쓰는 법",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 12,
		title: "마참내! 드디어!",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 13,
		title: "낙서 2",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 14,
		title: "충격적인 울산 고래근황",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 15,
		title: "엄마 이 반찬 어디서 산거야?",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 16,
		title: "별수호자 자야",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 17,
		title: "코인 전후 모습으로 화제가 된 BJ 근황",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 18,
		title: "교회 전도하는 아줌마 만난 썰",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 19,
		title: "자크 패시브 vs 애니비아 패시브",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
	{
		index: 20,
		title: "유튜브 댓글 ㄹㅈㄷ",
		sampleImage: sampleLogo,
		author: "Comet",
		commentCounts: 10,
		recommendedCounts: 10,
		createdAt: Date.now(),
		views: 10,
	},
];

export default function Page({
	params: { slug },
}: {
	params: { slug: string }; // slug: 게시판 카테고리
}) {
	const [selected, setSelected] = useState(0);
	const selectedHanlder = (sort: number) => {
		setSelected(sort);
	};
	return (
		<div className=" w-full h-full rounded-md grid grid-cols-1 grid-rows-[75px_750px_35px] gap-1 border-primary-purple border-2 hover:shadow-defaultBox_10 hover:shadow-primary-purple box-border transition-all duration-500">
			{/** board header */}
			<div
				className="grid p-2 px-4 bg-boxColorFirst-500 grid-rows-2 gap-2 border-primary-purple box-border rounded-t-md
			"
			>
				<div className="text-base font-bold">자유 게시판</div>
				<div className="flex justify-between">
					<div className="flex flex-row gap-3">
						<span
							onClick={() => setSelected(0)}
							className={`cursor-pointer ${selected == 0 ? "selected" : ""}`}
						>
							최신
						</span>
						<span
							onClick={() => setSelected(1)}
							className={`cursor-pointer ${selected == 1 ? "selected" : ""}`}
						>
							인기순
						</span>
						<span
							onClick={() => setSelected(2)}
							className={`cursor-pointer ${selected == 2 ? "selected" : ""}`}
						>
							댓글순
						</span>
					</div>
					<Link title="글쓰기" href={`/board/${slug}/write`}>
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="iconHoverPurple h-[21px]"
						/>
					</Link>
				</div>
			</div>
			{/**  board post list */}
			<div className=" bg-primary-purple grid grid-rows-[33px,repeat(20,minmax(0,1fr))]">
				<div className="[&_div]:boardHeader col-span-1 row-span-1 relative grid grid-cols-postTitleGrid border-b-[1.5px] border-utilColors-border last:border-none items-center">
					<div>
						<span>추천</span>
					</div>
					<div>
						<span>제목</span>
					</div>
					<div>
						<span>글쓴이</span>
					</div>
					<div>
						<span>작성일</span>
					</div>
					<div className="border-none">
						<span>조회</span>
					</div>
				</div>
				{example.map((v, i) => {
					return <Post props={v} key={i} />;
				})}
			</div>
			<div className="bg-utilColors-background_10 flex justify-center ">
				<ul className="self-center [&_li]:float-left [&_li]:leading-4 [&_li]:p-1 ">
					<li>
						<FontAwesomeIcon icon={faAngleLeft} />
					</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
					<li>7</li>
					<li>8</li>
					<li>9</li>
					<li>10</li>
					<li>
						<FontAwesomeIcon icon={faAngleRight} />
					</li>
				</ul>
			</div>
		</div>
	);
}
