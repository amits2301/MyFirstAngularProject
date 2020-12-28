import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'   
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline always';
    getServerStataus() {
        return this.serverStatus;
    }


}