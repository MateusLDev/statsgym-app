export default interface RegisterWorkoutPayload {
  name: string;
  id: string;
  finishedDate: string;
  exercises: Exercises[];
}

interface Exercises {
  name: string;
  description: string;
  sets: Sets[];
}

interface Sets {
  set: number;
  weight: string;
  reps: string;
  reserveReps: string;
  failedSet: boolean;
  accessories: boolean;
}

export { Exercises, Sets };
