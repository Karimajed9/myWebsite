import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToolsService from '../../services/ToolsService';

const CreateOrUpdateToolsComponent = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    
    const [toolName, setToolsName] = useState('');
    const [proficiency, setProficiency] = useState('');
    const [examples, setExamples] = useState('');
    
    const handleToolName = event => {
        setToolsName(event.target.value)
    }

    const handleProficiency = event => {
        setProficiency(event.target.value);
    }

    const handleExamples = event => {
        setExamples(event.target.value)
    }

    function createOrUpdateTools() {
        let tool = {toolName: toolName, proficiency: proficiency, examples: examples};
        console.log('Tool => ' + JSON.stringify(tool));

        if (id === "_add") {
            ToolsService.addTool(tool).then(res => {
                navigate('/tools');
            });
        } else {
            ToolsService.updateTool(tool, id).then(res => {
                navigate('/tools');
            });
        }
    }

    function cancel() {
        navigate('/tools');
    }

    useEffect(() => {
        if (id === "_add") {
            return
        } else {
            (async () => {
                try {
                    await ToolsService.getToolById(id).then(res => { 
                        let tool = res.data;
                        setToolsName(tool.toolName);
                        setProficiency(tool.proficiency);
                        setExamples(tool.examples);
                    });
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [id]);

    function getTitle() {
        if (id === "_add") {
            return <h3 className='text-center'>Add Tool</h3>
        } else {
            return <h3 className='text-center'>Update Tool</h3>
        }
    }

    return (
        <div>
            <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            { getTitle() }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Tool Name: </label>
                                        <input placeholder='Tool Name' name='toolName' className='form-control'
                                            value={toolName} onChange={handleToolName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Proficiency: </label>
                                        <input placeholder='Proficiency' name='proficiency' className='form-control'
                                            value={proficiency} onChange={handleProficiency}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Examples: </label>
                                        <input placeholder='Examples' name='description' className='form-control'
                                            value={examples} onChange={handleExamples}/>
                                    </div>


                                    <button className="btn btn-success" type="button" onClick={createOrUpdateTools}>Save</button>
                                    <button className="btn btn-danger" type="button" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default CreateOrUpdateToolsComponent;