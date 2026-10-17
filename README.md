# EXPO KUMON • Celebração interativa

Aplicação independente para apresentação em telão, controle pelo apresentador e participação anônima de famílias pelo celular.

## Acessos
- Página inicial: `https://tsvalencio-ia.github.io/EXPO/`
- Controle: `https://tsvalencio-ia.github.io/EXPO/?modo=controle`
- Telão: criado pelo controle da sessão.
- Participante: pelo QR Code ou código no telão.

## Primeira execução
1. Abra o controle e crie **sessão de demonstração** para testar localmente (abas do mesmo navegador).
2. Para celulares diferentes, use **Criar sessão online**, dependente das regras do Firebase Realtime Database e autenticação anônima.
3. Abra o telão e compartilhe o QR Code.
4. Avance os slides e abra/feche votações; mostre o gabarito de cada questão.
5. Veja no final o placar anônimo e, nos celulares, os resultados individuais.

**Atenção:** publicação no GitHub Pages não configura automaticamente as regras Firebase. Antes de utilizar a modalidade online em evento real, revise e aplique regras específicas de escrita/controle seguro para `/kumon_config/expo/sessions`. Não abra globalmente os outros sistemas. A chave de controle V1 é uma barreira de interface, NÃO segurança no servidor. Não insira dados pessoais de alunos sem autorização.

Consulte [`LEIA-ANTES-DE-USAR.md`](LEIA-ANTES-DE-USAR.md) para instruções detalhadas. Nenhum dos projetos Kumon já existentes é alterado.