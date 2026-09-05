Instruções
_________________________

git status
Mostra o estado atual do projeto: quais arquivos foram modificados, criados ou excluídos e o que está pronto para o próximo commit.

git add .
Adiciona todas as alterações da pasta atual ao próximo commit, preparando-as para serem salvas no histórico.

git commit -m "Mensagem"
Cria uma nova versão (snapshot) do projeto com uma mensagem descrevendo o que foi alterado.

git push
Envia os commits do seu computador para o repositório no GitHub.

git pull
Baixa do GitHub as alterações feitas no repositório e as integra ao projeto local.

Fluxo:
git pull
git status
git add .
git commit -m "Descrição da alteração"
git push

_________________________

Clonar projeto diretamente do GitHub
 
git clone https://github.com/massarudev-coder/Meu-Aplicativo.git

Instale as dependências
npm install
_________________________

Primeira vez?
prefira:

Entre ou crie num projeto
cd "Diretório da projeto"

Adicione os arquivos
git add .

Crie o primeiro commit
git commit -m "Primeiro commit"

Conecte o diretório com o repositório criado no GitHub
git remote add origin "Link criado em HTTPS ao criar um repositório no GitHub"

Confira a conexão
git remote -v

Envie ao GitHub
git branch -M main
git push -u origin main
_________________________

Continuar um projeto
Prefira:

Atualize o projeto
git pull

Execute o projeto
npx expo start

_________________________

Encerrou o projto?
Prefira:

Verifique as mudanças
git status

Prepare os arquivos
git add .

Crie uma nova versão para o GitHub
git commit -m "Descreva o que você fez"

Envie para o GitHub
git push

_________________________

Criar um projeto PDM1 com App.tsx (Expo + TypeScript)
Prefira:

Verifique a versão do NodeJs e npm
node -v
npm -v

Entre na pasta que estará o projeto
cd "Diretório da pasta"

Crie a pasta do projeto
npx create-expo-app NomeDoProjeto --template blank-typescript

Entre no projeto
cd NomeDoProjeto

Instale as dependências(Dentro da pasta do projeto)
npm install

Inicie o projeto
npx expo start

_________________________

1) let -> Usado para declarar uma variável mutável
Escopo -> de fine onde um bloco de código começa e termina.
Método = Função, é um grupinho de código.

2) const -> è uma constante.

3) var -> Palavra-chave que pode ser acessada de qualquer lugar, é global.

Template string, unir variável com string.
${expressão}





setQtde(qtde-1) <=[ - ] 1 [ + ]=> setQtde(qtde+1);

//let qtde = 1;

const [qtde, setQtde] = useState<number>(1);



expo itens para pegar icones
importar  os imports lá em cima.
