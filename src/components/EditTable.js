import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';
import { MDBBtn } from "mdbreact";
import CreateProject from "./CreateProject";
import "../css/index.css";
import axios from "axios";

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
},
    {
        dataField: "delete",
        formatter: () => {
                return <MDBBtn style={{marginLeft: 60}} color="danger">Delete</MDBBtn>
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
        isOpen: false,
        projects: []
    };

    handler = (val) => {
        this.setState({
            isOpen: val
        })
    }

render() {

    return (
        <div>
            <MDBBtn style={{right: 5}} color="default" onClick={this.btnCreateProject}>Create project</MDBBtn>
            <CreateProject defaultOpen={this.state.isOpen} projects={this.state.projects} handler = {this.handler}/>
        <BootstrapTable
        keyField='id'
        data={this.state.projects}
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

    getProjects = () => {
        console.log("getProjects starts")
        axios.get(`http://localhost:8080/project/list`).then(res => {
            this.setState({
                projects: res.data
            })
        })
    };

    componentDidMount() {
        this.getProjects()
    }

}
export default EditTable