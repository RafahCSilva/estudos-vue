# Resumo CSS Flex e Grid

## == FLEX ==
- **FLEX-CONTAINER**:
    - `FLEX-DIRECTION` direcao ROW ou COLUMN da listagem
    - `FLEX-WRAP` se quebra itens em linhas ou overflow
    - `FLEX-FLOW` shot para DIRECTION+WRAP
    - `JUSTIFY-CONTENT` alinha a listagem
    - `ALIGN-ITEMS` alinha no cross axis cada linha de itens
    - `ALIGN-CONTENT` alinhamento e espaçamento entre cada item
- **FLEX-ITEM**:
    - `ORDER` é a prioridade do item na lista, default=0, -1 primeiro, +1 depois (dependendo do sentido `-reverse`)
    - `ALIGN-SELF` é o alinhamento do item no sentido do cross axis
    - `FLEX-GROW` peso para distribuir espaço vazio do container para crescer o item, default=0
    - `FLEX-SHRINK` peso para distribuir o quanto o item precisa encolher se o container faltar espaço, default=0
    - `FLEX-BASIS` é o tamanho do item, se em ROW é a WIDTH, se COLUMN é a HEIGHT. E sobreescreverá o width/height
    - `FLEX` é shot para GROW+SHRINK+BASIS para aquele item

## == GRID ==
- **GRID-CONTAINER*:
    - `GRID-TEMPLATE-COLUMNS` e `GRID-TEMPLATE-ROWS` é o template das Colunas/Linhas
        - EX: se `12 itens = 3col x 4row`, presenta como ficará a disposicao da coluna*linha
            - `-col : 100px 30% 1fr`
            - `-row : 50% 2fr 1fr auto`
        - Aceita escala: PX, %, e FR `auto` e funcoes como `repeat`, `max`, `min`...
            - `FR` de fragmento, ou seja peso ponderado te todos espaço dividido entre os FR
    - `GRAP` espaçamento entre as linhas/colunas
    - `GRID-TEMPLATE-AREAS` modo de template indicando a posicao dos nomes:
        - `'r1c1 r1c2' 'r2c1 r2c2' 'r3c1 r3c2'`

- **GRID-ITEM**:
    - Eixo do Grid (inicia em 1 na primeira borda, ou -1 na ultima):
        - ROW, inteiros positivo na --> e inteiros negativos na <--
        - COL, inteiros positivo na \/ e inteiros negativos na /\
        - (FireFox debuga grids)
    - Localização do Item no Grid:
        - GRID-COLUMN-START e GRID-COLUMN-END ql coluna o item inicia e termina
        - GRID-ROW-START e GRID-ROW-END ql linha o item inicia e termina
        - No `-end SPAN 3` significa q terminara no (inicial + 3)
        - `GRID-ROW: 1 / 2` e `GRID-COLUMN: 1 / 2` é o shot para -start e -end
    - Nomeando row/col:
        - no `GRID-TEMPLATE-*` o nome é entre [] entre os argumentos, ex: `grid-template-columns:  \[inicio] 1fr \[meio metade] 3fr \[fim]
    - `GRID-AREA` é o shot para `-ROW-START` + `-COLUMN-START` + `-ROW-END` + `-COLUMN-END`
        - ou um label para sua posicao no `grid-template-areas`


REPO FONT do docente: [cod3rcursos/web-moderno](https://github.com/cod3rcursos/web-moderno)
