# EXPO KUMON 2026 — Como utilizar a cerimônia

## Endereço único de acesso

**https://expo-kumon.vercel.app/**

A apresentação é online e está hospedada na Vercel. O GitHub armazena o código, não deve ser utilizado como endereço de apresentação.

## 1. Iniciar

Abra o site, escolha **Iniciar cerimônia** e depois **Iniciar EXPO online agora**. O sistema criará uma sala com código de seis dígitos no Firebase da reunião de pais, exclusivamente no índice `kumon_config/expo/sessions`.

O apresentador deve manter o controle no próprio celular ou computador. O botão **Abrir telão** abrirá a apresentação em outra tela. O botão **Copiar link do controle** é privativo: não compartilhe com a plateia.

## 2. Convidar as famílias

Na tela de apresentação, vá ao slide "Vamos jogar juntos!". Os convidados devem ler o QR Code com o celular ou acessar a página principal e informar o código da sala. O apresentador decide quando abrir e fechar respostas e quando revelar o gabarito.

Os visitantes não precisam cadastrar nome ou e-mail. Cada aparelho acompanha seu próprio resultado; no telão aparecem totais da plateia sem identificar pessoas.

## 3. Reconhecer conquistas

Dentro do controle, a seção **Homenagens ao vivo** permite inserir categorias e conquistas autorizadas. A equipe pode selecionar **Exibir no telão**, e cada celular pode enviar um aplauso por homenagem. Sem nomes cadastrados, o slide de reconhecimento mostra uma homenagem coletiva.

**Privacidade:** o Firebase atual permitiu leitura e escrita anônima na subárvore testada. Não envie fotos ou nomes reais de menores até configurar regras específicas de acesso administrativo e autorização de participantes. A ferramenta é funcional, mas a proteção contra manipulação direta do banco ainda não está homologada.

## 4. Encerrar ou voltar

O comando **Fechar** retorna ao menu, sem excluir a sessão. No mesmo navegador, use **Retomar controle**. Se precisar reiniciar respostas, o controle oferece um comando de zerar **somente a sessão corrente**, mediante confirmação.

## Conteúdo institucional

A apresentação toma por referência o reconhecimento de alunos adiantados, concluintes e as conquistas descritas pelo Kumon, assim como o estudo autônomo, o aprendizado individualizado e o Kumon Connect.

Fontes:
- https://www.kumon.com.br/blog/no-kumon-a-sua-dedicacao-tem-reconhecimentos1/
- https://www.kumon.com.br/kumonconnect/

A aplicação também foi comparada com os materiais de `reuniaoKumon`, incluindo `treinamento.html`. Nenhum registro nominal ou estatística privada dos alunos foi importado ou inventado.

## Validação técnica

Em 17/10/2026, o Firebase existente aceitou, na subárvore EXPO, as operações de criar sala, mudar slide, registrar duas respostas distintas e ler o resultado agregado. Os registros temporários foram descartados. A Vercel confirmou deploy em estado READY e respostas HTTP 200 dos arquivos publicados. Isso não significa que testes físicos em múltiplos aparelhos, desempenho com grande público e segurança do Firebase estejam concluídos. Veja `SEGURANCA-IMPORTANTE.md`.

## Integração e isolamento

Os quatro projetos antigos não foram alterados. O sistema usa a configuração do Firebase de `reuniaoKumon`, mas escreve somente sob `kumon_config/expo/sessions/{codigo}`. O reconhecimento nominal depende da conferência e autorização da unidade; a EXPO não extrai automaticamente boletins ou listas privadas.
