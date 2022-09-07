import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBeforeFirstrender from "../../../utils/useBeforeFirstrender";
import CardUi from "../../components/card/CardUi";
import ModalUser from "../../components/modal/ModalUser";

const Single = () => {
  let { userId } = useParams();
  const { isLoading, users } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const filteringUser = users
    .map((user) => {
      return user;
    })
    .find((user) => user.id == userId);

  useBeforeFirstrender(filteringUser);

  if (!filteringUser) return;

  return (
    <div className="">
      <CardUi data={filteringUser} setOpenModal={setOpenModal}/>
    </div>
  );
};

export default Single;
