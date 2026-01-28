import axios from 'axios';

let tenant_id = 1234;
let action_blueprint_id = 'asdf';
let blueprint_version_id = 'zcxv';
let constant_URI = `http://localhost:3000/api/v1/${tenant_id}/actions/blueprints/${action_blueprint_id}/graph/`

function GetBlueprint() {
    return axios.get(constant_URI)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
}

export default GetBlueprint;
