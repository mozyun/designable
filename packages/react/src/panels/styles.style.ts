import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    '@{prefix-cls}-main-panel': {
      display: 'flex',
      width: '100%',
      height: '100%',
      flex: '1',
      minHeight: '0',
      position: 'relative',
      overflow: 'hidden',
      '&-container': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      '&-header': {
        display: 'flex',
        alignItems: 'center',
        flexGrow: '0',
        flexShrink: '0',
        justifyContent: 'space-between',
        background: 'var(--dn-main-panel-header-bg-color)',
        borderBottom: '1px solid var(--dn-panel-border-color)',
        padding: '4px',
        '&-logo': {
          display: 'flex',
          alignItems: 'center',
        },
        '&-actions': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      },
    },
    root: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    absolute: {
      position: 'absolute',
    },
    relative: {
      position: 'relative',
    },
    '@{prefix-cls}-composite-panel': {
      flexGrow: '0',
      flexShrink: '0',
      display: 'flex',
      position: 'relative',
      userSelect: 'none',
      zIndex: '2',
      '&-tabs': {
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid var(--dn-panel-border-color)',
        backgroundColor: 'var(--dn-composite-panel-tabs-bg-color)',
        zIndex: '2',
        position: 'relative',
        '&-pane': {
          color: 'var(--dn-composite-panel-tabs-color)',
          minHeight: '48px',
          minWidth: '48px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          fontSize: '20px',
          flexDirection: 'column',
          '&-title': { fontSize: '10px', marginTop: '6px' },
          '&:hover': { color: 'var(--dn-composite-panel-tabs-hover-color)' },
        },
        '&-content': {
          width: '300px',
          borderRight: '1px solid var(--dn-panel-border-color)',
          background: 'var(--dn-composite-panel-tabs-content-bg-color)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'content-box',
        },
        '&-header': {
          padding: '14px 7px',
          color: 'var(--dn-composite-panel-tabs-header-color)',
          lineHeight: '18px',
          fontSize: '16px',
          borderBottom: '1px solid var(--dn-panel-border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          '&-actions': {
            display: 'flex',
            alignItems: 'center',
            '& > *': {
              marginRight: '8px',
              '&:last-child': { marginRight: '0' },
            },
          },
          '&-pin': {
            transition: 'all 0.15s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
          '&-title': { fontSize: '20px' },
          '&-close': {
            transition: 'all 0.15s ease-in-out',
            '&:hover': {
              transform: 'rotate(90deg)',
            },
          },
        },
        '&-body': {
          flexGrow: '2',
          flexShrink: '2',
          overflow: 'overlay',
          overflowX: 'hidden',
          height: '100%',
        },
      },
    },
    '@{prefix-cls}-composite-panel-tabs-pane.active:after': {
      left: 'auto',
      right: '-1px',
    },
    '@{prefix-cls}-composite-panel-tabs-content.pinning': {
      left: 'auto',
      right: '100%',
      top: '0',
    },
    '@{prefix-cls}-composite-panel-tabs-content': {
      borderRight: 'none',
      borderLeft: '1px solid var(--dn-panel-border-color)',
    },
    '@{prefix-cls}-composite-panel-tabs': {
      borderLeft: '1px solid var(--dn-panel-border-color)',
    },
    active: {
      color: 'var(--dn-composite-panel-tabs-hover-color)',
      '&::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'block',
        content: "''",
        width: '3px',
        height: '100%',
        backgroundColor: 'var(--dn-composite-panel-tabs-hover-color)',
      },
    },
    pinning: {
      position: 'absolute',
      zIndex: '10',
      left: '100%',
      top: '0',
      borderRight: '1px solid transparent',
      boxShadow: '2px 5px 10px rgba(102, 102, 102, 0.52)',
      right: '0',
      borderLeft: '1px solid transparent',
    },
    'direction-right': {
      flexDirection: 'row-reverse',
    },
    '@{prefix-cls}-workspace-panel': {
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      padding: '4px',
      overflow: 'hidden',
      boxSizing: 'border-box',
      backgroundColor: 'var(--dn-workspace-panel-bg-color)',
      position: 'relative',
      zIndex: '1',
      '&-item': { position: 'relative' },
      'button[disabled]': { pointerEvents: 'none' },
    },
    '@{prefix-cls}-settings-panel': {
      flexGrow: '0',
      flexShrink: '0',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      zIndex: '2',
      width: '300px',
      background: 'var(--dn-composite-panel-tabs-content-bg-color)',
      borderLeft: '1px solid var(--dn-panel-border-color)',
      height: '100%',
      boxSizing: 'content-box',
      userSelect: 'none',
      '&-header': {
        padding: '14px 7px',
        color: 'var(--dn-composite-panel-tabs-header-color)',
        lineHeight: '18px',
        fontSize: '16px',
        borderBottom: '1px solid var(--dn-panel-border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        '&-actions': {
          display: 'flex',
          alignItems: 'center',
          '& > *': {
            marginRight: '8px',
            '&:last-child': {
              marginRight: '0',
            },
          },
        },
        '&-pin': {
          transition: 'all 0.15s ease-in-out',
          '&:hover': { transform: 'scale(1.1)' },
        },
        '&-title': {
          fontSize: '20px',
        },
        '&-close': {
          transition: 'all 0.15s ease-in-out',
          '&:hover': { transform: 'rotate(90deg)' },
        },
      },
      '&-body': {
        flexGrow: '2',
        flexShrink: '2',
        overflow: 'overlay',
        height: '100%',
      },
      '&-opener': {
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '2',
        background: 'var(--dn-composite-panel-tabs-content-bg-color)',
        border: '1px solid var(--dn-panel-border-color)',
        color: 'var(--dn-composite-panel-tabs-color)',
        boxShadow: '0 0 6px rgb(0 0 0 / 10%)',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        '&:hover .dn-icon': {
          transform: 'rotate(45deg)',
        },
      },
    },
    'dn-icon': {
      transition: 'all 0.15s ease-in-out',
    },
  }
})
export default useStyles
