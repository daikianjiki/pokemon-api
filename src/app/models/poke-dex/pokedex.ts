//first layer of object
export interface PokeDex {
  id: number
  name: string
  url: string
  sprites: Sprites | undefined
  types: Types[] 
  stats: Stats[]
}
//nested layer of object
export interface Sprites {
  front_default: string
  back_default: string
}
export interface Types {
  type: Type
}
export interface Type {
  name: string;
}
export interface Stats {
  stat: Stat
  base_stat: number
}
export interface Stat {
  name: string;
}



