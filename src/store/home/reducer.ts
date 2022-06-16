import { COMMON_ERROR } from "../../utils/constants";
import { APP_GET_GIF_LIST_FAILED, APP_GET_GIF_LIST_SUCCEED, GetGifListActionResultType, HIDE_LIST_LOADER, IHomeState, SHOW_LIST_LOADER } from "./type";

const initialState: IHomeState = {
	
    data:[],
    pagination:null,
    showLoader:false
    }

    export function getGifListReducer(state = initialState, action: GetGifListActionResultType): IHomeState {

        switch (action.type) {
    
            case APP_GET_GIF_LIST_SUCCEED:
    
                return {
                    ...state,
                    data:action.payload.data,
                    pagination:action.payload.pagination,
                    errorMessage:''
                };
    
            case APP_GET_GIF_LIST_FAILED:
    
                return {
                    ...state,
                   errorMessage:COMMON_ERROR
                };
                case SHOW_LIST_LOADER:
                    return {
                        ...state,
                        showLoader: true,
                        errorMessage:''
                    };
                case HIDE_LIST_LOADER:
                    return {
                        ...state,
                        showLoader: false,
                        errorMessage:''
                    };
    
            default:
                return { ...state};
        }
    }
    