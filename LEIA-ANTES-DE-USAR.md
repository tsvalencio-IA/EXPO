# Manual rápido da EXPO Kumon

**Acesse apenas:** https://expo-kumon.vercel.app/

**O que abrir em cada dispositivo**

- **Apresentador:** site > Iniciar cerimônia > Iniciar EXPO online agora. Esse aparelho comanda a apresentação, controla respostas e seleciona homenagens.
- **Telão:** botão Abrir telão no painel do apresentador. Pode ser TV, notebook ou projetor.
- **Famílias:** apontam a câmera para o QR Code no telão ou abrem o endereço e informam o código da sala. Não recebem o link do apresentador.

**Central da cerimônia:** use os sete botões para avançar pelos atos; a premiação principal acontece logo no início do roteiro. Cadastre categorias e homenagens somente quando a unidade tiver conferido as conquistas e o Firebase estiver com regras de segurança apropriadas. Os botões Anterior/Próximo controlam a ordem das chamadas.

**Interatividade:** as perguntas abrem automaticamente; o apresentador decide quando encerrar e revelar. Cada celular acompanha seus próprios acertos/erros. O telão e o controle exibem somente totais, sem nomes.

**Aplausos:** a família pode enviar um aplauso por homenagem e o total aparece em tempo real. Não é necessário cadastrar nomes dos participantes.

**Conexão:** nos aparelhos, verifique o aviso Firebase conectado/sem conexão. Se uma resposta não for registrada, a tela do celular deverá avisar sobre a falha. Atualize o navegador se for preciso e entre na mesma sala.

**Recuperar controle:** se fechar a guia, abra o site de novo no mesmo navegador e use Retomar controle. Não limpe os dados do navegador sem antes guardar o link privativo.

**Relatório:** no controle, baixar relatório anônimo exporta um JSON com agregados por pergunta e total de aplausos, sem identificadores individuais.

**Limitação de segurança importante:** como as regras do Firebase atual permitiram acesso anônimo ao índice testado, NÃO coloque nome, imagem ou dados pessoais de menores antes de configurar autenticação e regras de segurança. O site funciona para a cerimônia genérica e jogos anônimos; dados identificáveis exigem proteção adicional.

**Implementação verificada:** Vercel READY, JavaScript válido, teste REST isolado no Firebase, e simulação lógica de controle + telão + dois participantes. Testes físicos/carga e autenticação da equipe ainda não homologados.
