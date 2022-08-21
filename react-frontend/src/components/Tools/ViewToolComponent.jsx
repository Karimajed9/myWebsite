import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToolsService from '../../services/ToolsService';

const ViewToolComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();

    const [tools, setTools] = useState([]);

    function cancel() {
        navigate('/tools');
    }

    useEffect(() => {
        (async () => {
            try {
                await ToolsService.getToolById(id).then(res => { setTools(res.data) });
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id]);

    return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Tool </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> Tool: </label>
                            <div> { tools.toolName } </div>
                        </div>
                        <div className='row'>
                            <label> Proficiency: </label>
                            <div> { tools.proficiency } </div>
                        </div>
                        <div className='row'>
                            <label> Examples: </label>
                            <div> { tools.examples } </div>
                        </div>
                        <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>
            </div>
        );
}

export default ViewToolComponent;