import { infoLogFormatter } from "../utils/logFormatter";
import { Level } from "./Level";
import { User } from "./User";

export interface Gameable {
  current_level: number;
  levels: Level[];
  startGame: () => void;
  nextLevel: () => void;
  isComplete: () => boolean;
  user?: User;
}

export class Game implements Gameable {
  current_level: number;
  levels: Level[];
  user?: User;

  constructor(user?: User, current_level?: number, levels?: Level[]) {
    this.current_level = current_level || 1;
    this.levels = levels || [];
    this.user = user;
  }

  startGame() {
    console.log("Starting game");
  }

  nextLevel() {
    infoLogFormatter("Advancing to the next level...");
    this.current_level = this.current_level + 1;
    this.user?.current_level
      ? (this.current_level = this.user.current_level)
      : (this.current_level = 1);
  }

  isComplete() {
    return this.current_level === this.levels.length;
  }
}
