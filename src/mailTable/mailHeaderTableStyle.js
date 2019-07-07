import { makeStyles } from '@material-ui/core/styles';

const mailHeaderTableStyle = makeStyles({
    head: {
      backgroundColor: '#f5f5f5',
      'border-top': '1px solid rgba(222,222,222,1)',
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    row: {
      display: 'inline-grid',
      'grid-template-columns': '20% 20% 50% 10%',
      width: '100%',
      'border-bottom': '1px solid rgba(222,222,222,1)',
      '@media (max-width:500px)': {
        display: 'inherit',
      }
    },
    cell: {
      'border-bottom': 'none',
      'font-size': 'medium',
      '@media (max-width:500px)': {
        padding: '8px 0px 8px 2px',
        '&:last-child div': {
          'border-right': 'none'
        }
      }
    },
    cont: {
      '@media (max-width:500px)': {
        'border-right': '1px solid black',
        display: 'inline',
        '&:last-child' : {
          'border-right': 'none'
        }
      }
    },
    sort: {
      'font-weight': 'bold'
    },
    arrowIcon: {
      width: '0.5em',
      color: 'black',
      padding: '5px 0px',
    },
    arrowIconDesc: {
      transform: 'rotate(0deg)',
    },
    arrowIconAsc: {
      transform: 'rotate(180deg)'
    }
});

export default mailHeaderTableStyle;