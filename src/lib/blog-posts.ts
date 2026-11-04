export type BlogPost = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: 'Processo' | 'Ligas' | 'Aplicações' | 'Engenharia';
  tempoLeitura: string;
  dataPublicacao: string;
  dataAtualizacao?: string;
  imagem: string;
  imagemAlt: string;
  keywords: string[];
  conteudo: string; // HTML string com paragrafos e headings
};

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`)
  );
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-escolher-fornecedor-pecas-aco-inox-sob-medida',
    titulo: 'Como escolher um fornecedor de peças de aço inox sob medida: 7 perguntas antes de contratar',
    descricao:
      'Sete perguntas para fazer antes de contratar um fornecedor de peças, tubos e buchas sob medida em aço inox e comparar propostas com segurança.',
    categoria: 'Engenharia',
    tempoLeitura: '8 min',
    dataPublicacao: '2026-10-24',
    imagem: '/images/aceros/generated/blog-fornecedor-aco-inox-sob-medida-sao-paulo-aceros.jpg',
    imagemAlt: 'Peça cilíndrica de aço inox com aletas helicoidais em uma máquina de usinagem na fábrica da Aceros',
    keywords: ['fornecedor aço inox sob medida', 'como escolher fornecedor', 'peças de aço inox', 'tubos centrifugados', 'fornecedor de peças sob medida São Paulo', 'comparar propostas aço inox'],
    conteudo: `
<p>Escolher o fornecedor de <strong>peças de aço inox sob medida</strong> é uma decisão que afeta prazo, qualidade e custo de manutenção. Comparar apenas preço pode esconder diferenças importantes no processo, no controle e no suporte técnico. Estas sete perguntas ajudam a avaliar cada proposta, e ao final você encontra um roteiro para comparar fornecedores lado a lado, os erros mais comuns e as dúvidas frequentes.</p>

<h2>Por que o preço sozinho engana</h2>

<p>Duas propostas para a mesma peça podem parecer iguais no papel e entregar resultados muito diferentes. Uma pode incluir usinagem, inspeção e documentos, e a outra pode deixar essas etapas por sua conta. Uma pode usar a liga correta para a temperatura de trabalho, e a outra uma liga que falha antes do tempo.</p>

<p>Uma peça que falha cedo gera parada de linha, troca de emergência e custo de manutenção maior do que a diferença de preço que parecia vantajosa. Por isso, vale avaliar o fornecedor por critérios técnicos antes de decidir.</p>

<h2>1. Fabrica a peça a partir do meu desenho?</h2>

<p>Peças sob medida dependem de interpretação correta do desenho. Pergunte se o fornecedor analisa o projeto, aponta dúvidas antes de produzir e confirma as dimensões e tolerâncias.</p>

<p><strong>Boa resposta:</strong> a equipe técnica revisa o desenho e devolve perguntas ou sugestões antes da proposta final.</p>
<p><strong>Sinal de alerta:</strong> o fornecedor aceita qualquer desenho sem fazer nenhuma pergunta.</p>

<h2>2. Quais processos fazem parte da fabricação?</h2>

<p>Verifique se a fundição, a usinagem e o controle técnico fazem parte do mesmo fluxo. Quando as etapas são integradas, fica mais simples acompanhar o pedido e corrigir qualquer desvio.</p>

<p>Se parte do trabalho é terceirizada, pergunte quem responde por cada etapa e como a qualidade é conferida na volta. Para entender um dos processos mais usados em peças resistentes ao calor, veja o guia sobre <a href="/blog/fundicao-centrifugada-vantagens">fundição centrifugada</a>.</p>

<h2>3. Como a qualidade é verificada?</h2>

<p>Peça para saber quais verificações são feitas conforme o projeto, como análise química, dureza, ultrassom e inspeção dimensional, e quais registros acompanham a entrega.</p>

<ul>
  <li><strong>Análise química:</strong> confirma que a liga entregue é a que foi especificada.</li>
  <li><strong>Dureza:</strong> ajuda a avaliar as propriedades mecânicas do material.</li>
  <li><strong>Ultrassom:</strong> detecta falhas internas que não aparecem na superfície.</li>
  <li><strong>Inspeção dimensional:</strong> confere se as medidas e tolerâncias do desenho foram cumpridas.</li>
</ul>

<h2>4. Existe certificação de qualidade?</h2>

<p>Pergunte se há sistema de gestão certificado, como a ISO 9001, e solicite a confirmação do escopo e da validade. Uma certificação não substitui a verificação da peça, mas indica que há processos documentados e auditados.</p>

<h2>5. O fornecedor atende a liga ou a norma que preciso?</h2>

<p>Se a especificação pede uma classe da ASTM A297 ou outra liga resistente ao calor, confirme que o fornecedor trabalha com ela e que a engenharia avalia a escolha para a sua aplicação.</p>

<p>Se você ainda não definiu a liga, um bom fornecedor ajuda a escolher a partir da temperatura, da atmosfera e do histórico da peça. Os guias sobre as <a href="/blog/astm-a297-hk-hh-hp-diferencas">classes HH, HK e HP</a> e sobre as <a href="/blog/ligas-304-316-310-alta-temperatura">ligas 304, 316 e 310</a> ajudam a entender as diferenças.</p>

<h2>6. Há apoio técnico antes e depois da compra?</h2>

<p>Uma equipe técnica acessível ajuda a corrigir a especificação, reduzir falhas e entender o desgaste da peça ao longo do tempo. Pergunte quem atende em caso de dúvida e se o fornecedor acompanha o desempenho da peça depois da entrega.</p>

<h2>7. Como o prazo é combinado?</h2>

<p>Peça que o prazo seja informado por escrito e que a proposta indique o que está incluído, como usinagem, acabamento e documentos. Desconfie de prazos muito curtos sem explicação do processo.</p>

<h2>Como comparar fornecedores lado a lado</h2>

<p>Monte uma tabela simples com as sete perguntas e anote a resposta de cada fornecedor. Dê mais peso ao que mais importa para a sua operação: precisão de prazo, controle de qualidade ou suporte técnico.</p>

<ul>
  <li><strong>Escopo:</strong> o que está incluído em cada proposta, incluindo usinagem, acabamento, inspeção e documentos.</li>
  <li><strong>Material:</strong> liga, norma e como a composição é confirmada.</li>
  <li><strong>Controle:</strong> quais testes e registros acompanham a entrega.</li>
  <li><strong>Suporte:</strong> quem responde dúvidas técnicas e como.</li>
  <li><strong>Prazo:</strong> informado por escrito e com condições claras.</li>
  <li><strong>Histórico:</strong> experiência com peças parecidas com a sua.</li>
</ul>

<h2>Erros comuns na escolha do fornecedor</h2>

<ul>
  <li>decidir só pelo menor preço, sem comparar o escopo;</li>
  <li>não pedir os registros de qualidade que acompanham a peça;</li>
  <li>não informar as condições de uso e receber uma liga inadequada;</li>
  <li>aceitar prazo verbal, sem confirmação por escrito;</li>
  <li>trocar de fornecedor sem passar o histórico de falhas da peça anterior.</li>
</ul>

<h2>O que levar para a conversa com o fornecedor</h2>

<p>Quanto mais completo o pedido, mais confiável a comparação. Antes de pedir propostas, reúna desenho, material, quantidade, condições de uso e histórico da peça. O guia <a href="/blog/como-pedir-orcamento-peca-sob-medida-aco-inox">como pedir orçamento de peça sob medida em aço inox</a> traz o passo a passo do que enviar.</p>

<h2>Como a Aceros se encaixa nesses critérios</h2>

<p>A Aceros integra <strong>centrifugação</strong>, usinagem e controle técnico. Conforme o projeto, a verificação pode envolver análise química, dureza, ultrassom e inspeção dimensional. A equipe de engenharia avalia o desenho e a aplicação antes de produzir, para orientar a escolha da liga e do processo.</p>

<p>Use as sete perguntas deste guia também com a Aceros: o objetivo é que você decida com informação, e não apenas por preço.</p>

<h2>Perguntas para quem compra, quem mantém e quem especifica</h2>

<p>Cada área da empresa olha para o fornecedor de um jeito. Reúna as perguntas de todos antes de decidir:</p>

<ul>
  <li><strong>Compras:</strong> o escopo das propostas é o mesmo? O prazo e as condições estão por escrito?</li>
  <li><strong>Manutenção:</strong> qual foi o desempenho de peças parecidas? Quem dá suporte se a peça falhar antes do esperado?</li>
  <li><strong>Engenharia e projetos:</strong> a liga e as tolerâncias atendem ao desenho? Os testes e registros cobrem o que o projeto exige?</li>
  <li><strong>Qualidade:</strong> quais certificados e relatórios acompanham a entrega?</li>
</ul>

<h2>Quando vale visitar o fornecedor</h2>

<p>Para peças críticas ou fornecimentos recorrentes, conhecer a fábrica e a equipe técnica ajuda a confirmar o que foi dito na proposta. Observe como as etapas se conectam, como as peças são identificadas e como os controles são registrados.</p>
<h2>Perguntas frequentes</h2>

<h3>Devo pedir orçamento a mais de um fornecedor?</h3>
<p>Sim, desde que todos recebam as mesmas informações. Assim as propostas ficam comparáveis.</p>

<h3>O que fazer se o fornecedor não souber indicar a liga?</h3>
<p>Descreva a aplicação, a temperatura e a atmosfera. Um fornecedor com engenharia própria deve ajudar a definir a liga, em vez de apenas aceitar o pedido.</p>

<h3>Como saber se o prazo informado é realista?</h3>
<p>Peça que o prazo venha por escrito e pergunte quais etapas ele considera. Desconfie de prazos sem explicação do processo de fabricação.</p>

<h3>Preciso de relatório de qualidade junto com a peça?</h3>
<p>Depende da sua aplicação e das exigências do seu cliente ou auditoria. Combine na proposta quais registros serão entregues.</p>

<p>A equipe da Aceros avalia o desenho e os requisitos da sua aplicação para orientar os próximos passos. Fale com a gente pela página de <a href="/contato">contato</a>.</p>
`,
  },
  {
    slug: 'como-pedir-orcamento-peca-sob-medida-aco-inox',
    titulo: 'Como pedir orçamento de peça sob medida em aço inox: o que enviar',
    descricao:
      'Veja o que informar ao pedir orçamento de tubos, buchas e peças sob medida em aço inox para receber uma resposta mais rápida e sem retrabalho.',
    categoria: 'Engenharia',
    tempoLeitura: '7 min',
    dataPublicacao: '2026-10-15',
    imagem: '/images/aceros/generated/blog-orcamento-peca-sob-medida-aco-inox-sao-paulo-aceros.jpg',
    imagemAlt: 'Desenho técnico e peça de aço inox usinada sobre a bancada para pedido de orçamento sob medida',
    keywords: ['orçamento peça sob medida', 'aço inox sob medida', 'cotação tubos de aço inox', 'buchas de aço inox', 'peça sob medida São Paulo', 'como pedir orçamento aço inox'],
    conteudo: `
<p>Pedir orçamento de uma <strong>peça sob medida em aço inox</strong> fica muito mais rápido quando a equipe técnica recebe, logo no primeiro contato, as informações certas. Um pedido completo evita idas e vindas, reduz erros de interpretação e ajuda a chegar à solução adequada para a aplicação. Neste guia, você vê o que enviar, como proceder quando não há desenho, como cada tipo de peça muda o pedido e quais erros evitar.</p>

<h2>O que é uma peça sob medida em aço inox</h2>

<p>Peça sob medida é aquela fabricada a partir do desenho, da amostra ou da especificação do cliente, e não retirada de um catálogo de itens padronizados. Tubos centrifugados, buchas, rolos e componentes para fornos e linhas industriais costumam ser fornecidos assim, porque cada aplicação tem temperatura, esforço e geometria próprias.</p>

<p>Como o material e o processo de fabricação dependem da aplicação, o orçamento só fica preciso quando a engenharia entende o que a peça vai enfrentar no dia a dia.</p>

<h2>O que enviar no pedido de orçamento</h2>

<ul>
  <li><strong>Desenho técnico ou croqui</strong> com dimensões, tolerâncias e acabamento esperado.</li>
  <li><strong>Material ou liga</strong>, quando já existe uma especificação. Se houver norma indicada, como a ASTM A297, informe também.</li>
  <li><strong>Quantidade</strong> e se a peça é única ou de uso recorrente.</li>
  <li><strong>Condições de uso</strong>: temperatura de trabalho, atmosfera, esforços e produto em contato com a peça.</li>
  <li><strong>Usinagem e acabamento</strong>: se a peça deve chegar pronta para montagem.</li>
  <li><strong>Prazo desejado</strong> e local de entrega.</li>
  <li><strong>Fotos e histórico</strong> da peça atual, incluindo falhas e desgastes anteriores.</li>
</ul>

<h2>Por que as condições de uso mudam o orçamento</h2>

<p>Duas peças com o mesmo desenho podem exigir ligas diferentes. A temperatura de trabalho, a atmosfera do forno ou do banho, os ciclos de aquecimento e resfriamento e o contato com produtos químicos influenciam a escolha do material e o processo de fabricação.</p>

<p>Por isso, informar só as medidas não basta. Se você quiser entender como a liga é escolhida, leia os guias sobre as <a href="/blog/astm-a297-hk-hh-hp-diferencas">classes HH, HK e HP da ASTM A297</a> e sobre as <a href="/blog/ligas-304-316-310-alta-temperatura">ligas 304, 316 e 310 para alta temperatura</a>.</p>

<h2>O que informar para cada tipo de peça</h2>

<h3>Tubos centrifugados</h3>
<ul>
  <li>diâmetro externo e interno, ou diâmetro externo e espessura de parede;</li>
  <li>comprimento total e se há usinagem nas pontas;</li>
  <li>temperatura e atmosfera de operação;</li>
  <li>norma ou classe da liga, quando houver.</li>
</ul>
<p>Para entender as vantagens do processo, veja o guia sobre <a href="/blog/fundicao-centrifugada-vantagens">fundição centrifugada</a>.</p>

<h3>Buchas e componentes de Sink Roll</h3>
<ul>
  <li>desenho do conjunto, ou das peças que se encaixam na bucha;</li>
  <li>composição e temperatura do banho;</li>
  <li>histórico de desgaste e vida útil da peça atual;</li>
  <li>folgas e tolerâncias de montagem.</li>
</ul>
<p>Mais detalhes nos guias sobre <a href="/blog/bucha-bimetalica-sink-roll">buchas para Sink Roll</a> e sobre <a href="/blog/sink-roll-como-escolher-liga">como escolher a liga do Sink Roll</a>.</p>

<h3>Rolos, grelhas e outros componentes para fornos</h3>
<ul>
  <li>desenho com dimensões, pontas e pontos de fixação;</li>
  <li>temperatura máxima e ciclos térmicos;</li>
  <li>carga que o componente suporta;</li>
  <li>fotos do componente atual e do local de instalação.</li>
</ul>

<h2>E se eu não tiver o desenho?</h2>

<p>Isso é comum. Nesse caso, envie fotos da peça, as medidas que você conseguir tomar e, se possível, uma peça de referência. A equipe técnica avalia o material enviado e orienta o que ainda precisa ser levantado.</p>

<p>Para tirar as medidas básicas de uma peça cilíndrica, anote:</p>
<ul>
  <li>diâmetro externo e diâmetro interno, em mais de um ponto da peça;</li>
  <li>comprimento total e comprimento de cada trecho com diâmetro diferente;</li>
  <li>espessura da parede;</li>
  <li>posição e dimensões de rasgos, furos e roscas;</li>
  <li>estado das superfícies de encaixe e de contato.</li>
</ul>
<p>Quando o desenho for refeito a partir da peça, vale conferir as dimensões críticas na peça nova antes de produzir.</p>

<h2>O que acontece depois do envio</h2>

<p>A engenharia da Aceros avalia o desenho e os requisitos da aplicação para orientar os próximos passos e preparar o orçamento. Se algo estiver incompleto ou houver mais de uma solução possível, a equipe entra em contato para alinhar os detalhes antes de seguir.</p>

<ol>
  <li><strong>Recebimento:</strong> a equipe confere se o pedido tem o necessário para avaliar.</li>
  <li><strong>Análise técnica:</strong> avaliação do desenho, da liga e do processo mais adequado.</li>
  <li><strong>Alinhamento:</strong> dúvidas e alternativas são combinadas com você antes da proposta.</li>
  <li><strong>Proposta:</strong> o orçamento informa o escopo, incluindo usinagem, acabamento e documentos.</li>
</ol>

<h2>Dicas para evitar retrabalho</h2>

<ul>
  <li>Informe a <strong>unidade de medida</strong> do desenho e a revisão mais recente.</li>
  <li>Indique <strong>o que é crítico</strong> na peça: encaixe, vedação, resistência ao calor ou ao desgaste.</li>
  <li>Se a peça substitui outra, informe <strong>por que a atual precisa ser trocada</strong>.</li>
  <li>Reúna as informações em <strong>um único envio</strong>, com arquivos legíveis.</li>
</ul>

<h2>Erros comuns ao pedir orçamento</h2>

<ul>
  <li>enviar só uma foto, sem medidas;</li>
  <li>não informar a temperatura nem a atmosfera de trabalho;</li>
  <li>pedir "igual à peça antiga" sem saber por que a antiga falhou;</li>
  <li>mandar vários desenhos de revisões diferentes sem indicar o vigente;</li>
  <li>esquecer de informar se a peça precisa de usinagem e acabamento prontos para montagem;</li>
  <li>comparar propostas sem conferir se o escopo é o mesmo.</li>
</ul>

<h2>Checklist rápido antes de enviar</h2>

<ul>
  <li>Desenho ou fotos com medidas anexados.</li>
  <li>Material ou norma indicados, se existirem.</li>
  <li>Quantidade e prazo desejado informados.</li>
  <li>Temperatura, atmosfera e esforços descritos.</li>
  <li>Histórico da peça atual resumido.</li>
  <li>Contato de quem pode tirar dúvidas técnicas.</li>
</ul>

<h2>Como a Aceros trabalha com peças sob medida</h2>

<p>A Aceros integra <strong>centrifugação</strong>, usinagem e controle técnico em um mesmo fluxo. Conforme o projeto, a verificação pode envolver análise química, dureza, ultrassom e inspeção dimensional. Isso permite acompanhar o pedido do desenho à entrega e corrigir qualquer desvio ainda na fábrica.</p>

<p>Cada peça é fabricada conforme o desenho e a condição informada pelo cliente. Por isso, quanto mais claro o pedido, mais direta é a conversa técnica e mais rápida a proposta.</p>

<h2>Que documentos podem acompanhar o fornecimento</h2>

<p>Dependendo da aplicação e da exigência do seu cliente ou auditoria, vale combinar desde o orçamento quais registros devem acompanhar a peça:</p>

<ul>
  <li>relatório dimensional, com as medidas conferidas contra o desenho;</li>
  <li>resultado da análise química, que confirma a liga entregue;</li>
  <li>registros de dureza e de ultrassom, quando aplicáveis ao projeto;</li>
  <li>identificação da peça, para rastrear o lote e a aplicação.</li>
</ul>

<p>Informar essa necessidade no primeiro contato evita surpresas no recebimento e deixa a proposta mais completa.</p>

<h2>Quando vale pedir orçamento de mais de uma peça de uma vez</h2>

<p>Se você sabe que vai precisar de reposições ou de peças parecidas nos próximos meses, informe isso no pedido. Peças de uso recorrente podem ser planejadas de forma diferente de uma peça isolada, e a equipe pode orientar sobre a melhor forma de organizar os fornecimentos.</p>
<h2>Perguntas frequentes</h2>

<h3>Preciso saber a liga exata para pedir orçamento?</h3>
<p>Não. Se você não souber, descreva a aplicação e as condições de trabalho, e a engenharia orienta a liga mais adequada.</p>

<h3>Posso pedir orçamento só com fotos?</h3>
<p>Pode, mas o pedido fica mais completo com medidas. Fotos ajudam a entender a peça, e as medidas permitem avaliar a fabricação.</p>

<h3>Vocês fabricam uma única peça ou só lotes?</h3>
<p>Informe a quantidade no pedido. A equipe técnica avalia a melhor forma de atender, seja uma peça isolada ou fornecimento recorrente.</p>

<h3>A usinagem entra no orçamento?</h3>
<p>Informe se a peça deve chegar usinada e pronta para montagem. A proposta deve deixar claro o que está incluído, como usinagem, acabamento e documentos.</p>

<h3>Quanto tempo leva para receber o orçamento?</h3>
<p>O tempo depende de quão completo está o pedido e da complexidade da peça. Quanto mais informações no primeiro envio, menos idas e vindas.</p>

<p>Quer pedir um orçamento? Fale com a equipe técnica da Aceros pela página de <a href="/contato">contato</a> e envie as informações acima.</p>
`,
  },
  {
    slug: 'sink-roll-como-escolher-liga',
    titulo: 'Sink Roll: como escolher a liga para linhas de galvanização',
    descricao:
      'Conheça os critérios de seleção da liga do Sink Roll conforme o banho, a temperatura, a geometria e o regime de operação da linha.',
    categoria: 'Aplicações',
    tempoLeitura: '6 min',
    dataPublicacao: '2026-08-24',
    dataAtualizacao: '2026-11-03',
    imagem: '/images/aceros/generated/blog-sink-roll-instalado-v2.webp',
    imagemAlt: 'Conjunto Sink Roll instalado em linha industrial de galvanização',
    keywords: ['sink roll', 'liga sink roll', 'galvanização', 'pote de zinco', 'ASTM A297'],
    conteudo: `
<p>O <strong>Sink Roll</strong> é o rolo que fica mergulhado no pote de zinco das linhas de galvanização por imersão a quente. Ele muda a direção da tira de aço dentro do banho e trabalha ali dia e noite, em metal líquido, sob tensão da tira e em contato com partículas abrasivas. É um dos componentes mais exigidos de uma linha de galvanização, e a escolha do material e do conjunto afeta diretamente a vida útil, a qualidade da tira e o número de paradas.</p>

<p>Neste artigo, a engenharia da Aceros explica por que o Sink Roll desgasta, quais critérios pesam na escolha da liga e do conjunto, o que informar para receber uma indicação segura e como reduzir paradas com a reposição planejada.</p>

<h2>O que é e o que faz o Sink Roll</h2>

<p>Em uma linha de galvanização contínua, a tira de aço entra no pote de zinco líquido e precisa sair dele na direção certa. O Sink Roll, também chamado de rolo de imersão, é o rolo que conduz a tira dentro do banho. Perto dele costumam trabalhar rolos estabilizadores e de correção, que controlam o formato e a posição da tira. O conjunto inclui o rolo, as pontas de eixo, as <strong>buchas e mangas</strong> onde ele gira, e os braços que o sustentam.</p>

<h2>As condições de trabalho que definem a especificação</h2>

<p>Poucos componentes industriais trabalham em condição tão severa. Os principais fatores são:</p>

<ul>
  <li><strong>Banho de zinco líquido:</strong> o metal fundido ataca o aço, e ligas de zinco com mais alumínio e temperaturas mais altas são mais agressivas. Em estudos, a manga do Sink Roll aparece trabalhando em banhos em torno de 500 °C.</li>
  <li><strong>Tensão da tira:</strong> a tensão necessária para controlar uma tira em alta velocidade carrega os mancais o tempo todo.</li>
  <li><strong>Lubrificação pelo próprio banho:</strong> no mancal, o zinco líquido é o único lubrificante. Quando o desgaste cresce, o zinco lubrifica pior, o atrito aumenta e o desgaste acelera.</li>
  <li><strong>Borra (dross):</strong> partículas intermetálicas muito duras, suspensas no banho, agem como abrasivo nas superfícies em contato.</li>
  <li><strong>Geometria e velocidade da linha:</strong> definem o projeto do rolo, das pontas e dos apoios.</li>
</ul>

<h2>Como o conjunto desgasta</h2>

<p>O desgaste raramente vem de uma causa só. Em geral, soma estes mecanismos:</p>

<ul>
  <li><strong>Desgaste abrasivo</strong> da bucha e da manga, por causa da borra e do atrito sob carga.</li>
  <li><strong>Ataque químico</strong> do zinco e do alumínio ao material do rolo e dos revestimentos.</li>
  <li><strong>Folga crescente</strong> entre bucha e manga, que gera vibração do rolo e marcas na tira.</li>
  <li><strong>Perda de revestimento:</strong> camadas duras aplicadas sobre mangas e buchas podem trincar e se soltar com o ataque do zinco na interface.</li>
</ul>

<p>Quando o desgaste avança, o rolo começa a vibrar, e essa vibração se transmite à tira. Um dos sinais de que o conjunto precisa de atenção é justamente o aumento de vibração e de marcas de superfície.</p>

<h2>Que materiais aparecem na literatura</h2>

<p>A literatura técnica sobre equipamentos submersos em banhos de zinco registra rolos em aço inoxidável 316L e buchas e mangas em ligas à base de cobalto, como a Stellite 6 e a Tribaloy 800. Também descreve revestimentos de carbonetos aplicados por laser e projetos de bucha que permitem girar a peça para uma superfície nova. Esses exemplos mostram a faixa de soluções existentes, mas não apontam uma liga única. A vida das peças varia muito entre instalações, e há relatos de mangas e buchas que duraram poucas semanas em condições severas.</p>

<h2>Os critérios que definem a liga e o conjunto</h2>

<h3>1. Banho e temperatura</h3>
<p>O tipo de revestimento (zinco, ligas de zinco-alumínio) e a temperatura do banho determinam a agressividade do ataque ao material. Esses dados são os primeiros que a engenharia precisa.</p>

<h3>2. Carga e resistência em temperatura</h3>
<p>O material precisa manter resistência na temperatura do banho, sob a carga da tira, sem deformar nem trincar.</p>

<h3>3. Resistência ao desgaste</h3>
<p>Como há borra abrasiva, o par bucha e manga precisa de superfícies com dureza e resistência ao desgaste adequadas.</p>

<h3>4. Compatibilidade entre as peças</h3>
<p>O rolo, a manga e a bucha dilatam com a temperatura. As folgas de projeto devem funcionar a quente e não só na temperatura ambiente.</p>

<h3>5. Possibilidade de reparo e de reposição</h3>
<p>Vale avaliar se a peça pode ser recuperada, como será trocada e qual o prazo de fabricação de uma nova.</p>

<p>Nenhuma regra única serve para todas as linhas. A escolha do material deve considerar banho, temperatura, esforços, dimensões e o histórico da aplicação.</p>

<h2>Que informações enviar para a indicação da liga</h2>

<ul>
  <li>Tipo de revestimento e composição do banho, com a temperatura de trabalho.</li>
  <li>Velocidade da linha, tensão e espessura da tira.</li>
  <li>Desenho do rolo, das pontas, das buchas e das mangas, com as folgas de projeto.</li>
  <li>Material atual do conjunto e sua vida útil real.</li>
  <li>Histórico de falhas: onde desgastou, quando e com que aspecto.</li>
  <li>Normas, ensaios e certificados exigidos.</li>
</ul>

<h2>Sinais de que é hora de trocar</h2>

<ul>
  <li>Vibração do rolo e marcas repetidas na tira.</li>
  <li>Folga excessiva entre bucha e manga.</li>
  <li>Desgaste irregular ou trincas visíveis na inspeção.</li>
  <li>Revestimento soltando das mangas ou das buchas.</li>
</ul>

<h2>Como planejar a reposição</h2>

<p>Para uma linha que não pode parar, o ideal é manter um conjunto de reserva e registrar a vida útil de cada componente. Com esse histórico, dá para prever a troca e aproveitar uma parada programada. Como as peças são feitas sob medida, o prazo de fabricação precisa entrar no calendário.</p>

<h2>Erros comuns</h2>

<ul>
  <li>Especificar pela medida, sem informar banho e temperatura.</li>
  <li>Repetir a especificação antiga sem conferir se o revestimento da linha mudou.</li>
  <li>Esquecer a folga a quente entre bucha e manga.</li>
  <li>Trocar só o rolo e manter bucha e manga desgastadas.</li>
  <li>Esperar a falha para pedir a peça de reposição.</li>
</ul>

<h2>Como a Aceros fabrica</h2>

<p>A Aceros integra <strong>fundição centrífuga</strong>, usinagem e controle técnico. Conforme o projeto, a verificação pode envolver análise química, dureza, ultrassom e inspeção dimensional. Antes de recomendar a liga, a engenharia analisa o histórico da linha: banho, velocidade, ciclos térmicos e falhas anteriores. Conheça as páginas de <a href="/sink-rolls">Sink Rolls</a>, de <a href="/bucha-de-aco-inox">buchas de aço inox</a> e de <a href="/fundicao-centrifugada">fundição centrífuga</a>. Veja também o artigo sobre as <a href="/blog/bucha-bimetalica-sink-roll">buchas para Sink Roll</a>. Para falar com a engenharia, use a página de <a href="/contato">contato</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>O que é um Sink Roll?</h3>
<p>É o rolo que conduz a tira de aço dentro do pote de zinco de uma linha de galvanização por imersão a quente. Ele trabalha submerso, sob a tensão da tira, e faz parte de um conjunto com pontas, buchas, mangas e braços.</p>

<h3>Por que o Sink Roll desgasta tão rápido?</h3>
<p>Porque soma o ataque do zinco líquido, a carga da tira, a borra abrasiva e o atrito no mancal, onde o próprio zinco é o lubrificante. Quando o desgaste cresce, o atrito aumenta e o desgaste acelera.</p>

<h3>Existe uma liga única para todo Sink Roll?</h3>
<p>Não. A escolha depende do banho, da temperatura, dos esforços, das dimensões e do histórico da aplicação, e é feita pela engenharia caso a caso.</p>

<h3>Que dados são necessários para indicar a liga?</h3>
<p>Composição e temperatura do banho, velocidade e tensão da linha, desenhos do conjunto, material e vida útil atuais, histórico de falhas e as normas ou ensaios exigidos.</p>

<h3>Como saber que é hora de trocar o conjunto?</h3>
<p>Vibração do rolo, marcas repetidas na tira, folga excessiva entre bucha e manga, trincas e perda de revestimento são sinais de atenção.</p>

<h3>Como pedir orçamento de Sink Roll?</h3>
<p>Envie o desenho, as condições do banho, a velocidade da linha e o histórico de falhas pela página de <a href="/contato">contato</a>, e a equipe técnica da Aceros avalia o caso.</p>

<h2>Fontes</h2>

<ul>
  <li>Relatório do Departamento de Energia dos EUA (OSTI): Life Improvement of Pot Hardware in Continuous Hot Dipping Processes.</li>
  <li>Patentes sobre mancais de rolos submersos em banhos de zinco e de alumínio-zinco, usadas como referência de mecanismos de desgaste.</li>
</ul>

<p><strong>Nota técnica:</strong> as informações são gerais. A especificação final depende do banho, da temperatura, dos esforços e das condições reais da linha.</p>
`,
  },
  {
    slug: 'astm-a297-hk-hh-hp-diferencas',
    titulo: 'ASTM A297: diferenças entre as classes HH, HK e HP',
    descricao:
      'Visão geral das classes resistentes ao calor HH, HK e HP da norma ASTM A297, com composição e aplicações industriais típicas.',
    categoria: 'Ligas',
    tempoLeitura: '7 min',
    dataPublicacao: '2026-08-24',
    dataAtualizacao: '2026-11-03',
    imagem: '/images/aceros/generated/blog-astm-a297-tubos-v2.webp',
    imagemAlt: 'Tubos centrifugados usinados para aplicações em ligas ASTM A297',
    keywords: ['ASTM A297', 'HK', 'HH', 'HP', 'aço fundido resistente ao calor'],
    conteudo: `
<p>A norma <strong>ASTM A297</strong> trata de peças fundidas em aço resistente ao calor, nas famílias ferro-cromo e ferro-cromo-níquel, para uso geral. Dentro dela, as classes <strong>HH, HK e HP</strong> são das mais pedidas por quem projeta e mantém fornos, e é comum haver dúvida sobre qual delas escolher. Todas têm cerca de 25% de cromo. O que muda de uma para outra é, principalmente, o teor de níquel, e isso altera a resistência à fluência, à carburização e a ciclos térmicos.</p>

<p>Neste artigo, a engenharia da Aceros explica a composição de cada classe, o que cada diferença significa na prática, onde cada uma costuma ser usada e como informar a condição de serviço para receber uma indicação segura.</p>

<h2>O que a ASTM A297 cobre</h2>

<p>A A297 é uma especificação de peças <strong>fundidas</strong>, e não de chapas ou barras laminadas. Ela reúne várias classes de ligas refratárias, com letras e números que identificam a faixa de composição. As classes HH, HK e HP aparecem com frequência em rolos de forno, tubos radiantes, tubos de reforma, cestos e grelhas de tratamento térmico. Como a norma tem edições sucessivas, a especificação final do projeto deve citar a edição aplicável.</p>

<h2>Composição química de HH, HK e HP</h2>

<p>Os valores abaixo seguem a tabela da ASTM A297/A297M (edição 2021) e são faixas em percentual de massa:</p>

<ul>
  <li><strong>HH (25Cr-12Ni)</strong>: cromo de 24 a 28%, níquel de 11 a 14%, carbono de 0,20 a 0,50%.</li>
  <li><strong>HK (25Cr-20Ni)</strong>: cromo de 24 a 28%, níquel de 18 a 22%, carbono de 0,20 a 0,60%.</li>
  <li><strong>HP (26Cr-35Ni)</strong>: cromo de 24 a 28%, níquel de 33 a 37%, carbono de 0,35 a 0,75%.</li>
</ul>

<p>Nas três, o manganês é limitado a 2,00%, o fósforo e o enxofre a 0,04% cada e o molibdênio a 0,50%. O silício é limitado a 2,00% na HH e na HK, e a 2,50% na HP. Confira sempre a edição vigente da norma antes de fechar uma especificação, porque as faixas podem mudar entre revisões.</p>

<h2>Por que essas ligas têm tanto carbono</h2>

<p>Quem está acostumado com aço inox laminado, como o 304, espera carbono baixo. Nas ligas fundidas resistentes ao calor, o carbono é alto de propósito. Ele forma carbonetos na estrutura do metal, e esses carbonetos ajudam a sustentar a peça quando ela trabalha em temperatura elevada sob carga. É por isso que a comparação de uma liga de forno com um inox comum de chapa não faz sentido: são materiais pensados para problemas diferentes.</p>

<h2>O que o teor de níquel muda na prática</h2>

<p>Entre HH, HK e HP, o níquel sobe de cerca de 12% para 20% e depois para 35%. Em termos gerais, mais níquel ajuda a estabilizar a estrutura austenítica e costuma melhorar a resistência à <strong>carburização</strong> e a estabilidade em ciclos térmicos severos. Em compensação, a liga fica mais cara. E o níquel alto nem sempre é a melhor resposta: em atmosferas com enxofre, ligas muito ricas em níquel podem ser mais sensíveis. Por isso a atmosfera do forno precisa entrar na conversa desde o início.</p>

<h2>Fluência: o desgaste que não aparece</h2>

<p>Em temperatura alta, o metal sob carga constante se deforma devagar ao longo do tempo. Esse fenômeno é a <strong>fluência</strong>, e é uma das principais causas de falha em tubos, rolos e suportes de forno. A peça pode parecer inteira e, ainda assim, estar empenando ou perdendo diâmetro. As classes da A297 foram desenvolvidas para resistir a esse tipo de dano melhor do que os inox comuns, mas cada classe tem seu limite, e ele depende de carga, atmosfera e do tempo de operação.</p>

<h2>Quais são as temperaturas de trabalho</h2>

<p>Esta é uma pergunta frequente e a resposta honesta é que <strong>não existe um número único</strong>. Fichas técnicas de fornecedores citam, para a HP modificada com nióbio, uso de longo prazo na faixa de 1.050 a 1.080 °C, e para a HK valores próximos de 1.090 °C. Outras tabelas trazem limites menores para a HH. As diferenças vêm da atmosfera considerada, da carga e do critério de vida adotado. Por isso a Aceros não trabalha com um limite fixo por classe: a indicação sai da análise da condição real de serviço do cliente.</p>

<h2>Aplicações típicas de cada classe</h2>

<h3>HH: rolos, grelhas e cestos</h3>
<p>A HH é uma opção usual para componentes de fornos de tratamento térmico, como rolos, grelhas e cestos, quando a exigência de temperatura e de carburização é moderada. É a que tem o menor teor de níquel e, em geral, o menor custo entre as três.</p>

<h3>HK: componentes de fornos e tubos radiantes</h3>
<p>A HK com 20% de níquel é uma das ligas mais usadas em peças de fornos industriais, como tubos radiantes, rolos e dispositivos. Oferece um equilíbrio entre resistência à fluência, resistência à oxidação e custo.</p>

<h3>HP: reforma e petroquímica</h3>
<p>A HP é a referência para tubos de fornos de reforma e de pirólise, usados em plantas de hidrogênio, metanol, amônia e eteno. O alto teor de níquel dá estabilidade em ciclos térmicos severos e resistência à carburização.</p>

<h2>O que é a HP-Nb e quando ela entra</h2>

<p>A HP-Nb é a HP modificada com <strong>nióbio</strong>. O nióbio forma carbonetos que aumentam a resistência à fluência e à carburização, e por isso a liga é usada em tubos centrifugados da petroquímica. Existe um ponto de atenção: com o tempo em serviço, esses carbonetos finos tendem a crescer e se agrupar, o que muda o comportamento da peça. Por isso a escolha da HP-Nb deve vir do projeto, com a vida de serviço prevista, e não de uma regra geral.</p>

<h2>Como escolher entre HH, HK e HP</h2>

<p>Em vez de partir da liga, parta da condição de serviço. As informações que mais pesam são:</p>

<ul>
  <li>Temperatura máxima e temperatura média de operação.</li>
  <li>Atmosfera do forno: oxidante, redutora, carburante ou com enxofre.</li>
  <li>Carga mecânica e peso apoiado na peça.</li>
  <li>Ciclos térmicos, com partidas, paradas e variações bruscas.</li>
  <li>Vida útil esperada e custo de uma parada para troca.</li>
  <li>Tipo de peça: tubo, rolo, bucha, grelha ou suporte.</li>
</ul>

<h2>Erros comuns ao especificar</h2>

<ul>
  <li>Escolher a liga mais cara por segurança, sem necessidade, e aumentar o custo sem ganho.</li>
  <li>Escolher a liga mais barata e encurtar a vida da peça, o que sai caro com a parada.</li>
  <li>Copiar a especificação antiga sem conferir se o processo ou a atmosfera mudaram.</li>
  <li>Ignorar a atmosfera e olhar só a temperatura.</li>
  <li>Esquecer de pedir os ensaios e certificados exigidos pelo projeto.</li>
</ul>

<h2>Como a Aceros trabalha com essas ligas</h2>

<p>A Aceros fabrica peças por <a href="/fundicao-centrifugada">fundição centrífuga</a>, com usinagem conforme o desenho, em ligas selecionadas pela engenharia. A indicação da classe considera a temperatura de trabalho, a atmosfera do forno, os ciclos térmicos e o histórico da aplicação, e a especificação final consta no desenho e na documentação do fornecimento. Conheça os <a href="/tubos-de-aco-inox">tubos de aço inox sob medida</a>, os <a href="/rolos-de-forno">rolos de forno</a> e a página de <a href="/ligas">ligas especiais</a>. Para falar com a engenharia, use a página de <a href="/contato">contato</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>O que é a norma ASTM A297?</h3>
<p>É a especificação de peças fundidas de aço resistente ao calor, nas famílias ferro-cromo e ferro-cromo-níquel, para uso geral. Ela reúne classes como HH, HK e HP.</p>

<h3>Qual a diferença entre as classes HH, HK e HP?</h3>
<p>As três têm de 24 a 28% de cromo. O que muda é o níquel: a HH tem de 11 a 14%, a HK de 18 a 22% e a HP de 33 a 37%. O carbono também varia: HH de 0,20 a 0,50%, HK de 0,20 a 0,60% e HP de 0,35 a 0,75%.</p>

<h3>Qual é a temperatura máxima de cada classe?</h3>
<p>Não existe um valor único. As referências de fornecedores variam conforme a atmosfera, a carga e a vida prevista, e a HP modificada com nióbio costuma aparecer na faixa de 1.050 a 1.080 °C. Por isso a Aceros define o limite caso a caso, a partir da condição de serviço.</p>

<h3>Por que as ligas da A297 têm carbono alto?</h3>
<p>O carbono forma carbonetos que sustentam a peça em temperatura elevada sob carga. Em ligas resistentes ao calor isso é desejado, ao contrário do que ocorre em inox laminado comum.</p>

<h3>O que é a liga HP-Nb?</h3>
<p>É a classe HP modificada com nióbio, que forma carbonetos que aumentam a resistência à fluência e à carburização. Com o tempo em serviço, esses carbonetos podem crescer e mudar o comportamento da peça, por isso a escolha vem do projeto.</p>

<h3>Como pedir orçamento de peças nessas ligas?</h3>
<p>Envie o desenho ou as dimensões, a temperatura máxima, a atmosfera do forno, a carga, a quantidade e as normas ou ensaios exigidos pelo projeto, pela página de <a href="/contato">contato</a>.</p>

<h2>Fontes</h2>

<ul>
  <li>ASTM A297/A297M: peças fundidas de aço resistente ao calor, ferro-cromo e ferro-cromo-níquel, para uso geral.</li>
  <li>Fichas técnicas de fornecedores de ligas HK e HP modificada, usadas como referência de temperatura.</li>
</ul>

<p><strong>Nota técnica:</strong> os valores apresentados são referências gerais. A especificação final deve considerar a edição aplicável da norma, os requisitos do projeto e as condições reais de serviço.</p>
`,
  },
  {
    slug: 'fundicao-centrifugada-vantagens',
    titulo: 'Fundição centrifugada: vantagens e quando utilizar o processo',
    descricao:
      'Entenda como funciona a centrifugação, suas vantagens para peças tubulares e quando a fundição estática pode ser indicada.',
    categoria: 'Processo',
    tempoLeitura: '6 min',
    dataPublicacao: '2026-08-24',
    dataAtualizacao: '2026-11-03',
    imagem: '/images/aceros/generated/blog-fundicao-centrifugada-v2.webp',
    imagemAlt: 'Vazamento de aço em máquina de fundição centrífuga horizontal',
    keywords: ['fundição centrifugada', 'centrifugação', 'força centrífuga', 'ASTM A297'],
    conteudo: `
<p>A <strong>fundição centrífuga</strong> é o processo em que o aço líquido é vazado em um molde que gira em alta rotação. A força centrífuga empurra o metal contra a parede do molde, e a peça se forma já com o furo central, sem precisar de macho. É o caminho mais usado para fabricar peças cilíndricas, como tubos, buchas, mangas e rolos, e é o processo central da Aceros.</p>

<p>Neste artigo, a engenharia da Aceros explica como a centrifugação funciona, por que ela favorece a qualidade de peças tubulares, quais são seus limites e quando a fundição estática é a melhor escolha.</p>

<h2>Como funciona a fundição centrífuga</h2>

<p>O processo segue etapas bem definidas:</p>

<ol>
  <li><strong>Fusão do metal.</strong> Na Aceros, o aço é fundido em forno elétrico e chega ao molde a temperaturas entre 1.500 e 1.630 °C.</li>
  <li><strong>Preparação do molde.</strong> Uma coquilha metálica, pré-aquecida, é posta em rotação. A velocidade é calculada para cada diâmetro e massa de peça.</li>
  <li><strong>Vazamento.</strong> O metal líquido é vazado dentro do molde girando e é lançado contra a parede pela força centrífuga.</li>
  <li><strong>Solidificação.</strong> O metal solidifica a partir da parede do molde, em direção ao furo, sob rotação contínua.</li>
  <li><strong>Resfriamento e extração.</strong> Depois de solidificada, a peça é retirada do molde.</li>
  <li><strong>Tratamento térmico e usinagem.</strong> Conforme a liga e o projeto, a peça passa por tratamento térmico e é usinada às dimensões do desenho.</li>
</ol>

<p>Em uma peça tubular, o furo interno é formado pela própria rotação, e a espessura da parede é definida pelo volume de metal vazado. Por isso não é preciso usar machos de areia para formar o diâmetro interno.</p>

<h2>Por que a centrifugação favorece a qualidade da peça</h2>

<p>A principal vantagem está na forma como o metal solidifica. Como a solidificação começa na parede do molde e avança para o centro, a frente de solidificação empurra o metal ainda líquido para o furo. Isso favorece uma <strong>estrutura densa</strong> e reduz a chance de porosidade e de rechupe na região da parede.</p>

<p>Há ainda um efeito importante: as partículas mais leves, como escória e inclusões, tendem a migrar para o diâmetro interno, que fica na última região a solidificar. Depois, a usinagem do furo remove essa camada, e a parede útil da peça fica com um metal mais limpo. Esse efeito não elimina a necessidade de controle, mas ajuda no resultado.</p>

<h2>Vantagens da centrifugação para peças tubulares</h2>

<h3>1. Estrutura densa e parede sem costura</h3>
<p>A peça é formada em uma única operação, sem emendas e sem solda longitudinal. Isso interessa em serviços com pressão e temperatura, onde a região da solda pode ser um ponto de atenção.</p>

<h3>2. Concentricidade entre diâmetro interno e externo</h3>
<p>Como a peça gira durante a solidificação, os diâmetros interno e externo tendem a ser concêntricos. A usinagem posterior leva a peça às tolerâncias do desenho.</p>

<h3>3. Parâmetros definidos para cada peça</h3>
<p>Rotação, diâmetro do molde, temperatura de vazamento e massa do tubo são calculados para cada projeto. Isso permite repetir o resultado em lotes e ajustar o processo à liga.</p>

<h3>4. Aproveitamento de ligas especiais</h3>
<p>O processo é adequado para ligas resistentes ao calor, como as classes HH, HK e HP da ASTM A297, e para aços inoxidáveis fundidos. É assim que se fabricam tubos de forno, rolos e buchas para serviço severo.</p>

<h3>5. Menos material a remover</h3>
<p>Como a peça já nasce próxima da forma final, com furo e parede formados, a usinagem tende a ser menor do que em peças feitas de barra maciça. A quantidade exata depende do projeto e da liga.</p>

<h2>O que a centrifugação não faz</h2>

<p>Nenhum processo é perfeito, e vale conhecer os limites:</p>

<ul>
  <li>A centrifugação serve para peças com <strong>simetria de revolução</strong>, como tubos, buchas e anéis. Peças com formas assimétricas ou complexas não podem ser feitas assim.</li>
  <li>O diâmetro interno precisa de usinagem, porque a camada mais próxima do furo concentra as impurezas.</li>
  <li>Defeitos ainda são possíveis, como qualquer fundição, e por isso o controle da qualidade faz parte do processo.</li>
  <li>Cada projeto exige parâmetros próprios, o que torna o processo menos indicado para peças de catálogo padronizadas.</li>
</ul>

<h2>Quando a fundição estática pode ser indicada</h2>

<p>A Aceros também trabalha com fundição estática, em que o metal é vazado em um molde parado. Ela é indicada para geometrias que não permitem a centrifugação, como carcaças complexas, peças assimétricas e componentes com várias seções. Os dois processos convivem na fábrica, e a engenharia especifica o mais adequado a cada projeto.</p>

<h2>Por que a centrifugação é tão usada em ligas resistentes ao calor</h2>

<p>Tubos de fornos de reforma e de pirólise, em ligas como a HP e a HP-Nb, são tradicionalmente fabricados por centrifugação. A norma ASTM A608, por exemplo, trata de tubos centrifugados de liga ferro-cromo-níquel para serviço sob pressão em alta temperatura. Nesses tubos, a solidificação a partir da parede do molde costuma gerar grãos alongados no sentido da espessura, uma estrutura associada ao bom comportamento em fluência. A peça sem costura também evita a região de solda, que seria um ponto de atenção em serviço severo. Por isso, quando o assunto é alta temperatura com carga, a centrifugação costuma ser a primeira opção a avaliar.</p>

<h2>Centrifugado, soldado ou usinado de barra</h2>

<p>Para peças tubulares, há alternativas à centrifugação. O tubo soldado, feito de chapa, atende bem aplicações de menor exigência, com medidas padronizadas e entrega rápida. A peça usinada de barra maciça é possível, mas desperdiça material e limita as ligas disponíveis. A fundição centrífuga se destaca quando a peça é sob medida, em liga especial e para serviço severo.</p>

<h2>Controle de qualidade em peças centrifugadas</h2>

<p>A integridade da peça é confirmada pelos controles definidos para o projeto. Conforme o fornecimento, isso pode incluir análise química, dureza, inspeção dimensional, líquido penetrante e ultrassom, além da documentação e dos certificados exigidos pelo cliente.</p>

<h2>Que peças são feitas por centrifugação</h2>

<ul>
  <li><strong>Tubos</strong> para fornos, trocadores e processos térmicos.</li>
  <li><strong>Buchas e mangas</strong>, como as usadas na ponta de rolos.</li>
  <li><strong>Rolos</strong> para fornos de tratamento térmico.</li>
  <li><strong>Anéis e cilindros</strong> em ligas especiais.</li>
</ul>

<h2>Como pedir peças centrifugadas</h2>

<p>Para receber uma proposta correta, informe o desenho ou as dimensões, a liga ou a condição de serviço, a temperatura e a atmosfera de operação, a quantidade e as normas ou ensaios exigidos. Veja mais sobre a <a href="/fundicao-centrifugada">fundição centrífuga da Aceros</a>, os <a href="/tubos-de-aco-inox">tubos de aço inox sob medida</a> e as <a href="/bucha-de-aco-inox">buchas de aço inox</a>. Para falar com a engenharia, use a página de <a href="/contato">contato</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>O que é a fundição centrífuga?</h3>
<p>É um processo em que o aço líquido é vazado em um molde em rotação. A força centrífuga leva o metal contra a parede do molde e forma uma peça tubular, com o furo central formado pela própria rotação.</p>

<h3>Quais são as vantagens da fundição centrífuga?</h3>
<p>Estrutura densa, peça sem costura, concentricidade entre os diâmetros interno e externo, parâmetros definidos para cada peça e adequação a ligas especiais resistentes ao calor.</p>

<h3>Que peças podem ser fabricadas por centrifugação?</h3>
<p>Peças com simetria de revolução, como tubos, buchas, mangas, rolos e anéis. Peças assimétricas ou complexas não podem ser feitas por esse processo.</p>

<h3>A peça centrifugada precisa de usinagem?</h3>
<p>Sim. A usinagem leva a peça às dimensões e às tolerâncias do desenho e remove a camada interna, onde as impurezas tendem a se concentrar.</p>

<h3>Qual é a temperatura de vazamento do aço?</h3>
<p>Na Aceros, o aço é fundido em forno elétrico e chega ao molde a temperaturas entre 1.500 e 1.630 °C.</p>

<h3>Quando a fundição estática é melhor?</h3>
<p>Quando a peça tem geometria que não permite centrifugação, como carcaças complexas, peças assimétricas e componentes com várias seções. A engenharia da Aceros especifica o processo mais adequado a cada projeto.</p>

<h2>Fontes</h2>

<ul>
  <li>Literatura técnica de fundição centrífuga: solidificação direcional e migração de inclusões para o diâmetro interno.</li>
  <li>ASTM A297/A297M: peças fundidas de aço resistente ao calor.</li>
  <li>ASTM A608: tubos centrifugados de liga ferro-cromo-níquel para serviço sob pressão em alta temperatura.</li>
</ul>
`,
  },
  {
    slug: 'bucha-bimetalica-sink-roll',
    titulo: 'Buchas para Sink Roll: critérios de especificação e fabricação',
    descricao:
      'Entenda quais dados do conjunto e da linha devem ser avaliados na especificação de buchas para ponta de Sink Roll.',
    categoria: 'Aplicações',
    tempoLeitura: '6 min',
    dataPublicacao: '2026-08-24',
    dataAtualizacao: '2026-11-03',
    imagem: '/images/aceros/generated/blog-buchas-centrifugadas-v2.webp',
    imagemAlt: 'Buchas centrifugadas de aço inox usinadas em diferentes diâmetros',
    keywords: ['bucha sink roll', 'ponta sink roll', 'galvanização', 'bucha centrifugada'],
    conteudo: `
<p>Nas linhas de galvanização por imersão a quente, a <strong>bucha da ponta do Sink Roll</strong> é a peça onde o rolo gira. Ela é pequena perto do rolo, mas é uma das que mais definem a vida do conjunto, porque trabalha no pote de zinco, sob carga, em atrito constante e em contato com partículas abrasivas. Uma bucha mal especificada desgasta cedo, o rolo passa a vibrar e a linha para.</p>

<p>Neste artigo, a engenharia da Aceros explica o que a bucha faz, que dados precisam ser levantados para especificá-la, como ela é fabricada por centrifugação e usinada, quais controles se aplicam e quais erros evitar.</p>

<h2>O que é a bucha da ponta do Sink Roll</h2>

<p>O Sink Roll é sustentado por pontas de eixo que se apoiam em um mancal dentro do banho. Em um arranjo comum, esse mancal é formado por duas peças que trabalham juntas: a <strong>manga</strong>, que gira com o eixo, e a <strong>bucha</strong>, que fica fixa no braço. O contato entre as duas é o ponto crítico: ali o zinco líquido é o único lubrificante, e o desgaste cresce quando a folga aumenta.</p>

<p>Por isso, o material, as dimensões, o acabamento e as tolerâncias da bucha precisam ser definidos conforme o projeto do conjunto e as condições reais de operação.</p>

<h2>Por que a bucha merece atenção especial</h2>

<ul>
  <li>Trabalha <strong>submersa</strong> em zinco líquido, que ataca o material.</li>
  <li>Suporta a <strong>carga da tira</strong>, que é contínua.</li>
  <li>Convive com a <strong>borra</strong>, partículas intermetálicas duras que abrasam as superfícies.</li>
  <li>Depende da <strong>folga correta</strong> com a manga: se for grande demais, o rolo vibra; se for pequena demais, o atrito sobe.</li>
</ul>

<p>Quando o desgaste da bucha aumenta, a folga cresce, o rolo se move e a tira sofre marcas. É um desgaste que se acelera sozinho, e por isso vale trocar antes da falha.</p>

<h2>Bucha monometálica e bimetálica</h2>

<p>A bucha pode ser feita em uma só liga ou combinar duas. Na <strong>bucha bimetálica</strong>, uma liga forma o corpo da peça e outra forma a camada que fica em contato com a manga, escolhida pela resistência ao desgaste e ao ataque do banho. A fundição centrífuga permite fabricar esse tipo de peça, porque o metal é vazado em camadas contra a parede do molde em rotação. A escolha entre uma e outra depende do banho, da carga, da vida desejada e do custo, e é feita pela engenharia a partir dos dados da linha.</p>

<h2>O que informar para especificar a bucha</h2>

<p>A análise técnica deve considerar, no mínimo:</p>

<ul>
  <li><strong>Desenho e dimensões</strong> da ponta, da bucha e dos componentes associados, com as folgas de projeto.</li>
  <li><strong>Condição de operação</strong>: composição e temperatura do banho, carga da tira, velocidade da linha e histórico de desgaste.</li>
  <li><strong>Material atual</strong> e registros de falha ou de manutenção, quando existirem.</li>
  <li><strong>Material da manga</strong>, porque o par bucha e manga precisa ser compatível.</li>
  <li>Normas, ensaios e certificados exigidos pelo cliente.</li>
</ul>

<h2>Dimensões, folgas e acabamento</h2>

<p>A bucha deve ser fabricada conforme o desenho, com as tolerâncias do projeto. Três pontos merecem atenção:</p>

<ul>
  <li><strong>Folga entre bucha e manga:</strong> deve funcionar na temperatura do banho, e não só na temperatura ambiente, porque as peças dilatam.</li>
  <li><strong>Circularidade e concentricidade:</strong> ajudam a distribuir a carga e a evitar desgaste localizado.</li>
  <li><strong>Acabamento da superfície de trabalho:</strong> deve ser definido junto com a liga e com o par de contato.</li>
</ul>

<h2>Como a bucha é fabricada</h2>

<p>A Aceros fabrica buchas por <a href="/fundicao-centrifugada">fundição centrífuga</a> e as usina conforme o desenho. O aço é fundido em forno elétrico e vazado em um molde em rotação, e a peça bruta é depois levada às dimensões finais por usinagem. A centrifugação favorece uma estrutura densa e uma peça cilíndrica sem costura, e a usinagem remove a camada interna onde as impurezas tendem a se concentrar.</p>

<h2>Controles de qualidade</h2>

<p>De acordo com os requisitos do fornecimento, o controle técnico pode incluir:</p>

<ul>
  <li>Análise química, para confirmar a liga.</li>
  <li>Dureza.</li>
  <li>Ultrassom, para verificar a integridade interna.</li>
  <li>Inspeção dimensional, conforme o desenho.</li>
  <li>Documentação e certificados definidos no projeto.</li>
</ul>

<h2>O que o fornecimento precisa garantir</h2>

<ul>
  <li>Dimensões e tolerâncias conforme o desenho.</li>
  <li>Material selecionado para a aplicação.</li>
  <li>Usinagem e acabamento adequados à montagem.</li>
  <li>Inspeções e documentação definidas no projeto.</li>
</ul>

<h2>Onde as buchas são aplicadas</h2>

<ul>
  <li>Ponta de Sink Roll, em linhas de galvanização a quente.</li>
  <li>Conjuntos de Sink Roll e de rolos estabilizadores.</li>
  <li>Aplicações industriais semelhantes, após avaliação da engenharia.</li>
</ul>

<h2>Como ler a bucha usada</h2>

<p>A bucha que sai da linha conta a história do que aconteceu no banho, e vale examiná-la antes de pedir a próxima. Observe o tipo de desgaste:</p>

<ul>
  <li><strong>Desgaste uniforme</strong> em toda a superfície costuma indicar fim de vida normal por abrasão.</li>
  <li><strong>Desgaste concentrado em um lado</strong> pode apontar para desalinhamento, carga desigual ou folga inadequada.</li>
  <li><strong>Trincas</strong> sugerem choque térmico, esforço excessivo ou material inadequado para o ciclo.</li>
  <li><strong>Aderência de zinco ou de borra</strong> na superfície indica que o banho e o acabamento merecem revisão.</li>
</ul>

<p>Fotografe a peça, anote as horas de operação e envie essas informações à engenharia. Com esse histórico, a próxima bucha pode ser ajustada em material, em folga ou em acabamento, em vez de repetir a mesma solução.</p>

<h2>Cuidados na montagem e na operação</h2>

<p>Boa parte da vida da bucha depende de como ela é montada. Siga o procedimento do projeto, confira as folgas antes de mergulhar o conjunto e inspecione as superfícies de contato. Registrar as horas de operação de cada conjunto ajuda a prever a troca e a evitar surpresas.</p>

<h2>Erros comuns ao especificar buchas</h2>

<ul>
  <li>Pedir pela medida, sem informar banho, carga e histórico.</li>
  <li>Trocar a bucha e manter uma manga já desgastada.</li>
  <li>Ignorar a dilatação, e especificar a folga só para a temperatura ambiente.</li>
  <li>Repetir a especificação antiga quando o revestimento da linha mudou.</li>
  <li>Deixar a reposição para depois da falha.</li>
</ul>

<h2>Como a Aceros ajuda</h2>

<p>A engenharia da Aceros analisa o desenho, o banho e o histórico de falhas antes de indicar o material e preparar a proposta. Para entender melhor o conjunto, leia o artigo sobre <a href="/blog/sink-roll-como-escolher-liga">como escolher a liga do Sink Roll</a> e conheça as páginas de <a href="/bucha-de-aco-inox">buchas de aço inox</a> e de <a href="/sink-rolls">Sink Rolls</a>. Para pedir um orçamento, use a página de <a href="/contato">contato</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>O que é a bucha da ponta do Sink Roll?</h3>
<p>É a peça do mancal onde o rolo gira, dentro do pote de zinco, trabalhando junto com a manga que gira com o eixo.</p>

<h3>O que informar para especificar a bucha?</h3>
<p>O desenho e as dimensões, as folgas, a composição e a temperatura do banho, a carga e a velocidade da linha, o material atual da bucha e da manga e o histórico de falhas.</p>

<h3>Qual a diferença entre bucha monometálica e bimetálica?</h3>
<p>A monometálica é feita em uma só liga. A bimetálica combina duas: uma para o corpo e outra para a camada de contato, escolhida pela resistência ao desgaste e ao ataque do banho.</p>

<h3>Como a Aceros fabrica as buchas?</h3>
<p>Por fundição centrífuga, com usinagem conforme o desenho.</p>

<h3>Que controles podem ser feitos nas buchas?</h3>
<p>Conforme os requisitos do fornecimento, análise química, dureza, ultrassom, inspeção dimensional e a documentação definida no projeto.</p>

<h3>Quando trocar a bucha?</h3>
<p>Quando a folga com a manga cresce, o rolo vibra, aparecem marcas na tira ou há trincas e desgaste irregular. O ideal é trocar em uma parada programada, antes da falha.</p>

<h2>Fontes</h2>

<ul>
  <li>Relatório do Departamento de Energia dos EUA (OSTI): Life Improvement of Pot Hardware in Continuous Hot Dipping Processes.</li>
  <li>Patentes sobre mancais de rolos submersos em banhos de zinco, usadas como referência de mecanismos de desgaste.</li>
</ul>

<p><strong>Nota técnica:</strong> as informações são gerais. A especificação final depende do projeto, do banho e das condições reais de operação.</p>
`,
  },
  {
    slug: 'ligas-304-316-310-alta-temperatura',
    titulo: 'Ligas 304, 316 e 310 para alta temperatura: qual escolher',
    descricao:
      'Comparativo técnico entre as três ligas de aço inox mais utilizadas em ambientes de alta temperatura. Composição, resistência e aplicações típicas.',
    categoria: 'Ligas',
    tempoLeitura: '7 min',
    dataPublicacao: '2026-08-24',
    dataAtualizacao: '2026-11-03',
    imagem: '/images/aceros/generated/blog-ligas-inox-v2.webp',
    imagemAlt: 'Tubos centrifugados em etapas de acabamento bruto, usinado e polido',
    keywords: ['aço inox 304', 'aço inox 316', 'aço inox 310', 'alta temperatura'],
    conteudo: `
<p>Escolher entre as ligas de aço inox <strong>304, 316 e 310</strong> é uma das decisões técnicas mais comuns em projetos industriais. As três são aços inoxidáveis austeníticos e parecem semelhantes, mas têm composições diferentes, e cada uma responde de um jeito à temperatura, à corrosão e à carga. Em alta temperatura, errar a liga costuma custar caro: a peça oxida, empena ou trinca antes do prazo e a linha para.</p>

<p>Neste guia, a engenharia da Aceros compara as três ligas, explica o que os limites de temperatura realmente significam, mostra o que as tabelas não contam e indica quando é hora de ir além do inox comum.</p>

<h2>Composição das três ligas</h2>

<p>Os valores abaixo são faixas típicas de composição, em percentual de massa:</p>

<ul>
  <li><strong>AISI 304</strong>: cerca de 18 a 20% de cromo e 8 a 10,5% de níquel.</li>
  <li><strong>AISI 316</strong>: cerca de 16 a 18% de cromo, 10 a 14% de níquel e <strong>2 a 3% de molibdênio</strong>.</li>
  <li><strong>AISI 310</strong>: cerca de 24 a 26% de cromo e 19 a 22% de níquel.</li>
</ul>

<p>O cromo forma a camada protetora que dá ao inox a resistência à oxidação. O níquel estabiliza a estrutura austenítica. E o molibdênio, presente só na 316, melhora a resistência a cloretos. A 310 tem os maiores teores de cromo e de níquel, e é por isso que ela é a mais indicada entre as três para temperatura elevada.</p>

<h2>AISI 304 e 304L</h2>

<p>É o inox mais usado no mundo. Tem boa resistência à corrosão em ambientes atmosféricos, químicos leves e de alimentos, e é fácil de soldar e conformar. A versão <strong>L</strong>, de baixo carbono, é a indicada quando há soldagem intensiva, porque reduz o risco de <strong>sensibilização</strong>, que é a perda de resistência à corrosão intergranular depois da soldagem ou da exposição prolongada a certas temperaturas.</p>

<p><strong>Aplicações típicas:</strong> equipamentos químicos leves, tanques de alimentos, estruturas arquitetônicas, tubulações de baixa pressão e componentes que não trabalham em temperatura muito alta.</p>

<h2>AISI 316 e 316L</h2>

<p>O molibdênio é o que diferencia a 316. Ele melhora a resistência a cloretos, a ambientes marinhos e a meios químicos mais agressivos, como os de petroquímica e farmacêutica. Em temperatura, o comportamento é parecido com o da 304.</p>

<p><strong>Aplicações típicas:</strong> equipamentos offshore, indústria petroquímica, tratamento de água salobra, componentes farmacêuticos e tubulações químicas.</p>

<h2>AISI 310</h2>

<p>Com cerca de 25% de cromo e 20% de níquel, a 310 foi desenvolvida para altas temperaturas. Ela resiste melhor à oxidação e mantém a estrutura estável em uma faixa em que a 304 e a 316 já perdem desempenho.</p>

<p><strong>Aplicações típicas:</strong> componentes internos de fornos, tubos radiantes, cestos de tratamento térmico e grelhas de fornos industriais.</p>

<h2>Temperaturas de referência: o que as tabelas dizem</h2>

<p>As tabelas de fornecedores, baseadas em normas como a EN 10095, costumam trazer valores de referência em <strong>ar seco</strong>:</p>

<ul>
  <li><strong>304 e 316</strong>: cerca de 870 °C em serviço intermitente e até cerca de 925 °C em serviço contínuo.</li>
  <li><strong>310</strong>: limite de oxidação em torno de 1.150 °C em serviço contínuo, e na faixa de 1.035 a 1.040 °C em serviço intermitente.</li>
</ul>

<p>Esses números são limites de <strong>oxidação</strong>, isto é, até onde a liga resiste a formar carepa. Eles não são limites de projeto. A resistência mecânica cai bem antes, e por isso há fornecedores que recomendam ficar abaixo de cerca de 1.050 °C em serviço contínuo para a 310, quando há carga. Em ar úmido, as referências caem de 40 a 65 °C em relação ao ar seco. E atmosferas com enxofre ou carbono mudam o quadro por completo.</p>

<h2>O que as tabelas não contam</h2>

<ul>
  <li><strong>Resistência mecânica:</strong> acima de 500 °C, a 304 e a 316 já perdem resistência de forma importante. Uma peça sob carga pode deformar por fluência bem abaixo do limite de oxidação.</li>
  <li><strong>Faixas problemáticas:</strong> na 304 e na 316, a exposição prolongada em uma faixa intermediária de temperatura favorece a sensibilização. Na 310, a exposição longa entre aproximadamente 600 e 950 °C pode causar fragilização por fase sigma.</li>
  <li><strong>Ciclos térmicos:</strong> aquecer e resfriar repetidamente gera tensão e trincas que um limite de temperatura em regime não mostra.</li>
  <li><strong>Atmosfera:</strong> carburização, sulfetação e atmosferas redutoras exigem outra análise.</li>
</ul>

<h2>Comparativo rápido</h2>

<ul>
  <li>Temperatura em serviço contínuo, como referência: <strong>304 e 316 na faixa de 870 a 925 °C; 310 acima de 1.000 °C</strong>.</li>
  <li>Resistência a cloretos: <strong>a 316 é superior à 304 e à 310</strong>.</li>
  <li>Resistência à oxidação em alta temperatura: <strong>a 310 é a melhor das três</strong>.</li>
  <li>Custo relativo, em geral: <strong>304 menor que 316, e 316 menor que 310</strong>.</li>
</ul>

<h2>E nas peças fundidas?</h2>

<p>A 304, a 316 e a 310 são designações de aços laminados. Para peças fundidas, as ligas correspondentes seguem a ASTM A351: a contraparte fundida da 304 é a CF8, a da 316 é a CF8M e a da 310 é a CK20. As propriedades são parecidas, mas não idênticas, por causa da estrutura de fundição. Por isso o desenho e a norma da peça precisam definir a liga fundida exata.</p>

<h2>Quando ir além dessas ligas</h2>

<p>Quando a temperatura é alta e contínua, com carga e ciclos severos, as ligas fundidas resistentes ao calor da <strong>ASTM A297</strong>, como a HK e a HP, costumam ser melhores que o inox laminado. Elas têm carbono alto de propósito, o que ajuda a resistir à fluência. Veja as diferenças entre essas classes no artigo sobre <a href="/blog/astm-a297-hk-hh-hp-diferencas">ASTM A297: HH, HK e HP</a>.</p>

<h2>Como escolher</h2>

<ol>
  <li>Defina a temperatura máxima e a média de operação.</li>
  <li>Descreva a atmosfera: ar, gases de combustão, cloretos, enxofre ou carbono.</li>
  <li>Informe a carga e o tipo de esforço sobre a peça.</li>
  <li>Considere os ciclos de aquecimento e resfriamento.</li>
  <li>Compare o custo da liga com o custo de uma parada para troca.</li>
</ol>

<h2>Erros comuns</h2>

<ul>
  <li>Usar o limite de oxidação da tabela como limite de projeto.</li>
  <li>Escolher a 316 achando que ela resiste mais ao calor do que a 304, quando o ganho dela é contra cloretos.</li>
  <li>Esquecer da atmosfera do forno.</li>
  <li>Ignorar os ciclos de partida e parada.</li>
</ul>

<h2>Como a Aceros ajuda</h2>

<p>A Aceros fabrica peças por <a href="/fundicao-centrifugada">fundição centrífuga</a>, em aços inoxidáveis e ligas resistentes ao calor, sob medida e conforme o desenho técnico. A engenharia avalia a condição de serviço e indica a liga. Veja os <a href="/tubos-de-aco-inox">tubos de aço inox</a>, as <a href="/ligas">ligas especiais</a> e fale com a equipe pela página de <a href="/contato">contato</a>.</p>

<h2>Perguntas frequentes</h2>

<h3>Qual a diferença entre o aço inox 304, 316 e 310?</h3>
<p>A 304 tem cerca de 18 a 20% de cromo e 8 a 10,5% de níquel. A 316 acrescenta de 2 a 3% de molibdênio, que melhora a resistência a cloretos. A 310 tem cerca de 25% de cromo e 20% de níquel e é a indicada para temperatura elevada.</p>

<h3>Qual liga suporta a maior temperatura?</h3>
<p>A 310. As referências em ar seco dão um limite de oxidação em torno de 1.150 °C para ela, contra cerca de 870 a 925 °C para a 304 e a 316. Para peças sob carga, o limite prático é menor.</p>

<h3>Qual é a melhor contra cloretos e ambiente marinho?</h3>
<p>A 316, por causa do molibdênio, que melhora a resistência à corrosão por cloretos.</p>

<h3>O que significa o L em 304L e 316L?</h3>
<p>Significa baixo carbono. Essa versão é indicada quando há soldagem intensiva, porque reduz o risco de sensibilização e da perda de resistência à corrosão intergranular.</p>

<h3>O limite de temperatura da tabela serve como limite de projeto?</h3>
<p>Não. Ele indica até onde a liga resiste à oxidação. A resistência mecânica, os ciclos térmicos e a atmosfera podem limitar o uso em temperaturas menores.</p>

<h3>Quando é preciso ir além dessas ligas?</h3>
<p>Quando há temperatura alta contínua, carga e ciclos severos. Nesses casos, as ligas fundidas resistentes ao calor da ASTM A297, como a HK e a HP, podem ser consideradas após a análise da condição de serviço.</p>

<h2>Fontes</h2>

<ul>
  <li>EN 10095: aços e ligas de níquel resistentes ao calor, usada como base de tabelas de temperatura.</li>
  <li>ASTM A351/A351M: peças fundidas de aço inoxidável austenítico (CF8, CF8M, CK20).</li>
  <li>ASTM A297/A297M: peças fundidas de aço resistente ao calor.</li>
  <li>Fichas técnicas de fornecedores de aço inoxidável, para valores de referência de temperatura.</li>
</ul>

<p><strong>Nota técnica:</strong> temperaturas de referência não substituem a análise das condições de serviço, do desenho e da norma aplicável ao projeto.</p>
`,
  },
];
