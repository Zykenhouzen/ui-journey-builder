import axios from 'axios';

let tenant_id = 1234;
let action_blueprint_id = 'asdf';
let constant_URI = `http://localhost:3000/api/v1/${tenant_id}/actions/blueprints/${action_blueprint_id}/graph/`

function getBlueprint() {
    return axios.get(constant_URI)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
}

function putBlueprint(blueprint: any) {
    console.log("Putting blueprint:", blueprint);
    return () => {
        axios.put(constant_URI, blueprint)
        .then(response => {
            console.log("Blueprint saved successfully:", response.data);
        })
        .catch(error => {
            console.error("Error saving blueprint:", error);
        });
      }
}

export {getBlueprint, putBlueprint};
