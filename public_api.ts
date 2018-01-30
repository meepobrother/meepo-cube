import { WeuiCubeDefault, WeuiCubePreviewComponent } from './weui-cube-preview/weui-cube-preview';
import { WeuiCubeSettingComponent } from './weui-cube-setting/weui-cube-setting';

export const both = {
    'weui-cube': {
        setting: WeuiCubeSettingComponent,
        view: WeuiCubePreviewComponent,
        default: WeuiCubeDefault
    }
};

export const preview = {
    'weui-cube': WeuiCubePreviewComponent
};

export const entrys = [
    WeuiCubeSettingComponent,
    WeuiCubePreviewComponent
];

export { WeuiCubeDefault } from './weui-cube-preview/weui-cube-preview';
