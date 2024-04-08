// .env types 정의

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_KAKAO_MAP_TOKEN: string;
		}
	}
}
