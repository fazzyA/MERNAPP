import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddDialog from '../Users/AddDialog'; 

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
function Editable({rows, cols, type}) {
    const { useState } = React;
  
    const [columns, setColumns] = useState(cols);
  
    const [data, setData] = useState([]);

    const handleUpdate=async (id,newData)=>{
      console.log(id);
      var myUpdatedData;
      if(type=='posts') {

        let {title,description} = newData
         myUpdatedData = {title,description}

      } else{
        let {name,email} = newData
         myUpdatedData = {name,email}


      }
      const usr= await axios.put(`http://localhost:4000/api/${type}/update/${id}`,myUpdatedData)
      console.log(usr);
    }
    const handleDelete = async (id)=>{
      const usr= await axios.delete(`http://localhost:4000/api/${type}/${id}`)
      console.log(usr)
    }
    useEffect(()=>{
        setData(rows)
        setColumns(cols)
    },[rows])


    // for add-user dialog box
    const [open, setOpen] = useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };


    // console.log(users);
    // console.log(data);
    return (
      <div>
      <AddDialog mainOpen={open} mainSetOpen={setOpen} mainHandleClose={handleClose} />

      <MaterialTable
        title="Editable Preview"
        icons={tableIcons}
        columns={columns}
        data={data}
        actions={[
          {
            icon: tableIcons.Add,
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: handleClickOpen,
          },           
        ]}
        editable={{
           
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                handleUpdate(dataUpdate[index]._id, newData);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                handleDelete(dataDelete[index]._id);

                resolve()
              }, 1000)
            }),
        }}
      />
      </div>
    )
  }
  export default Editable
  