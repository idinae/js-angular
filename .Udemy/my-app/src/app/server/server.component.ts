import { Component } from '@angular/core';

@Component({
    selector: 'app-server', //string, unique; //'[app-server]' --> selected <div app-server></div>
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    //serverName = '';
    serverName = 'Testserver';
    
    
    getServerStatus() {
        return this.serverStatus;
    }

    allowNewServer = false;
    serverCreateionStatus = 'No server was created!';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    onCreateServer() {
        this.serverCreateionStatus = 'Server was created!';
    }

    onUpdatedServerName(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}