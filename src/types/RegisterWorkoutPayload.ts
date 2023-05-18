export default interface RegisterWorkoutPayload {
  name: string | undefined;
  id: string | undefined;
  finishedDate: string;
  exercises: Exercises[];
}

export interface Exercises {
  name: string;
  description: string;
  sets: Sets[];
}

export interface Sets {
  set: number;
  weight: string;
  reps: string;
  reserveReps: string;
  failedSet: boolean;
  accessories: boolean;
}
