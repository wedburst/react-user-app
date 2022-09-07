import { placeApi } from "../adapters/placeHolderApi";
import { removeUser, setUser } from "../use-case/users";

export const getUsers =
  () =>
  async (dispatch) => {
    dispatch({
      type: "USER/pending",
    });
    try {
      const { data } = await placeApi.get(`/users`);
      dispatch(setUser({ users: data}));
      dispatch({
        type: "USER/success",
      });
    } catch (error) {
      dispatch({
        type: "USER/reject",
      });
    }
  };

export const updateUser = () => {};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: "USER/pending",
  });
  try {
    const { data } = await placeApi.delete(`/users/${id}`);
    dispatch(removeUser({ users: data, id }));
    dispatch({
        type: "USER/success",
      });
  } catch (error) {
    dispatch({
      type: "USER/reject",
    });
  }
};
