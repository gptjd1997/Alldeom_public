"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "./Overlay";

interface pubsTypes {
	key: number;
	pubName: string;
	addressName: string;
	lat: number;
	lng: number;
}

export const Maps = () => {
	const [load, setLoad] = useState(false);
	const [selected, setSelected] = useState<number>(0);

	const [currentLocation, setCurrentLocation] = useState({
		//현재 위치 기본값 *강남역* (현재 위치 불러오기 실패 시 강남역 유지)
		lat: 37.497928,
		lng: 127.027583,
	});
	const getPosSuccess = (pos: GeolocationPosition) => {
		//현재 위치 불러오기 성공시 함수
		const getLatitude = pos.coords.latitude;
		const getLongitude = pos.coords.longitude;
		setCurrentLocation({ lat: getLatitude, lng: getLongitude });
		console.log(currentLocation);
	};

	const [pubs, setPubs] = useState<pubsTypes[]>([
		{
			key: 1,
			pubName: "안산 JS 스타디움",
			addressName: "경기 수원시 팔달구 효원로265번길 41 신흥빌딩 6층",
			lat: 37.3184219,
			lng: 126.8364438,
		},
		{
			key: 2,
			pubName: "수원 JS 스타디움",
			addressName: "경기 수원시 팔달구 효원로265번길 41 신흥빌딩 6층",
			lat: 37.2639422809464,
			lng: 127.031289564273,
		},
	]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			getPosSuccess,
			() => {
				alert("위치 정보를 가져오는데 실패했습니다.");
			},
			{
				//옵션
				enableHighAccuracy: true, //정확도 향상
				maximumAge: 30000,
				timeout: 27000,
			},
		);
		kakao.maps.load(() => {
			var geocoder = new kakao.maps.services.Geocoder();
			geocoder.addressSearch(
				"경기 수원시 팔달구 효원로265번길 41 신흥빌딩 6층",
				(result: any, status: any) => {
					// if (status === kakao.maps.services.Status.OK) {   		**todo
					// 	setPubsInfo({
					// 		address: result[0].address,
					// 	});
					// 	console.log(result[0]);
					setLoad(true);
					// }
				},
			);
		});
	}, []);

	return (
		<div className="flex overflow-hidden">
			<Map
				onClick={() => {
					setSelected(0);
				}}
				className="rounded-lg"
				level={5}
				id="map"
				center={currentLocation}
				style={{ width: "600px", height: "600px" }}
			>
				{load &&
					pubs.map((pub, i) => {
						return (
							<Overlay
								pubInfo={pub}
								key={pub.key}
								selected={selected}
								setSelected={setSelected}
							/>
						);
					})}

				<MapMarker position={currentLocation} />
			</Map>
		</div>
	);
};
