import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-collapse-item': {
      flexWrap: 'wrap',
      '&-header': {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 20px',
        margin: '-1px -20px 0 -20px',
        color: 'var(--dn-collapse-header-color)',
        borderTop: '1px solid var(--dn-panel-border-color)',
        borderBottom: '1px solid var(--dn-panel-border-color)',
        backgroundColor: 'var(--dn-panel-active-bg-color)',
        cursor: 'pointer',
        transition: 'all 0.25s ease-in-out',
        fontSize: '13px',
        '&-expand': {
          marginLeft: '-13px',
          transform: 'rotate(-90deg)',
          fontSize: '12px',
          transition: 'all 0.15s ease-in-out',
          marginRight: '3px',
        },
      },
      '&-content': {
        display: 'none',
        width: '100%',
        paddingTop: '4px',
        '& > div:last-child': {
          borderBottom: 'none',
        },
      },
    },
    'dn-collapse-item-content': {
      display: 'block',
    },
    'dn-collapse-item-header-expand': {
      transform: 'rotate(0)',
    },
  }
})
export default useStyles
