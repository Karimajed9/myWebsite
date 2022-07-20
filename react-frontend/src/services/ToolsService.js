import axios from 'axios';

const TOOLS_API_BASE_URL = "http://localhost:8080/api/v1/tools";

class ToolsService {

    getTools() {
        return axios.get(TOOLS_API_BASE_URL);
    }

    createTool(tool) {
        return axios.post(TOOLS_API_BASE_URL, tool);
    }

    getToolById(toolId) {
        return axios.get(TOOLS_API_BASE_URL + '/' + toolId);
    }

    updateTool(tool, toolId){
        return axios.put(TOOLS_API_BASE_URL + '/' + toolId, tool);
    }

    deleteTool(toolId) {
        return axios.delete(TOOLS_API_BASE_URL + '/' + toolId);
    }
}

export default new ToolsService()