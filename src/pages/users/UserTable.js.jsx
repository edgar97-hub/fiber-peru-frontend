import React, { useState, useEffect } from 'react';
//import UserDialogForm from './UserDialogForm';
import useTable from '../../components/toolsForm/useTable';
import Controls from '../../components/controls/Controls';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../components/toolsForm/Popup';
import Notification from '../../components/toolsForm/Notification';
import ConfirmDialog from '../../components/toolsForm/ConfirmDialog';
import {
  collection,
  getDocs,
  onSnapshot,
  where,
  query,
} from 'firebase/firestore';
import { db } from '../../firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    // margin: theme.spacing(1),
    // padding: theme.spacing(1),
    width: '100%',
    // border: "1px solid forestgreen",
    overflowX: 'auto',
  },
  allUsers: {
    //right: '10px'
    //marginRight:"80px",
    marginLeft: '20px',
    marginBottom: '10px',
  },
}));

const headCells = [
  { id: 'fullName', label: 'Nombre completo' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Número de teléfono' },
  // { id: 'role', label: 'Rol' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];

export default function UserTable() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState([{ id: '' }]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });
	
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'users'),
      async (snapShot) => {
        
        // setRoles(nameRoles);
        // let users = [];
        // snapShot.docs.forEach((doc) => {
        //   users.push({ ...doc.data(), id: doc.id });
        // });
        setRecords([]);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  async function addOrEdit(value, resetForm) {
    setLoading(true);
    if (value.id == 0) {
      try {
        await postData(
          'https://us-central1-daphtech-31758.cloudfunctions.net/user',
          value
        );
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        await updateData(
          'https://us-central1-daphtech-31758.cloudfunctions.net/user',
          value
        );
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setNotify({
      isOpen: true,
      message: 'guardado con éxito',
      type: 'success',
    });
  }

  const recordEdit = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

   
  async function onDelete(item) {
    
    setLoading(true);
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    try {
      var response = await deleteData(
        'https://us-central1-daphtech-31758.cloudfunctions.net/user',
        item
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'success',
    });
  }
  async function deleteData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function updateData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            size="small"
            label="Buscar usuarios"
            sx={{
              width: { xs: 400, sm: 280, md: 600, lg: 700 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer size="small">
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting()?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                {/* <TableCell>{item.role}</TableCell> */}
                <TableCell>
                  <Controls.ActionButton
                    //color="primary"
                    onClick={async () => {
                      // var companiesAndBranches =
                      //   await getAllCompaniesAndBranches(item);
                      // item.companiesAndBranches = companiesAndBranches;
                      recordEdit(item);
                    }}
                  >
                    <EditIcon sx={{ color: '#888e8b' }} />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: 'Estás seguro de eliminar este registro?',
                        subTitle: 'No podrá deshacer esta operación',
                        onConfirm: () => {
                          onDelete(item);
                        },
                      });
                    }}
                  >
                    <DeleteIcon sx={{ color: '#888e8b' }} />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Formulario de usuario"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {/* <UserDialogForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          loading={loading}
          roles={roles}
          getAllCompaniesAndBranches={getAllCompaniesAndBranches}
        /> */}
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}