import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../../../application/user.actions";
import Buttons from "../../components/buttons/Buttons";
import Table from "../../components/table/Table";

function Home() {
  let navigate = useNavigate();
  const { isLoading, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleEdit = (id) => {
    navigate(`/single/${id}`)
  }

  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  }

  return (
    <div className="content">
      <h1 className="content__title">Place Holder</h1>

      <span>{isLoading ? "Cargando..." : "Data Ready"}</span>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>correo</th>
            <th>phone</th>
            <th>website</th>
            <th>Action</th>
          </tr>
        </thead>
        {!isLoading && (
          <tbody>
            {users.map(({ id, name, email, phone, website }) => (
              <tr key={id}>
                <td width={"5%"}>{id}</td>
                <td width={"25%"}>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>
                  <Buttons className="btn is-small is-white" onClick={() => handleDelete(id)}>Eliminar</Buttons>
                  <Buttons className="btn is-small is-white" onClick={() => handleEdit(id)}>Editar</Buttons>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      <div className="content__card"></div>
    </div>
  );
}

export default Home;
