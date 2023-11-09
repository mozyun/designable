import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    'dn-fold-item': {
      '.ant-formily-item-label-content': { overflow: 'visible' },
      '&-base': { cursor: 'pointer' },
      '&-title': {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-10px',
        cursor: 'pointer',
      },
      '&-extra': {
        marginTop: '-10px',
        marginLeft: '-10px',
        marginRight: '-10px',
        marginBottom: '10px',
        padding: '10px 10px 0 10px',
        backgroundColor: 'var(--dn-composite-panel-highlight-bg-color)',
      },
    },
    'dn-icon': {
      svg: { transform: 'rotate(0deg)' },
    },
  }
})
export default useStyles
