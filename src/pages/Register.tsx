import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setName } from "../store/userSlice";

const Register = () => {
  const data = useAppSelector((store) => store.user);
  console.log(data);

  const dispatch = useAppDispatch();
  dispatch(setName("John"));

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Register;
