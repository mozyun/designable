import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-monaco-input': {
      position: 'relative',
      transition: 'all 0.15s ease-in-out',
      width: '100%',
      height: '100%',
      opacity: '0',
      display: 'flex',
      '&-view': { flexGrow: '2', height: '100%' },
      '&-helper': {
        position: 'absolute',
        bottom: '10px',
        right: '5%',
        zIndex: '2',
      },
    },
    'monaco-error-highline': {
      left: '0px',
      width: '5px',
      height: '5px',
      background: 'red',
      borderRadius: '100%',
      transform: 'translate(35px, 5px)',
    },
    loaded: {
      opacity: '1',
    },
  }
})
export default useStyles
