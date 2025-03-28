export type TTask = {
    id: string;
    title: string;
    isCompleted: boolean;
    shortDescription: string;
    description?: string;
};

export type TDeleteTask = (taskId: string) => void;