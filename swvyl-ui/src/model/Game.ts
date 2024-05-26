import { Level } from "./Level";
import { User } from "./User";

export interface Game {
  current_level: number;
  levels: Level[];
  isCompleted: boolean;
  startGame: () => void;
  nextLevel: () => void;
  isComplete: () => boolean;
  user: User;
}
