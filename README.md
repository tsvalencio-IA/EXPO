# EXPO KUMON 2026 · Celebração interativa ao vivo

**Endereço oficial:** https://expo-kumon.vercel.app/

Código-fonte: https://github.com/tsvalencio-IA/EXPO

## Começar a cerimônia

1. Abra https://expo-kumon.vercel.app/ e selecione **Iniciar cerimônia**.
2. Selecione **Iniciar EXPO online agora**. Um código de seis dígitos é criado no Firebase existente.
3. Em **Abrir telão**, use uma televisão ou projetor. O controle permanece no dispositivo do apresentador.
4. Os convidados podem acessar pelo QR Code no slide de entrada ou por **Entrar no jogo**, digitando o código da sala.
5. Pelo controle, avance slides, abra cada rodada, encerre respostas e revele gabaritos. Os celulares mostram os próprios acertos; o telão mostra somente resultados agregados.
6. Em **Homenagens ao vivo**, cadastre homenagens autorizadas, escolha **Exibir no telão** e convide o público a **Aplaudir esta conquista** por celular. Essa área é de uso opcional.
7. O botão **Fechar** retorna ao menu sem apagar a sessão; **Retomar controle** permite continuar no mesmo navegador.

## Como está implementado

- Apresentação, controle e plateia atualizados em tempo real pelo **Firebase Realtime Database** da reunião de pais, usando somente `kumon_config/expo/sessions/{codigo}`.
- O jogo de 5 perguntas impede respostas duplicadas da mesma sessão de navegador usando transação em cada resposta.
- O telão reúne os resultados anonimamente. O navegador de cada participante acompanha seus próprios acertos/erros.
- Reconhecimento em tempo real opcional com cadastro manual pelo apresentador e aplausos únicos por navegador.
- Repositórios `reuniaoKumon`, `treinamento`, `Kumon-IA` e `KumonRP` **não foram modificados**.
- Teste de integração REST em sessão temporária: **criar, avançar, responder de dois dispositivos, ler dados e apagar** passou em 17/10/2026. Isso **não substitui teste de carga e teste completo em dispositivos físicos**.

## Fidelidade pedagógica

O roteiro toma como referência a EXPO real de reconhecimento de alunos adiantados e concluintes e o método Kumon. O site oficial descreve o reconhecimento de esforço, dedicação e persistência, além do propósito de desenvolvimento da autonomia.

Fontes institucionais: https://www.kumon.com.br/blog/no-kumon-a-sua-dedicacao-tem-reconhecimentos1/ e https://www.kumon.com.br/kumonconnect/ .

**Não há nomes de homenageados, categorias individuais, indicadores internos ou imagens inventados.** Os dados individuais das outras aplicações não são divulgados automaticamente.

## Segurança e privacidade — leia antes de um evento público

O Firebase existente aceitou escrita e leitura **sem autenticação** em índice de teste exclusivo da EXPO. Essa é uma constatação técnica importante: o uso ao vivo pode funcionar, mas os dados da EXPO **não estão protegidos contra manipulação direta por alguém com conhecimento da URL do banco**. O link de controle com chave impede apenas ações acidentais pela interface; não representa autorização no servidor.

Não coloque dados de menores, fotos, contatos, boletins, listas privadas ou nomes de homenageados em produção enquanto o banco não tiver regras de segurança apropriadas. Uma configuração de produção comercial exige autenticação de operador, regras de leitura/escrita específicas e auditadas para EXPO, além de teste em aparelhos físicos. Não flexibilize nem substitua regras dos demais sistemas. Consulte `SEGURANCA-IMPORTANTE.md`.

## Hospedagem

A Vercel é a **única hospedagem oficial** do projeto. GitHub é a fonte de código e dispara o deploy automático a cada atualização do branch `main`. O workflow antigo do GitHub Pages foi removido.
