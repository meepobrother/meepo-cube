import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiCubeProps { }
export class WeuiCubeDefault { }
@Component({
    selector: 'weui-cube-preview',
    templateUrl: './weui-cube-preview.html',
    styleUrls: ['./weui-cube-preview.scss']
})
export class WeuiCubePreviewComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
