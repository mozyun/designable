import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    animate__slideInRight: {
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
    },
    animate__slideOutRight: {
      WebkitAnimationName: 'slideOutRight',
      animationName: 'slideOutRight',
    },
    animate__animated: {
      animationDelay: '0ms',
      animationDuration: '0.25s',
      animationFillMode: 'forwards',
    },
    animate__fadeInUp: {
      WebkitAnimationName: 'fadeIn',
      animationName: 'fadeIn',
    },
    'dn-settings-form-wrapper': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      '.ant-formily-item': {
        borderBottom: '1px solid #f5f5f5',
        paddingBottom: '8px',
        marginBottom: '8px',
        marginTop: '8px',
        '*': {
          fontSize: '13px',
        },
        '.ant-formily-item-control-content-component': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          '& > .ant-radio-group': {
            display: 'flex',
            width: '100%',
            '.ant-radio-button-wrapper': {
              display: 'flex',
              justifyContent: 'center',
              padding: '0 6px',
              alignItems: 'center',
              flexGrow: '2',
            },
          },
          '& > .ant-slider': { flexShrink: '0', minWidth: '0', width: '100%' },
          '& > .ant-select': { maxWidth: '140px' },
        },
      },
    },
    'dn-node-path': {
      flexGrow: '0',
    },
    'dn-settings-form-content': {
      flexGrow: '1',
      overflow: 'overlay',
    },
    'dn-settings-form': {
      padding: '0 20px',
      '&-empty': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        color: '#888',
      },
    },
  }
})
export default useStyles
