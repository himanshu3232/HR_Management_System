import axios from "axios";
import { IEmployee } from "./submitForm";

export const getEmployeeById = async (id : string): Promise<IEmployee> => {
  const result = await axios
    .get<IEmployee>(`http://localhost:8080/get-details/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  if (result) return result;
  else
    return {
      name: "",
      contact: "",
      role: "",
      salary: "",
      performance: "",
    };
};
