export default interface NewWorkouts {
  name: string;
  description: string;
  exercises: Exercise[];
  id?: string;
}

export interface Exercise {
  name: string;
  sets: number;
}
