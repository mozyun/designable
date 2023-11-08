import { globalThisPolyfill } from '@mozyun/designable-shared'

export const useSandboxScope = () => {
  return globalThisPolyfill['__DESIGNABLE_SANDBOX_SCOPE__']
}
