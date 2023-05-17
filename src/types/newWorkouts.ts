export default interface NewWorkouts {
  name: string;
  description: string;
  exercises: Exercise[];
}

interface Exercise {
  name: string;
  sets: number | null;
}
