
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import SvgIcon from '@material-ui/core/SvgIcon';

import mailTableStyle from './mailTableStyle';
import mailHeaderTableStyle from './mailHeaderTableStyle';
import './mailTable.css';

function desc(a, b, orderBy) {
  if(orderBy === 'date') {
    a = new Date(a[orderBy]).getTime();
    b = new Date(b[orderBy]).getTime();
    if (b < a) {
      return -1;
    }
    if (b > a) {
      return 1;
    }
    return 0;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  {
    id: "from",
    numeric: false,
    disablePadding: true,
    label: "From"
  },
  { id: "to", numeric: false, disablePadding: false, label: "To" },
  { id: "subject", numeric: false, disablePadding: false, label: "Subject" },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
];

function ArrowIcon(props) {
  return(
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
        <defs>
          <style>
            .a{'fill:#333;'}
          </style>
        </defs>
      <title>icon_arrow01</title>
      <polygon className="a" points="8 5 3.993 0 0 5 8 5"/></svg>
    </SvgIcon>
  );
}

function ArrowIcon2(props) {
  return(
    <SvgIcon className="arrowIcon2" classes={{root: props}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.9882 6">
        <defs>
          <style>
            .a{'fill:#666;'}
          </style>
        </defs>
        <title>icon_arrow02</title>
        <path className="a" d="M2.9882,3.00782a.29009.29009,0,0,1-.07319.19286L.51262,5.90234a.29054.29054,0,0,1-.43456-.38577l2.23114-2.509L.07806.48856A.29045.29045,0,0,1,.50284.09233l.00978.011L2.91512,2.8152A.28942.28942,0,0,1,2.9882,3.00782Z"/>
      </svg>
    </SvgIcon>
  );
}

function clipIcon(props) {
  return (
    <SvgIcon classes={{root: props}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.93083 15">
      <defs>
        <style>
          .a{'fill:#666;'}
        </style>
      </defs>
      <title>icon_clip</title>
      <path className="a" d="M6.799,3.6254A2.30522,2.30522,0,1,0,3.56718,6.85622l4.304,4.304a.5222.5222,0,0,0,.7385-.7385l-4.304-4.304c-.53586-.53586-.87743-1.33808-.23084-1.98466.64553-.64659,1.4488-.304,1.98466.23189L11.032,9.3364c1.90632,1.90841,2.38159,2.78793,1.24615,3.92441-1.149,1.148-2.367.86385-4.20121-.96935L2.367,6.57941C1.1741,5.38653.33845,3.43842,1.90633,1.87159c1.86141-1.86141,3.98708-.03134,4.59293.57555l5.11038,5.11142a.5222.5222,0,0,0,.7385-.7385L7.23776,1.70864C5.18625-.34288,2.86-.56223,1.16678,1.13308c-1.711,1.71-1.5261,4.196.4617,6.18484l5.711,5.711C7.96726,13.6567,9.31161,15,10.85756,15a3.01214,3.01214,0,0,0,2.16014-1.00173c2.07554-2.07658.15564-3.99857-1.24616-5.40141Z"/>
      </svg>
    </SvgIcon>
  )
}

function MailIcon(props) {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.35144 26.35693">
        <defs>
          <style>.a{'fill:#666;'}</style>
        </defs>
        <title>icon_mail_sp</title>
        <path className="a" d="M0,0V7.20007H11.35144V0ZM9.90466.80005,5.67542,4.34863,1.44617.80005ZM.80005,6.4V1.30225L5.41858,5.17773a.39868.39868,0,0,0,.51367,0l4.61914-3.876V6.4Z"/>
        <path className="a" d="M3.54952,13.76637a.36946.36946,0,0,0,0,.52093l2.13177,2.14285L7.82044,14.291a.36945.36945,0,0,0-.52093-.52093L6.05075,15.01513v-2.7963a.36946.36946,0,0,0-.73892,0v2.80738L4.06307,13.77745A.36946.36946,0,0,0,3.54952,13.76637Z"/>
        <path className="a" d="M5.67566,22.35693a1.5,1.5,0,1,1-1.5,1.5,1.50164,1.50164,0,0,1,1.5-1.5m0-1a2.5,2.5,0,1,0,2.5,2.5,2.5,2.5,0,0,0-2.5-2.5Z"/>
      </svg>
    </SvgIcon>
  )
}

function EnhancedTableHead(props) {
  const {
    // onSelectAllClick,
    order,
    orderBy,
    // numSelected,
    // rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const classes = mailHeaderTableStyle();
  return (
    <TableHead classes={{root: classes.head}}>
      <TableRow classes={{root: classes.row}}>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            classes={{root: classes.cell}}
            sortDirection={orderBy === row.id ? order : false}
          >
            <div className='headCellCont'>
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={createSortHandler(row.id)}
                IconComponent={ArrowIcon}
                classes={{root: classes.sort, icon: classes.arrowIcon, iconDirectionDesc: classes.arrowIconDesc, iconDirectionAsc: classes.arrowIconAsc}}
              >
                {row.label}
              </TableSortLabel>
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function MailTable(props) {
  const classes = mailTableStyle();
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = React.useState([]);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = props.mailHeaders.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }

  const isSelected = name => selected.indexOf(name) !== -1;

  const expand = (event, exp) => {
    const arrowIcon2 = event.currentTarget.getElementsByClassName('arrowIcon2')[0];
    if(exp) {
      arrowIcon2.style.transform = 'rotate(90deg)';
    } else {
      arrowIcon2.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <Paper classes={{root: classes.root}}>
      <Table classes={{root: classes.table}}>
        <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
          />
        <TableBody classes={{root: classes.tableBody}}>
          {stableSort(props.mailHeaders, getSorting(order, orderBy))
                .map((head, index) => {
                  const isItemSelected = isSelected(head.id);

                  return (
                    <ExpansionPanel key={head.id} classes={{root: classes.expPanel}} onChange={expand}>
                      <ExpansionPanelSummary classes={{root: classes.expSummary, content: classes.expContent}}>
                        <TableRow
                          hover={false}
                          onClick={event => handleClick(event, head.id)}
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={head.id}
                          selected={isItemSelected}
                          classes={{root: classes.row}}
                        >
                          <TableCell classes= {{root: classes.cellMailIcon}}>{MailIcon()}</TableCell>
                          <TableCell classes={{root: classes.cellFrom}}>{head.from}</TableCell>
                          <TableCell classes={{root: classes.cellTo}}>
                            {head.to.length > 1 ?
                              (<div>
                                <div className="multipleTo">
                                  {head.to.reduce((acc, cur) => acc + ', ' + cur)}
                                </div>
                                <span className="toBadge">+{head.to.length}</span>
                              </div>)
                              : (head.to)}
                          </TableCell>
                          <TableCell classes={{root: classes.cellSubject}}>
                            {head.attachment ? 
                              (<div className="subjectRow">{head.subject}<span>{clipIcon(classes.clipIcon)}</span></div>)
                              : (head.subject)}
                          </TableCell>
                          <TableCell classes={{root: classes.cellDate}}>
                            {head.attachment ?
                              (<div>{clipIcon(classes.mobileClipIcon)}<span className="dateRow">{head.date}</span>{ArrowIcon2(classes.arrowIcon2)}</div>)
                              : <div><span className="dateRow">{head.date}</span><span>{ArrowIcon2(classes.arrowIcon2)}</span></div>}
                          </TableCell>
                        </TableRow>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails classes={{root: classes.expDetails}}>
                          <div id='mailContentHead'>
                            <div><span>From: </span><span>{head.from}</span></div>
                            <div>
                              <span>To: </span>
                              {head.to.length > 1 ?
                                <span>{head.to.reduce((acc, cur) => acc + ', ' + cur)}</span>
                                : <span>{head.to}</span>}
                            </div>
                            <div><span>Subject: </span><span>{head.subject}</span></div>
                          </div>
                          <br/>
                          <div id='mailContent'>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin ullamcorper lorem nec tempus.
                            Nam cursus nisi vitae odio maximus, ac sodales dolor porttitor.
                            Aliquam pulvinar maximus mauris, in faucibus felis sagittis ac.
                            Quisque a purus enim. Integer iaculis urna vel orci consequat, non tincidunt sapien vulputate.
                            Donec dignissim vitae sapien sit amet tincidunt. Vivamus rutrum gravida lacus non imperdiet.
                            Aliquam a aliquam metus. Morbi finibus nisi at ante ultricies, at cursus mi molestie.
                            Duis interdum tellus id porta vehicula. Nunc et imperdiet ante. Ut consequat quis est quis cursus.
                            Aenean rhoncus odio vel cursus viverra.
                            </Typography>
                          </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  );
                })}
        </TableBody>
      </Table>
    </Paper>
  );
}