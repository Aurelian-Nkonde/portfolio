import { Injectable } from '@angular/core';
import { project } from './projects';
import { PROJECTS } from './projects-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  listOfProjects: project[] = PROJECTS;

  constructor() { }

  getProjects(): project[]{
    return this.listOfProjects;
  }

}
