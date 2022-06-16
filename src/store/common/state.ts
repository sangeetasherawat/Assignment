import { IHomeState } from "../home/type";

export interface CommonState {
	code?: string;
	success?: boolean;
	showLoader?: boolean;
	errorMessage?: string;	
}
export default interface IAppState {
	gifListState: IHomeState;
}