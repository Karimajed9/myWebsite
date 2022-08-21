import React, {useState, useEffect} from 'react';
import ToolsService from '../../services/ToolsService';
import { useNavigate } from 'react-router-dom';

const ListToolsComponent = () => {
    let navigate = useNavigate();
    
    const [toolsList, setToolsList] = useState([]);

    function addTool() {
        navigate('/add-tool/_add');
    };

    function editTool(id) {
        navigate(`/add-tool/${id}`);
    }

    function deleteTool(id) {
        ToolsService.deleteTool(id).then( res => {
            setToolsList(toolsList.filter(tool => tool.id !== id));
        });
    }

    function viewTool(id) {
        navigate(`/view-tool/${id}`);
    }

    useEffect(() => {
        (async () => {
            try {
                await ToolsService.getAllTools().then(res => { setToolsList(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            <h2 className='text-center'>Tools</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addTool}> Add Tool </button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th> Tool Name </th>
                            <th> Proficiency </th>
                            <th> Examples </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            toolsList.map(
                                tool =>
                                <tr key={tool.id}>
                                    <td> {tool.toolName} </td>
                                    <td> {tool.proficiency} </td>
                                    <td> {tool.examples} </td>
                                    <td>
                                        <button onClick = {() => editTool(tool.id)} className = "btn btn-info"> Update </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => deleteTool(tool.id)} className = "btn btn-danger"> Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => viewTool(tool.id)} className = "btn btn-info"> View </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
  }

export default ListToolsComponent