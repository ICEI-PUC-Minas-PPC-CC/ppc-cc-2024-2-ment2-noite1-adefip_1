# Sprint 1


  Durante o desenvolvimento físico do nosso projeto, enfrentamos diversas dificuldades, especialmente na busca por um software que pudesse ler os sinais analógicos do controle joystick e traduzi-los em movimentos do mouse, além de simular teclas do teclado. Após várias tentativas e erros, conseguimos encontrar um software eficaz chamado AITrack, que rastreia os movimentos dos olhos, rosto e cabeça.

  No entanto, o AITrack sozinho não era suficiente para nossas necessidades. Precisávamos de um segundo software que pudesse capturar esses movimentos e aplicá-los no mouse e no teclado. Foi então que descobrimos o OpenTrack, que, ao ser conectado ao AITrack, consegue simular o movimento da cabeça com o movimento do mouse em jogos. Contudo, a falta de experiência em programação dificultou nossa capacidade de modificar o código para utilizar os movimentos fora do ambiente de jogos.

  Em nossa busca por soluções, encontramos um terceiro software que integra as funções dos dois anteriores, aplicando os movimentos na tela conforme o usuário gira a cabeça. Embora o ponteiro do mouse tenha funcionado, ele se movia apenas 1 cm para o lado, o que não era o ideal.

  Finalmente, encontramos uma alternativa mais acessível: o Gopher.exe. Este software permite que, ao ser iniciado e minimizado, ele funcione automaticamente, possibilitando que o joystick controle o mouse na tela de forma eficaz. Com o Gopher.exe, conseguimos selecionar e mover o mouse utilizando o botão do joystick, facilitando assim nosso projeto.

  Para tanto, será necessário, além do software já descrito, também o joystick que proporcione maior facilidade e ergonomia para os usuários, desta maneira buscamos em sites de vendas nacionais as opções mais viáveis, algumas opções, similares ao joystick do video-game Atari nos chamaram atenção por possuir um botão analógico, que utilizaremos para que, tal como em um mouse convencional, possam clicar e selecionar a opção desejada. Há também a possibilidade de utilizar um joystick comum mas que levanta a questão de como será feita a seleção da opção desejada sem o gatilho.

  Algumas das opções levantadas:
  
  - [Opção 1](https://produto.mercadolivre.com.br/MLB-4776677160-controle-joystick-thrustmaster-usb-joystick-pc-preto-_JM#polycard_client=search-nordic&position=30&search_layout=grid&type=item&tracking_id=c805b148-b092-4354-8258-d7d5a14ed9cc)
  - [Opção 2](https://produto.mercadolivre.com.br/MLB-5073235936-controle-joystick-saitek-st90-para-pc-novo-lacrado-_JM#polycard_client=search-nordic&position=28&search_layout=grid&type=item&tracking_id=f6665e5d-aaf9-4969-b7cc-bdbb5eff6c69)
   - [Opção 3](https://produto.mercadolivre.com.br/MLB-3867264274-controle-atari-2600-usb-apenas-para-computadores-_JM#position%3D26%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3D3c600713-8f69-4512-9432-ebc45c83810a)
 
  Explicação do Projeto de Interface

  Desenvolvemos uma interface web para utilização dos alunos da ADEFIP. Nela, eles poderão demonstrar o que estão sentindo e querem fazer no momento, através de ilustrações, que ao serem clicadas, se expandem na tela e reproduzem um áudio relacionado à imagem, o que facilita a comunicação de todos os usuários.

  Instalação do Site

  Tentamos utilizar o GitHub Pages para deixarmos o acesso à interface mais simplificado, porém, não conseguimos deixar tudo corretamente apontado, pois quando acessamos o link, as imagens da interface não estão sendo carregadas. Tentei colocar os arquivos da programção dentro da pasta docs, src e deixá-los na raíz, mas o erro persistiu. Vamos realizar mais testes e deixar tudo mais fácil, para que todos tenham acesso ao projeto.

  Demonstração da interface

  Deixamos imagens de demonstração no diretório docs, do repositório. Colocamos uma imagem do controle de Xbox que utilizamos como guia para a utilziação da interface integrada ao joystick. Também deixamos outra com a interface em execução, ao lado do controle do Xbox.
  Você poderá acessá-las através dos seguintes links:

   - [Controle do Xbox 360 e Gopher](https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-2-ment2-noite1-adefip_1/blob/main/docs/control%26gopher.jpg)
   - [Interface e Controle do Xbox 360](https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2024-2-ment2-noite1-adefip_1/blob/main/docs/control%26interface.jpg)

  Gravamos um vídeo para breve demonstração da utilização da interface. Você pode acessá-lo através do link deixado abaixo.

   - [Exiição da interface web](https://youtu.be/fd0pvyCBF0k)
