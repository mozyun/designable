import { GlobalRegistry, IDesignerRegistry } from '@mozyun/designable-core'
import { globalThisPolyfill } from '@mozyun/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
