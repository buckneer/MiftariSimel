import {projects} from "../data/data";

export function getProjects() {
  return projects;
}

export function filterProjects(platform) {
  return getProjects().filter(project => project.category === platform);
}

export function filterById(id) {
  let newArray = getProjects().filter(project => project.id === parseInt(id));
  if(newArray.length === 0 || newArray.length > 1) {
    return null;
  } else {
    return newArray[0];
  }
}
