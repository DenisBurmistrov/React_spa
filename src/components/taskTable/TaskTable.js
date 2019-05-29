import React, {Component} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Type } from 'react-bootstrap-table2-editor';
import { MDBBtn } from "mdbreact";
import CreateTask from "../taskTable/CreateTask";
import "../../css/index.css";
import axios from "axios";

class TaskTable extends Component {

    state = {
        isOpen: false,
        tasks: [],
        projectIds: this.props.projectIds,
    };

    handlerAddTask = (val) => {
        this.setState({
            isOpen: val
        });
        this.getTasks()
    };

    render() {
        return  (
            <div>
                <MDBBtn style={{right: 5}} color="default" onClick={this.btnCreateTask}>Create task</MDBBtn>
                <CreateTask defaultOpen={this.state.isOpen} tasks={this.state.tasks}
                               handlerAddTask = {this.handlerAddTask} defaultDateEnd={"2020-10-10"}
                            projectIds={this.state.projectIds}/>
                <BootstrapTable
                    keyField='id'
                    data={this.state.tasks}
                    columns={this.columns}
                    cellEdit={this.cellEdit}
                /></div>
        );
    }

    btnCreateTask = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getTasks = () => {
        axios.get(`http://localhost:8080/api/task/list`).then(res => {
            this.setState({
                tasks: res.data
            })
        })
    };

    componentDidMount() {
        this.getTasks();
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
            dataField: 'projectId',
            text: 'Project id',
            editor: {
                type: Type.SELECT,
                options: this.state.projectIds
            }
        },
        {
            dataField: "delete",
            formatter: () => {
                return <MDBBtn style={{marginLeft: 60}} color="danger">Delete</MDBBtn>
            },
            events: {
                onClick: (e, column, columnIndex, row, rowIndex) => {
                    const url = `http://localhost:8080/api/task/remove/` + row.id;
                    axios.delete(url, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    })
                        .then(res => {
                            this.getTasks()
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
                projectId: row.projectId,
                name: row.name,
                description: row.description,
                dateEnd: row.dateEnd
            });
            axios.put(`http://localhost:8080/api/task`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
                .then(res => {
                    this.getTasks();
                });
        },
    });

    getProjectsId = () => {
        axios.get(`http://localhost:8080/api/project/list`).then(res => {
            const projectIds = [
            ];

            res.data.forEach(function(element) {
                const obj = {
                    value: element.id,
                    label: element.id
                };
                projectIds.push(obj);
            });

            this.setState({
                projectIds: projectIds
            });
        })
    };



}
export default TaskTable