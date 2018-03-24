import { LayoutActionTypes, LayoutActions } from './action';

export interface AppState {
    sidenavOpened: boolean,
    toolsOpened: boolean,
    mapsOpened: boolean,
    userOpened: boolean,
    bottomContainerOpened: boolean,
    searchContainerOpened: boolean,
    regionContainerOpened: boolean,
    noticeContainerOpened: boolean
}

const initAppState: AppState = {
    sidenavOpened: false,
    toolsOpened: false,
    mapsOpened: false,
    userOpened: false,
    bottomContainerOpened: false,
    searchContainerOpened: false,
    regionContainerOpened: false,
    noticeContainerOpened: false
}

export function openedReducer(
    state: AppState = initAppState,
    action: LayoutActions
): AppState {
    switch (action.type) {
        case LayoutActionTypes.OPEN_SIDENAV:
            return Object.assign({}, state, { sidenavOpened: true });
        case LayoutActionTypes.CLOSE_SIDENAV:
            return Object.assign({}, state, { sidenavOpened: false });
        case LayoutActionTypes.OPEN_TOOLS:
            return Object.assign({}, state, { toolsOpened: true });
        case LayoutActionTypes.CLOSE_TOOLS:
            return Object.assign({}, state, { toolsOpened: false });
        case LayoutActionTypes.OPEN_MAPS:
            return Object.assign({}, state, { mapsOpened: true });
        case LayoutActionTypes.CLOSE_MAPS:
            return Object.assign({}, state, { mapsOpened: false });
        case LayoutActionTypes.OPEN_USER:
            return Object.assign({}, state, { userOpened: true });
        case LayoutActionTypes.CLOSE_USER:
            return Object.assign({}, state, { userOpened: false });
        case LayoutActionTypes.OPEN_BOTTOM_CONTAINER:
            return Object.assign({}, state, { bottomContainerOpened: true });
        case LayoutActionTypes.CLOSE_BOTTOM_CONTAINER:
            return Object.assign({}, state, { bottomContainerOpened: false });
        case LayoutActionTypes.OPEN_SEARCH_CONTAINER:
            return Object.assign({}, state, { searchContainerOpened: true });
        case LayoutActionTypes.CLOSE_SEARCH_CONTAINER:
            return Object.assign({}, state, { searchContainerOpened: false });
        case LayoutActionTypes.OPEN_REGION_CONTAINER:
            return Object.assign({}, state, { regionContainerOpened: true });
        case LayoutActionTypes.CLOSE_REGION_CONTAINER:
            return Object.assign({}, state, { regionContainerOpened: false });
        case LayoutActionTypes.OPEN_NOTICE_CONTAINER:
            return Object.assign({}, state, { noticeContainerOpened: true });
        case LayoutActionTypes.CLOSE_NOTICE_CONTAINER:
            return Object.assign({}, state, { noticeContainerOpened: false });
        default:
            return state

    }
}
