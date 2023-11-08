import { IBehavior, IResource } from '@mozyun/designable-core'
import { defineComponent } from 'vue'

type Component<P> = ReturnType<typeof defineComponent<P>>

export type DnFC<P = {}> = Component<P> & {
  Resource?: IResource[]
  Behavior?: IBehavior[]
}

export type DnComponent<P = {}> = Component<P> & {
  Resource?: IResource[]
  Behavior?: IBehavior[]
}

export interface IDesignerComponents {
  [key: string]: DnFC<any> | DnComponent<any>
}
