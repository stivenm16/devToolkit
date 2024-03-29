export type Difficulty = 'easy' | 'medium' | 'hard'

export enum CellEnum {
  Hidden = -1,
  Cero = 0,
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Flag = 9,
  Mine = 10,
  ClickedMine = 11,
}

export type FaceType = 'default' | 'doubtful' | 'lost' | 'won'
