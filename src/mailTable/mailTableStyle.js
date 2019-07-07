import { makeStyles } from '@material-ui/core/styles';

const mailTableStyle = makeStyles(theme => ({
    root: {
      width: "90%",
      textAlign: 'left',
      margin: 'auto',
      'box-shadow': 'unset',
      '@media (max-width:500px)': {
        width: '100%',
      }
    },
    paper: {
      width: "100%",
    },
    table: {
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    tableBody: {
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    expPanel: {
      'box-shadow': 'unset',
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    expSummary: {
      padding: '0px 0px 0px 0px',
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    expContent: {
      margin: '0px 0px 0px 0px',
    },
    expDetails: {
      display: 'block',
    },
    row: {
      display: 'inline-grid',
      'grid-template-columns': '20% 20% 50% 10%',
      width: '100%',
      '&:hover': {
        color: '#0033dd',
      },
      '@media (max-width:500px)': {
        display: 'grid',
        'grid-template-columns': '8% 60% 32%',
        'grid-template-rows': '33% 33% 33%',
        'padding': '5px 10px 5px 10px',
        '&:last-child td': {
          'padding-right': '0px',
        },
        '&:hover': {
          color: 'inherit',
        },
      }
    },
    cell: {
      color: 'inherit',
      '@media (max-width:500px)': {
        display: 'block',
      }
    },
    cellMailIcon: {
      display: 'none',
      '@media (max-width:500px)': {
        display: 'block',
        'grid-column-start': 1,
        'grid-column-end': 1,
        'grid-row-start': 1,
        'grid-row-end': 3,
        margin: 'auto',
        'border-bottom': 'none',
        'padding': 0
      }
    },
    cellFrom: {
      'font-size': '1.1em',
      color: 'inherit',
      '@media (max-width:500px)': {
        display: 'block',
        'grid-column-start': 2,
        'grid-column-end': 2,
        'grid-row-start': 1,
        'grid-row-end': 1,
        'border-bottom': 'none',
        'padding': 0,
        'font-weight': 'bold',
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
        'white-space': 'nowrap'
      }
    },
    cellTo: {
      'font-size': '1.1em',
      color: 'inherit',
      '@media (max-width:500px)': {
        display: 'block',
        'grid-column-start': 2,
        'grid-column-end': 4,
        'grid-row-start': 2,
        'grid-row-end': 2,
        'border-bottom': 'none',
        'padding': 0,
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
        'white-space': 'nowrap',
      }
    },
    cellSubject: {
      'font-size': '1.1em',
      color: 'inherit',
      padding: '14px 0px 14px 16px',
      '@media (max-width:500px)': {
        display: 'block',
        'grid-column-start': 1,
        'grid-column-end': 4,
        'grid-row-start': 3,
        'grid-row-end': 3,
        'border-bottom': 'none',
        'padding': 0,
        'font-weight': 'bold',
        'text-overflow': 'ellipsis',
        overflow: 'hidden',
        'white-space': 'nowrap'
      }
    },
    cellDate: {
      color: 'inherit',
      '@media (max-width:500px)': {
        display: 'block',
        'grid-column-start': 3,
        'grid-column-end': 3,
        'grid-row-start': 1,
        'grid-row-end': 1,
        margin: 'auto',
        'margin-right': '0px',
        'border-bottom': 'none',
        'padding': '0',
      }
    },
    clipIcon: {
      display: 'inline',
      'font-size': '1.2rem',
      float:'right',
      '@media (max-width:500px)': {
        display: 'none',
      }
    },
    mobileClipIcon: {
      display: 'none',
      '@media (max-width:500px)': {
        display: 'inline-block',
        width: '0.85em',
        float: 'left',
        position: 'relative',
      }
    },
    arrowIcon2: {
      display: 'none',
      '@media (max-width:500px)': {
        display: 'inline-block',      
        'font-size': '0.6em',
        transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
      }
    },
    tableWrapper: {
      overflowX: "auto"
    }
}));

export default mailTableStyle;