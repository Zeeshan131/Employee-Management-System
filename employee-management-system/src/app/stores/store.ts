import ProjectStore from './projectStore';
import { createContext, useContext } from 'react';

interface Store {
    projectStore: ProjectStore;
}

export const store: Store = {
    projectStore: new ProjectStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}