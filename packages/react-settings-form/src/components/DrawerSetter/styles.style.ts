import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-drawer-setter': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      bottom: '0',
      background: 'var(--dn-composite-panel-tabs-content-bg-color)',
      zIndex: '10',
      display: 'flex',
      flexDirection: 'column',
      '&-header': {
        display: 'flex',
        alignItems: 'center',
        flexShrink: '0',
        flexGrow: '0',
        padding: '5px 10px',
        color: '#333',
        borderBottom: '1px solid #f5f5f5',
        cursor: 'pointer',
      },
      '&-header-text': { marginLeft: '4px' },
      '&-body': {
        padding: '10px 20px',
        overflow: 'overlay',
        overflowX: 'hidden',
        flexGrow: '2',
      },
    },
    'dn-drawer-wrapper': {
      transition: 'all 0.16s ease-in-out',
      '&-enter': { transform: 'translateX(100%)' },
      '&-enter-active': { transform: 'translateX(0)' },
      '&-exit': { transform: 'translateX(0)' },
      '&-exit-active': { transform: 'translateX(100%)' },
    },
  }
})
export default useStyles
