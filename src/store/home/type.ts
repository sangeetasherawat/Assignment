import { CommonState } from "../common/state";

export const GET_GIF_LIST = 'GET.GIF.LIST';
export const APP_GET_GIF_LIST_SUCCEED = "APP.GET.GIF.LIST.SUCCEED";
export const APP_GET_GIF_LIST_FAILED = "APP.GET.GIF.LIST.FAILED";
export const SHOW_LIST_LOADER = 'APP.SHOW.LIST.LOADER';
export const HIDE_LIST_LOADER = 'APP.HIDE.LIST.LOADER';


export interface IGifData{
	id:string;
	title:string;
	url:string;
	images:any;
	
}

export interface IPaginationData{
	offset:number;
	total_count:number;
	count:number;
	
}

export interface IHomeState extends CommonState {
    data:Array<IGifData>;
    pagination:IPaginationData | null;
 
}

export interface GetGifListArgs {
	q: string;
    limit?: number;
	offset?:number;
    lang?:string;
}

export interface GetGifListAction {
		type: typeof GET_GIF_LIST;
		payload: GetGifListArgs;
	
};

export interface GetGifListSuccessAction {
	type: typeof APP_GET_GIF_LIST_SUCCEED;
	payload: IHomeState;
}
export interface GetGifListFailedAction {
	type: typeof APP_GET_GIF_LIST_FAILED;
	payload: IHomeState;
}

export interface ShowListLoaderAction {
	type: typeof SHOW_LIST_LOADER;
	payload: IHomeState;
}

export interface HideListLoaderAction {
	type: typeof HIDE_LIST_LOADER;
	payload: IHomeState;
}

export type GetGifListActionResultType = GetGifListSuccessAction| GetGifListFailedAction | ShowListLoaderAction | HideListLoaderAction;

