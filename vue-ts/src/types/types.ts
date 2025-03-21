export type TTask = {
    id: number;
    title: string;
    isCompleted: boolean;
};

export type TAddTask = (task: string | undefined) => void;