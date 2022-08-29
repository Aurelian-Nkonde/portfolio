import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/projects';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  myProjects: project[] = [];
  url1?: string;

  constructor(private service: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this.myProjects = this.service.getProjects();
  }

}
