import {projects} from "../data/data";

export function getProjects() {
  return projects;
}

export function filterProjects(platform) {
  return getProjects().filter(project => project.category === platform);
}
