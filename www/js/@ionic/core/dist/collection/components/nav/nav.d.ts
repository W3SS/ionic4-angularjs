import { EventEmitter } from '@stencil/core';
import { Config } from '../..';
import { ComponentDataPair, FrameworkDelegate, Nav, NavController, NavOptions, ViewController } from '../../navigation/nav-interfaces';
export declare class IonNav implements Nav {
    element: HTMLElement;
    navInit: EventEmitter;
    id: number;
    parent: Nav;
    views: ViewController[];
    transitioning?: boolean;
    destroyed?: boolean;
    transitionId?: number;
    isViewInitialized?: boolean;
    isPortal: boolean;
    swipeToGoBackTransition: any;
    childNavs?: Nav[];
    navController?: NavController;
    mode: string;
    root: any;
    delegate: FrameworkDelegate;
    config: Config;
    constructor();
    componentDidLoad(): void;
    getViews(): ViewController[];
    push(component: any, data?: any, opts?: NavOptions): Promise<any>;
    pop(opts?: NavOptions): Promise<any>;
    setRoot(component: any, data?: any, opts?: NavOptions): Promise<any>;
    insert(insertIndex: number, page: any, params?: any, opts?: NavOptions): Promise<any>;
    insertPages(insertIndex: number, insertPages: any[], opts?: NavOptions): Promise<any>;
    popToRoot(opts?: NavOptions): Promise<any>;
    popTo(indexOrViewCtrl: any, opts?: NavOptions): Promise<any>;
    remove(startIndex: number, removeCount?: number, opts?: NavOptions): Promise<any>;
    removeView(viewController: ViewController, opts?: NavOptions): Promise<any>;
    setPages(componentDataPairs: ComponentDataPair[], opts?: NavOptions): Promise<any>;
    getActive(): ViewController;
    getPrevious(view?: ViewController): ViewController;
    canGoBack(nav: Nav): boolean;
    canSwipeBack(): boolean;
    getFirstView(): ViewController;
    navInitialized(event: CustomEvent): void;
    render(): JSX.Element;
}
export declare function componentDidLoadImpl(nav: Nav): void;
export declare function pushImpl(nav: Nav, component: any, data: any, opts: NavOptions): Promise<any>;
export declare function popImpl(nav: Nav, opts: NavOptions): Promise<any>;
export declare function setRootImpl(nav: Nav, component: any, data: any, opts: NavOptions): Promise<any>;
export declare function insertImpl(nav: Nav, insertIndex: number, page: any, params: any, opts: NavOptions): Promise<any>;
export declare function insertPagesImpl(nav: Nav, insertIndex: number, insertPages: any[], opts: NavOptions): Promise<any>;
export declare function popToRootImpl(nav: Nav, opts: NavOptions): Promise<any>;
export declare function popToImpl(nav: Nav, indexOrViewCtrl: any, opts: NavOptions): Promise<any>;
export declare function removeImpl(nav: Nav, startIndex: number, removeCount: number, opts: NavOptions): Promise<any>;
export declare function removeViewImpl(nav: Nav, viewController: ViewController, opts?: NavOptions): Promise<any>;
export declare function setPagesImpl(nav: Nav, componentDataPairs: ComponentDataPair[], opts?: NavOptions): Promise<any>;
export declare function getNavController(nav: Nav): Promise<any>;
export declare function navInitializedImpl(potentialParent: Nav, event: CustomEvent): void;
