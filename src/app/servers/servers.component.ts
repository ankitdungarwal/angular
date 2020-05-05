import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no servers present';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['test server', 'test server2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onClickButton()
  {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created! and name is ' + this.serverName;
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  style() {
    return this.serverName === '' ? 'red' : 'green';
  }
}
