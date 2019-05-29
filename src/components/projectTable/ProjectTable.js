import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';
import { MDBBtn } from "mdbreact";
import CreateProject from "./CreateProject";
import "../../css/index.css";
import axios from "axios";

class ProjectTable extends Component {

    state = {
        isOpen: false,
        projects: [],
    };

    handlerAddProject = (val) => {
        this.setState({
            isOpen: val
        });
        this.getProjects();
        this.props.getProjectIds();
    };

render() {

    return  (
        <div>
            <MDBBtn style={{right: 5}} color="default" onClick={this.btnCreateProject}>Create project</MDBBtn>
            <CreateProject defaultOpen={this.state.isOpen} projects={this.state.projects}
                           handlerAddProject = {this.handlerAddProject} defaultDateEnd={"2020-10-10"}
                          />
        <BootstrapTable
        keyField='id'
        data={this.state.projects}
        columns={this.columns}
        cellEdit={this.cellEdit}
    /></div>
    );
}

    btnCreateProject = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getProjects = () => {
        axios.get(`http://localhost:8080/api/project/list`).then(res => {
            this.setState({
                projects: res.data
            })
        })
    };

    componentDidMount() {
        this.getProjects()
    }

    columns = [{
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
        editable: false
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
                onClick: (e, column, columnIndex, row, rowIndex) => {
                    const url = `http://localhost:8080/api/project/remove/` + row.id;
                    axios.delete(url, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    })
                        .then(res => {
                            this.getProjects();
                            this.props.getProjectIds();
                        });},
            },
            editable: false,
            text: 'Delete'
        },
    ];

    cellEdit = cellEditFactory({
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => {
            console.log("row", row);
            let data = JSON.stringify({
                id: row.id,
                name: row.name,
                description: row.description,
                dateEnd: row.dateEnd
            });
            axios.put(`http://localhost:8080/api/project`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
                .then(res => {
                    this.getProjects();
                });
        },
    });

}
export default ProjectTable