import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    '@{prefix-cls}-mobile-simulator': {
      position: 'relative',
      minHeight: '100px',
      height: '100%',
      width: '100%',
      backgroundColor: 'var(--dn-mobile-simulator-bg-color)',
      '&-content': {
        width: '100%',
        top: '0',
        left: '0',
        height: '100%',
        position: 'absolute',
        overflow: 'overlay',
      },
      '&-body': {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        '&-content': {
          backgroundColor: 'var(--dn-mobile-simulator-body-bg-color)',
          border: '3px solid var(--dn-mobile-simulator-border-color)',
        },
      },
    },
  }
})
export default useStyles
