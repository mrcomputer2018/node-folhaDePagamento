# Sistema de Folha de Pagamento em Node.js

Bem-vindo ao **Sistema de Folha de Pagamento**, um projeto simples em Node.js para gerenciar informações de funcionários, registrar horas trabalhadas e calcular a folha de pagamento mensal.

## Funcionalidades

- **Cadastro de Funcionários**: Adicione novos funcionários ao sistema.
- **Registro de Horas Trabalhadas**: Registre as horas trabalhadas por um funcionário.
- **Listagem de Funcionários**: Visualize todos os funcionários cadastrados.
- **Cálculo de Salário Mensal**: Calcule o salário mensal de um funcionário com base nas horas trabalhadas.
- **Relatório de Pagamento**: Gere um relatório de pagamento detalhado.
- **Interação Simples**: Interface em linha de comando (CLI) para uma interação fácil e direta.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior) instalado no sistema.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/mrcomputer2018/node-folhaDePagamento
   cd folha-de-pagamento
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Certifique-se de que os módulos `Funcionario.js`, `Pagamento.js` e `Salario.js` estão implementados corretamente.

## Estrutura do Projeto

```
src/
│
├── Funcionario.js       # Funções relacionadas ao gerenciamento de funcionários
├── Pagamento.js         # Funções relacionadas ao pagamento e relatórios
├── Salario.js           # Funções para cálculo de salários
├── index.js             # Arquivo principal com a lógica de interação
/
├── package.json         # Configuração do projeto e dependências
└── README.md            # Documentação do projeto
```

## Como Usar

1. Execute o sistema:
   ```bash
   npm run start
   ```

2. Escolha uma das opções disponíveis no menu principal:
   - **1 - Cadastrar Funcionário**: Insira os dados solicitados para adicionar um novo funcionário.
   - **2 - Registrar Horas Trabalhadas**: Informe o nome do funcionário e a quantidade de horas trabalhadas.
   - **3 - Listar Funcionários**: Exiba a lista de funcionários cadastrados.
   - **4 - Calcular Folha de Pagamento**: Calcule o salário mensal de um funcionário.
   - **5 - Imprimir Relatório de Pagamento**: Gere um relatório detalhado com os pagamentos.
   - **6 - Sair**: Finalize o programa.

3. Após cada operação, você será perguntado se deseja continuar no sistema.

## Exemplo de Uso

```bash
Digite o número correspondente à opção desejada:
1 - Cadastrar Funcionário
2 - Registrar Horas Trabalhadas
3 - Listar Funcionários
4 - Calcular Folha de Pagamento
5 - Imprimir Relatório de Pagamento
6 - Sair
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova funcionalidade:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Realize suas alterações e faça commits.
4. Envie um pull request.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo conforme suas necessidades.

---

Divirta-se utilizando o Sistema de Folha de Pagamento! 🎉