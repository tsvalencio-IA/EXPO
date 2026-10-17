# EXPO KUMON — Proteção de dados e operação

O sistema usa `reuniaokumon-default-rtdb` e somente `kumon_config/expo/sessions/{codigo}`. A EXPO não importa automaticamente aluno, foto, contato, boletim ou diagnóstico dos repositórios de gestão.

### Teste comprovado em 17/10/2026

Acesso REST sem autenticação ao índice `kumon_config/expo/__diagnostico_20261017_001` retornou HTTP 200 para leitura, gravação e exclusão. Em sessão técnica temporária dentro de `kumon_config/expo/sessions/999991`, também houve gravação de duas respostas e posterior exclusão. Não houve escrita intencional em caminhos de reuniões ou treinamentos. O endpoint de teste foi removido.

### Limitação séria de segurança

Essa base permite escrita pública no caminho testado. A chave de apresentador enviada à interface NÃO impede manipulação direta por REST ou Firebase SDK. Por isso, este produto é uma **experiência funcional de apresentação e participação**, mas não é uma aplicação comercial ou de dados de menores homologada para publicação de informações pessoais enquanto as regras estiverem abertas.

Antes de usar nomes/fotos reais, habilitar Firebase Authentication para os operadores e impor regras específicas na subárvore EXPO com autorização de host e validação de respostas dos convidados, preservando integralmente o restante do banco. Essas regras dependem de acesso administrativo ao console Firebase, não disponível nesta integração GitHub/Vercel.

Até lá, utilize a cerimônia com slides institucionais, quizzes anônimos e homenagens genéricas sem dados pessoais. Não divulgue o código da sala como se fosse mecanismo de segurança.
