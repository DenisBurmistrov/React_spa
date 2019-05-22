import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';
import { MDBBtn } from "mdbreact";
import CreateProject from "./CreateProject";
import "../css/index.css";


const products = [ {
    id: "1",
    name: "project name",
    description: "project description",
    dateBegin: "2019-11-22",
    dateEnd: "2020-11-22",
    status: "project status",
    delete: "1"

} ];
const columns = [{
    dataField: 'id',
    text: 'ID'
}, {
    dataField: 'name',
    text: 'Name'
}, {
    dataField: 'description',
    text: 'Description'
}, {
    dataField: 'dateBegin',
    text: 'Date Begin',
    editor: {
        type: Type.DATE
    }
}, {
    dataField: 'dateEnd',
    text: 'Date End',
    editor: {
        type: Type.DATE
    }
}, {
    dataField: 'status',
    text: 'Status'
},
    {
        dataField: "delete",
        formatter: () => {
                return <MDBBtn style={{marginLeft: 30}} color="danger">Delete</MDBBtn>
        },
        events: {
            onClick: (e, column, columnIndex, row, rowIndex) => { console.log("row", row) },
        },
        editable: false,
        text: 'Delete'
    },
];

const cellEdit = cellEditFactory({
    mode: 'click',
    afterSaveCell: (oldValue, newValue, row, column) => {
        console.log("row", row);
    },
});


class EditTable extends Component {

    state = {
        isOpen: false
    };

render() {
    return (
        <div>
            <MDBBtn style={{right: 5}} color="default" onClick={this.btnCreateProject}>Create project</MDBBtn>
            <CreateProject defaultOpen={this.state.isOpen}/>
        <BootstrapTable
        keyField='id'
        data={products}
        columns={columns}
        cellEdit={cellEdit}
    /></div>
    );
}

    btnCreateProject = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}
export default EditTable