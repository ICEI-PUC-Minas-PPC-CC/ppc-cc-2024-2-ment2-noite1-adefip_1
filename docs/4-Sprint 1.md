# Sprint 1

Nesta seção, deverão ser incluídos todos os artefatos produzidos pertinentes à entrega referente à Sprint 1.
O detalhamento do que deverá será entregue, será definido em sala em conjunto com seu(sua) professor(a).

Durante o desenvolvimento físico do nosso projeto, enfrentamos diversas dificuldades, especialmente na busca por um software que pudesse ler os sinais analógicos do controle joystick e traduzi-los em movimentos do mouse, além de simular teclas do teclado. Após várias tentativas e erros, conseguimos encontrar um software eficaz chamado AITrack, que rastreia os movimentos dos olhos, rosto e cabeça.

No entanto, o AITrack sozinho não era suficiente para nossas necessidades. Precisávamos de um segundo software que pudesse capturar esses movimentos e aplicá-los no mouse e no teclado. Foi então que descobrimos o OpenTrack, que, ao ser conectado ao AITrack, consegue simular o movimento da cabeça com o movimento do mouse em jogos. Contudo, a falta de experiência em programação dificultou nossa capacidade de modificar o código para utilizar os movimentos fora do ambiente de jogos.

Em nossa busca por soluções, encontramos um terceiro software que integra as funções dos dois anteriores, aplicando os movimentos na tela conforme o usuário gira a cabeça. Embora o ponteiro do mouse tenha funcionado, ele se movia apenas 1 cm para o lado, o que não era o ideal.

Finalmente, encontramos uma alternativa mais acessível: o Gopher.exe. Este software permite que, ao ser iniciado e minimizado, ele funcione automaticamente, possibilitando que o joystick controle o mouse na tela de forma eficaz. Com o Gopher.exe, conseguimos selecionar e mover o mouse utilizando o botão do joystick, facilitando assim nosso projeto.
