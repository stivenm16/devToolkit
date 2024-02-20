export interface ComponentsProps {
  title: string
  code: string
  description: string
  children?: ComponentsProps[]
}

export interface DataProps {
  StateFull: ComponentsProps[]
  StateLess: ComponentsProps[]
}
