import axios from "axios";
import { IEmployee } from "./submitForm";

export const getAllEmployees = async (): Promise<IEmployee[]> => {
    console.log("Fetching employees...");
    try {
        const response = await axios.get<IEmployee[]>("http://localhost:8080/get-all-employees");
        return response.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        return [];
    }
};