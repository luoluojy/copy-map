import { Action } from '@ngrx/store';

export enum LayoutActionTypes{
    OPEN_SIDENAV = '[Layout] Open Sidenav',
    CLOSE_SIDENAV = '[Layout] Close Sidenav',
    OPEN_TOOLS = '[Layout] Open Tools',
    CLOSE_TOOLS = '[Layout] Close Tools',
    OPEN_MAPS = '[Layout] Open Maps',
    CLOSE_MAPS = '[Layout] Close Maps',
    OPEN_USER = '[Layout] Open User',
    CLOSE_USER = '[Layout] Close User',
    OPEN_BOTTOM_CONTAINER = '[Layout] Open Bottom Container',
    CLOSE_BOTTOM_CONTAINER = '[Layout] Close Bottom Container',
    OPEN_SEARCH_CONTAINER = '[Layout] Open Search Container',
    CLOSE_SEARCH_CONTAINER = '[Layout] Close Search Container',
    OPEN_REGION_CONTAINER = '[Layout] Open Region Container',
    CLOSE_REGION_CONTAINER = '[Layout] Close Region Container',
}

export class OpenSidenavAction implements Action{
    readonly type = LayoutActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_SIDENAV;
}

export class OpenToolsAction implements Action{
    readonly type = LayoutActionTypes.OPEN_TOOLS;
}

export class CloseToolsAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_TOOLS;
}

export class OpenMapsAction implements Action{
    readonly type = LayoutActionTypes.OPEN_MAPS;
}

export class CloseMapsAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_MAPS;
}

export class OpenUserAction implements Action{
    readonly type = LayoutActionTypes.OPEN_USER;
}

export class CloseUserAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_USER;
}

export class OpenBottomContainerAction implements Action{
    readonly type = LayoutActionTypes.OPEN_BOTTOM_CONTAINER;
}

export class CloseBottomContainerAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_BOTTOM_CONTAINER;
}

export class OpenSearchContainerAction implements Action{
    readonly type = LayoutActionTypes.OPEN_SEARCH_CONTAINER;
}

export class CloseSearchContainerAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_SEARCH_CONTAINER;
}

export class OpenRegionContainerAction implements Action{
    readonly type = LayoutActionTypes.OPEN_REGION_CONTAINER;
}

export class CloseRegionContainerAction implements Action{
    readonly type = LayoutActionTypes.CLOSE_REGION_CONTAINER;
}



export type LayoutActions = OpenSidenavAction | CloseSidenavAction | OpenToolsAction | CloseToolsAction |
 OpenMapsAction | CloseMapsAction | OpenUserAction | CloseUserAction | OpenBottomContainerAction | CloseBottomContainerAction |
  OpenSearchContainerAction | CloseSearchContainerAction | OpenRegionContainerAction | CloseRegionContainerAction