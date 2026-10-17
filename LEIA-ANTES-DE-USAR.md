# EXPO Kumon — Apresentação interativa V1

## O que há aqui

- `index.html` — único endereço, três modos: telão, controle, participante.
- `style.css` — interface responsiva, adequada a TV, projetor e celulares.
- `homenageados.js` — lista opcional de homenagens nominais, inicialmente vazia. **Só usar informações e fotos autorizadas**.
- `app.js` — roteiro de 14 telas, 5 questões, recepção de respostas, gabaritos, pontuação individual e placar agregado.
- `firebase-config.js` — configuração pública de conexão baseada no projeto `reuniaoKumon`. **Nenhuma rotina existente foi modificada**.

## Testar agora sem publicar

Abra `index.html` no navegador (preferencialmente via servidor local HTTP). Selecione **Preparar apresentação** > **Criar sessão de demonstração**. Abra o telão e o participante em abas **do mesmo navegador e mesma origem**. O controle só funciona no navegador que criou a sessão ou pelo link privativo copiado no controle. Clique no roteiro para passar às perguntas; reabra as respostas, envie uma alternativa e revele o gabarito. A demonstração não é multiusuário entre dispositivos diferentes.

Servidor HTTP local opcional: `python -m http.server 8000`; acesse `http://localhost:8000/`.

## Site publicado no repositório EXPO (sem alterar outros projetos)

O sistema já está hospedado em **https://expo-kumon.vercel.app/** e seu código está em **https://github.com/tsvalencio-IA/EXPO**. A hospedagem usa o Git conectado na Vercel. O endereço é público, mas a sessão online continua dependendo das permissões e segurança do Firebase.

## Conexão online — restrição importante

O Firebase Realtime Database referenciado é o mesmo do projeto `reuniaoKumon`, porém o caminho desta aplicação é **somente** `kumon_config/expo/sessions/{codigo}`. Não executa escrita em `kumon_config/presentation`, `kumon_config/treinamento` ou dados de outros projetos.

**Não é possível assegurar que a conexão funcionará antes de verificar as regras reais de leitura/escrita e autenticação do Firebase.** Se regras impedirem o acesso, a interface indicará erro de permissão. Deve-se configurar regras SEGURAS apenas para a aplicação EXPO, de preferência em um **Firebase separado**, e testar com celulares reais, sem modificar ou flexibilizar regras dos outros sistemas. Não publique com regras globais abertas.

**Segurança:** a versão V1 utiliza um link de controle com chave como barreira de interface para evitar cliques acidentais. Esse mecanismo NÃO é autenticação segura de administrador no Firebase. Para um evento público com escrita no banco é necessário proteger `current`, `reveal`, `accepting` e operações administrativas com Auth e regras no servidor; evitar acesso anônimo irrestrito. Ainda não declare esta versão aprovada para produção com público externo.

O QR Code do painel depende do serviço externo `api.qrserver.com` e de conexão com a internet. O link digitável e o botão copiar funcionam sem esse serviço, desde que a aplicação esteja hospedada e acessível pelos participantes.

## Conteúdo e privacidade

- As explicações dos slides usam fontes públicas do Kumon, e a premiação foi descrita no artigo de **31/07/2019**. **Confirme categorias, critérios e homenageados da Expo efetiva de 2026 com a unidade** antes de qualquer homenagem nominal.
- A apresentação NÃO carrega `brain.json`, nomes, contatos, notas nem outros dados individuais de `Kumon-IA` ou `KumonRP`.
- Cada navegador recebe identificador aleatório em `sessionStorage` e suas respostas ficam sob esse identificador. O nome não é solicitado. No telão só aparecem totais e percentual por alternativa.
- Não há upload automático de fotos ou integração a cadastros. Homenagens nominais podem ser adicionadas manualmente em `homenageados.js`, somente com autorização pertinente. Deve-se inserir homenageados autorizados e materiais da unidade apenas após confirmação.

## Observações e limites técnicos

- A base de perguntas é fixa dentro de `app.js`; respostas não são apagadas ao navegar nos slides. O botão **Zerar respostas** reinicia somente a sessão atual.
- O placar final resume **respostas recebidas**, não o número de perguntas corretas por cada pessoa. Cada celular obtém apenas seu próprio desempenho.
- `localStorage` (modo demonstração) e `sessionStorage` não substituem backend de produção.
- O link de controle privativo deve ser mantido apenas com a equipe organizadora.
- O repositório chamado `treinamento` atualmente contém código de um projeto de treinamento/ERP de outro contexto, portanto não foi usado como dependência.

## Referências

- https://www.kumon.com.br/blog/no-kumon-a-sua-dedicacao-tem-reconhecimentos1/
- https://www.kumon.com.br/metodo-kumon/
- https://github.com/tsvalencio-IA/reuniaoKumon
- https://github.com/tsvalencio-IA/treinamento
- https://github.com/tsvalencio-IA/Kumon-IA
- https://github.com/tsvalencio-IA/KumonRP