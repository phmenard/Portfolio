/*const depProjects = [deployedProject, deployedProject];*/
import projects from './deployedProject'

const favoriteMovies = ['Halt and Catch Fire', 'Pirates of Sylicon Vally', 'Sillicon Vally'];

export const Me = {
    name: 'Paul H. Menard Jr.',
    publicImage : '',
    avitar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FgpYwKrP6s749b5Nzgm2174jKrpf.jpg&f=1&nofb=1',
    quote: 'Life is like a tree, it branches off into many directions. But only one branch reaches the top',
    quoteImage: '',
    currentLocation: 'Fall River, ma',
    deployedProjects: [],
    projects: [], 
    favoriteMovies: favoriteMovies
                      
 }


export function setDeployedProject(project){
    project.name = project.name;
    project.gitHub = project.gitHub;
    project.liveLink = project.liveLink;
    Me.deployedProjects.push(project);
}

export function getDeployedProjects(){
    
}



export default Me;