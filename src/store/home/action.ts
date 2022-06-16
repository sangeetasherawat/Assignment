import { GetGifListArgs, GET_GIF_LIST } from "./type";

export function getGifList(args: GetGifListArgs) {
	return {
		type: GET_GIF_LIST,
		payload: args
	}
}