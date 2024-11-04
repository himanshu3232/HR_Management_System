import { IEmployee } from "../data/submitForm";

export default function ListAllEmployees(props: any) {
  return (
    <>
      {props?.employees.map((employee: IEmployee) => (
        <>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{employee.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {employee.role}
              </h6>
              <p className="card-text">{employee.contact}</p>
              <p className="card-text">{employee.salary}</p>
              <p className="card-text">{employee.performance}</p>
            </div>
          </div>
          <div />
        </>
      ))}
    </>
  );
}
