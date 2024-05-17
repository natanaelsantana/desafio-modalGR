import { Link } from "react-router-dom";
import { Card } from "../../Components/Card";

const Principal = () => {
  return (
    <div className="">
      <h2 className=""> Escolha a questão que deseja avaliar:</h2>

      <div className="">
        <Card>
          <Link to={"/question-one"}>Jorge </Link>
        </Card>

        <Card>
          <Link to={"/question-two"}>Jorge</Link>
        </Card>
      </div>
    </div>
  );
};

export default Principal;
