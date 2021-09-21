import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Project } from "../models/project";
import { v4 as uuid } from 'uuid';

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
        try {
            const projects = await agent.Projects.list();
            projects.forEach(project => {
                project.date = project.date.split('T')[0];
                this.projects.set(project.id, project);
            });
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectProject = (id: string) => {
        this.selectedProject = this.projects.get(id);
    }

    cancelSelectedProject = () => {
        this.selectedProject = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectProject(id) : this.cancelSelectedProject();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createProject = async (project: Project) => {
        this.loading = true;
        project.id = uuid();
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
                if (this.selectedProject?.id === id) {
                    this.cancelSelectedProject();
                }
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
