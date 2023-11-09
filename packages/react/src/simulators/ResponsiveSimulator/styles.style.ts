import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    '@{prefix-cls}-responsive-simulator': {
      backgroundColor: 'var(--dn-responsive-simulator-bg-color)',
    },
    '@{prefix-cls}-resize-handle': {
      position: 'absolute',
      transition: '0.2s all ease-in-out',
      boxSizing: 'border-box',
      userSelect: 'none',
      bottom: '0',
      zIndex: '10',
      background: 'var(--dn-resize-handle-bg-color)',
      color: 'var(--dn-resize-handle-color)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&-RESIZE_WIDTH': {
        top: '0',
        bottom: '15px',
        cursor: 'ew-resize',
        svg: {
          transformOrigin: 'center',
          transform: 'rotate(-90deg)',
        },
      },
      '&-RESIZE_HEIGHT': { left: '0', right: '15px', cursor: 'ns-resize' },
      '&-RESIZE': { cursor: 'nwse-resize' },
      '&-RESIZE_HEIGHT, &-RESIZE': { height: '15px' },
      '&-RESIZE_WIDTH, &-RESIZE': { right: '0', width: '15px' },
      '&:hover': {
        background: 'var(--dn-resize-handle-hover-bg-color)',
        color: 'var(--dn-resize-handle-hover-color)',
      },
    },
  }
})
export default useStyles
