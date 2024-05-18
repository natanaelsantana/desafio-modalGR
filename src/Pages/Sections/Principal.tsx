import { Card } from "../../Components/Card";

const Principal = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white text-center">
        Escolha a questão que deseja testar
      </h2>

      <div className="flex flex-col items-center space-y-10 justify-center lg:flex lg:flex-row lg:space-y-0 lg:space-x-10">
        <Card title="Questão 1" linkTo="/question-one">
          <p className="text-justify">Descrição: Exibição de padrão de nomes</p>
        </Card>

        <Card title="Questão 2" linkTo="/question-two">
          <p className="text-justify">
            Descrição: Separação de dados em uma string
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Principal;
