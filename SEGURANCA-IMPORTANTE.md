# Requisitos para ativar online em evento real

A interface está pronta para demonstração e usa o caminho isolado `kumon_config/expo/sessions`. Para usar com público e diferentes celulares de maneira confiável:

- Verificar que o Firebase usado possui **autenticação anônima** habilitada.
- Definir e aplicar regras do Realtime Database que autorizem o apresentador a criar/gerenciar a sessão e o participante a escrever somente sua resposta (única e válida) durante a votação.
- Não confiar exclusivamente na chave de controle enviada por link. Nesta versão, a chave fica na sessão e portanto **não constitui proteção real no backend**; não habilitar escrita pública indiscriminada.
- Testar com pelo menos um notebook/telão e dois celulares usando redes diferentes antes do evento.
- Utilizar somente nomes e fotos dos homenageados autorizados.

Este repositório não altera e não deve substituir as regras nem os dados de Reunião, Treinamento, Kumon-IA e KumonRP.