# EXPO KUMON • Cerimônia de Conquistas Ao Vivo

**Endereço oficial, único:** https://expo-kumon.vercel.app/

**Código-fonte:** https://github.com/tsvalencio-IA/EXPO

## O produto entregue

A edição REVOLUÇÃO transforma o projeto em uma plataforma de **direção de cerimônia de reconhecimento**, não apenas um quiz. O site é responsivo, com identidade audiovisual de palco, central de operação, fila de chamadas, homenagens e participação simultânea das famílias.

**Telão:** 20 etapas em salas novas (versão 4), com os homenageados em destaque já no primeiro terço da apresentação, medalha visual, animação leve, agradecimentos, resultados coletivos e QR Code para acesso. Sessões anteriores mantêm a ordem antiga.

**Controle:** central com sete marcos, botões de salto para abertura, acesso ao evento, premiação, homenagens, famílias, resultado coletivo e encerramento; fila de homenageados com chamadas anterior/próxima; notas para o apresentador; navegação de slides; resultado de acertos e erros; download de relatório técnico anônimo, sem IDs de participantes.

**Participantes:** entram pelo QR ou código de seis dígitos; votação sincronizada pelo Firebase; resultado individual confirmado no celular; placar anônimo; aplauso individual por homenagem e retorno à sala sem perder a identificação neste navegador.

**Recuperação:** controle persiste no navegador do organizador. Telão e controle mostram o estado de conexão com o Firebase, permitindo identificar perda de sincronização.

## Começar, na prática

1. Abra https://expo-kumon.vercel.app/ e escolha **Iniciar cerimônia**.
2. Informe a unidade e selecione **Iniciar EXPO online agora**.
3. Abra o telão na TV/projetor usando **Abrir telão**.
4. Compartilhe somente o QR Code/link de **Participação**, nunca o endereço privativo de controle.
5. Use a **Central de Cerimônia** para controlar os sete atos e as chamadas de premiação.
6. Para o momento de perguntas, avance ao slide do desafio; as respostas abrem automaticamente. O apresentador encerra e revela.
7. Ao terminar, apresente resultados coletivos; exporte o relatório anônimo se necessário.

## Conteúdo oficial x dados que precisam vir da unidade

O conteúdo institucional considera a explicação pública do Kumon sobre reconhecer alunos adiantados de um a cinco anos além da série, concluintes e alunos com cinco anos de estudos. As classificações e títulos individuais de cada premiação devem ser verificados pela unidade para a edição concreta, e não assumidos como universais.

Referências:
- https://www.kumon.com.br/blog/no-kumon-a-sua-dedicacao-tem-reconhecimentos1/
- https://www.kumon.com.br/sobre-nos/conquistas/
- https://www.kumon.com.br/sobre-nos/aspiracoes/

**Não foram inventados alunos, números da unidade, conquistas individuais nem fotografias.** O arquivo `homenageados.js` permanece vazio. Dados de treinamentos/reuniões não são importados indiscriminadamente.

## Arquitetura e isolamento

- **Produção:** Vercel, por integração com GitHub `main`.
- **Firebase:** banco já existente do `reuniaoKumon`; apenas o caminho `kumon_config/expo/sessions/{codigo}` é utilizado para sessões da EXPO.
- O repositório da reunião e os sistemas de treinamento NÃO foram modificados.
- Novas sessões usam versão 4. O código trata sessões antigas versão 2/3 sem impor a nova ordem.
- Teste de integração com Firebase em 17/10/2026: criação isolada, atualização da apresentação, homenagem, aplauso, duas respostas e leitura posterior, com retorno HTTP 200; sessão técnica removida.
- O código é publicado e validado para compilação JavaScript; não há homologação de concorrência em grande escala nem ensaio em aparelhos reais.

## Atenção: requisito de segurança antes de usar nomes de menores

No Firebase atual, a subárvore EXPO testada **aceitou leitura e escrita sem autenticação**. A chave privativa do apresentador protege a interface, mas não impede modificações diretas no banco. Para eventos públicos com alunos identificados, fotos ou dados pessoais, são obrigatórios: autenticação da equipe, regras de RTDB restritas a EXPO, validação de participantes, autorização pertinente para divulgação e teste operacional com usuários reais. Isso exige acesso administrativo às regras do projeto Firebase.

Até concluir essa proteção, utilize slides institucionais, resultados anônimos e homenagens coletivas ou genéricas, sem informações identificáveis.

Ver também `SEGURANCA-IMPORTANTE.md` e `LEIA-ANTES-DE-USAR.md`.
