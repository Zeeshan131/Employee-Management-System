import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Project } from "../models/project";

class ProjectStore {
    projects = new Map<string, Project>();
    selectedProject: Project | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get projectByDate() {
        return Array.from(this.projects.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    loadProjects = async () => {
        this.loadingInitial = true;
        try {
            const projects = await agent.Projects.list();
            projects.forEach(project => {
                this.setProject(project);
            });
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadProject = async (id: string) => {
        let project = this.getProject(id);
        if (project) {
            this.selectedProject = project;
            return project;
        } else {
            this.loadingInitial = true;
            try {
                project = await agent.Projects.details(id);
                this.setProject(project);
                runInAction(() => {
                    this.selectedProject = project;
                });
                this.setLoadingInitial(false);
                return project;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setProject = (project: Project) => {
        project.date = project.date.split('T')[0];
                this.projects.set(project.id, project);
    }

    private getProject = (id: string) => {
        return this.projects.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createProject = async (project: Project) => {
        this.loading = true;
        try {
            await agent.Projects.create(project);
            runInAction(() => {
                this.projects.set(project.id, project);
                this.selectedProject = project;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    updateProject = async (project: Project) => {
        this.loading = true;
        try {
            await agent.Projects.update(project);
            runInAction(() => {
                this.projects.set(project.id, project);
                this.selectedProject = project;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    deleteProject = async (id: string) => {
        this.loading = true;
        try {
            await agent.Projects.delete(id);
            runInAction(() => {
                this.projects.delete(id);
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}

export default ProjectStore;
