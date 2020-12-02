import { Component } from '@angular/core';

@Component({
    selector: 'app-server', //string, unique; //'[app-server]' --> selected <div app-server></div>
    templateUrl: './server.component.html',
    //styleUrls: ['./server.component.css']
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    //serverName = '';
    serverName = 'Testserver';
    servers = ['TestServer 1', 'TestServer 2'];
    username = '';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
        this.servers.push(this.serverName);
    }

    onUpdatedServerName(event: Event) {
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onReset() {
        this.username = '';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

 }