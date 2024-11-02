# Especificações do Projeto (ADEFIP)

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A Associação dos Deficientes Físicos de Poços de Caldas (ADEFIP) é um Centro de Reabilitação Multidisciplinar existente há 35 anos, no local são atendidos crianças, jovens e adultos com sequelas neuromotoras e a ideia será a criação de alguma ferramenta ou software que irá ser utilizado na ADEFIP por pacientes e funcionários afim de facilitar seu trabalho e/ou terapia. Abaixo o exemplo de duas pessoas que sofrem de deficiências e que poderiam, por meio de trabalhos como o nosso que iremos realizar, serem atendidas e obtivessem uma melhora considerável em suas vidas.

## Personas 

Persona 01

|**Victor Hugo**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-2-ment2-noite1-adefip_1/blob/main/docs/img/victor.png" height="200"/>|**Idade:** 12 anos. **Naturalidade:** Poços de Caldas - Minas Gerais. **Ocupação:** Atendido da Adefip.       |**Atribuições:** Victor Hugo é um atendido da ADEFIP há 8 anos. 
|**Motivações:** Se houvesse uma forma de atualizar ou inserir a tecnologia em suas cadeiras de roda para facilitar suas apresentações artísticas, o que tornaria mais prazero realizar suas danças.  |**Problema:** Sofre com problemas motores em suas pernas, o que faz com que utilize cadeiras de roda.   |**Hobbies, história:** Garoto meigo, que adora matemática e ama ir aos atendimentos da adefip, além de ser artista de dança.

Persona 02

|**Lucas Henrique**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-2-ment2-noite1-adefip_1/blob/main/docs/img/lucasadefip.jpeg" width="200" height="200"/>|**Idade:** 20 anos. **Naturalidade:** Poços de Caldas - Minas Gerais. **Ocupação:** Atendido e funcionário da Adefip.       |**Atribuições:** Lucas trabalha na gráfica rápida da ADEFIP e é atendido. 
|**Motivações:** Se pudesse ser criado um joystick adaptado para seu problema motor nas mãos, onde ele conseguisse jogar seus games com mais prazer.  |**Problema:** Tem problemas motores em uma de suas mãos.   |**Hobbies, história:** Lucas já é atendido da adefip há vários anos, e também passou a fazer parte do pessoal que trabalha na gráfica rápida da ADEFIP. Ele adora jogar bola, onde até mesmo já jogou pela instituição e ama jogar videogame, principalmente seu Playstation 2.

Persona 03

|**Karina Vieira dos Reis**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-2-ment2-noite1-adefip_1/blob/main/docs/img/pedagogaKarina.jpg" width="200" height="200"/>|**Idade:** +- 34 anos. **Naturalidade:** Poços de Caldas - Minas Gerais. **Ocupação:** Psicopedagoga da Adefip.       |**Atribuições:** Psicopedagoga na Adefip, auxiliando os atendidos. 
|**Motivações:** Ela oferece técnicas que podem facilitar o aprendizado e a adaptação de Victor Hugo a diferentes contextos, considerando suas necessidades específicas. |**Problema:**  Ela também trabalha para promover a inclusão social de Victor Hugo, ajudando-o a interagir com seus colegas e a se sentir mais à vontade em ambientes sociais.   |**Hobbies, história:** Karina já trabalha na Adefip há mais de 10 anos e adora a ADEFIP, junto isso também participa das maratonas de corrida da instituição.




## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO...| QUERO/PRECISO ...|PARA ...|
|--------------------|------------------------------------|----------------------------------------|
| Victor Hugo | Controlar minha cadeira de rodas com mais facilidade. | Melhorar minha mobilidade no dia a dia. |
| Victor Hugo | Automatizar movimentos da minha cadeira de rodas. | Melhorar minha mobilidade em apresentações artísticas. |
| Lucas | De um joystick com formato e comandos adaptados. | Jogar videogame com mais facilidade e conforto. |
| Lucas | De adaptações em equipamentos. | Melhorar o meu trabalho na gráfica. |



As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O dipositivo irá controlar alguns movimentos da cadeira de rodas | MÉDIA | 
|RF-002| O dispositivo vai possuir os mesmos botões de um controle padrão da PlayStation | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O dispositivo deve ser responsivo  | MÉDIA | 
|RNF-002| O dispositivo precisa ter um tempo de resposta baixo, para não afetar a experiência dos jogos  |  MÉDIA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

### Artefatos para levantamento de dados

Nesta seção, caso seu grupo vá realizar algum tipo de levantamento de dados/entrevistas, descreva o(s) artefato(s) produzidos para tal. Também deverá ser descrita qual estratégia será utilizada para este levantamento. Por exemplo: como os questionários serão aplicados? (_in loco_, via disponibilização pela _web_ etc), qual material/estratégia de divulgação será utilizado? 

Não se preocupe em descrever os resultados agora, eles deverão ser descritos apenas na seção "Detalhamento preliminar" (Etapa 03).
