import axios from "axios";

export interface IEmployee {
  name: string;
  contact: string;
  role: string;
  salary: string;
  performance: string;
}

export const submitForm = (data: IEmployee) => {
  axios
    .post("http://localhost:8080/add-employee", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
