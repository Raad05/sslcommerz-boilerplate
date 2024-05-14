import { useParams } from "react-router-dom";

const Success = () => {
  const { id } = useParams();
  return (
    <div className="success">
      <h1>Payment successful for ID: {id}</h1>
    </div>
  );
};

export default Success;
