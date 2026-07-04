# Linear Sync Plan — OAMa Website 2

## Estado da integração
- Figma MCP: configurado no repo via `.mcp.json` com `figma-mcp-go`.
- Linear API: **acesso válido confirmado**.
- Viewer Linear: `Pedro Martins <pedrovrima@gmail.com>`.
- Team disponível: `Pedro Martins Personal` (`PED`).

## Conclusão
**Não falta conectar tecnicamente ao Linear.**
A credencial já existe e a API respondeu com sucesso.

O que falta é a parte de **modelagem operacional**:
1. definir o backlog local com clareza;
2. decidir a granularidade das issues;
3. então criar/sincronizar as issues no Linear.

## Modelo recomendado para o Linear
Usar 3 níveis:

### Nível 1 — épico / projeto
- `OAMa Website 2 — revisão Figma + migração legado`

### Nível 2 — issues de trilha
1. Auditoria global de texto e estrutura
2. Revisão das páginas principais
3. Revisão das páginas de consultoria
4. Revisão das páginas de programas e projetos
5. Revisão das rotas legadas (`pro-aves`, `apoie`)
6. Sanity / conteúdo gerenciável
7. QA final / links / consistência

### Nível 3 — issues executáveis por página
Uma issue por rota ou por pequeno grupo coeso.

## Regra de criação
Antes de criar no Linear, cada issue deve declarar:
- tipo: `Figma-first`, `Legacy-first`, `Hybrid`, `CMS-first`
- rota(s)
- fonte principal
- arquivos-alvo
- critérios de aceite

## Sequência sugerida de publicação no Linear
1. Criar issue-mãe de auditoria
2. Criar subtasks por grupo de páginas
3. Criar subtasks individuais para páginas ambíguas ou problemáticas
4. Só depois abrir issues de implementação/correção
