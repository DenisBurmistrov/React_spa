import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '../css/table.css'

const ContentTable = (props) => {
    return (
        <MDBTable striped>
            <MDBTableHead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date begin</th>
                    <th>Date end</th>
                    <th>Status</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default ContentTable;