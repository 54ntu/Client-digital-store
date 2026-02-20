import { useAppDispatch, useAppSelector } from "../store/hooks";

const Register = () => {
  const data = useAppSelector((store) => store.user);
  console.log(data);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Register;
