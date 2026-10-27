export type BlogPost = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: 'Processo' | 'Ligas' | 'Aplicações' | 'Engenharia';
  tempoLeitura: string;
  dataPublicacao: string;
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
    imagem: '/images/aceros/generated/blog-sink-roll-instalado-v2.webp',
    imagemAlt: 'Conjunto Sink Roll instalado em linha industrial de galvanização',
    keywords: ['sink roll', 'liga sink roll', 'galvanização', 'pote de zinco', 'ASTM A297'],
    conteudo: `
<p>O <strong>Sink Roll</strong> é um componente de linhas de galvanização por imersão a quente. Por trabalhar submerso no pote de zincagem e submetido a esforços mecânicos, sua especificação deve considerar o banho, a temperatura, a geometria do conjunto e o regime de operação.</p>

<h2>Os 3 critérios técnicos que definem a liga</h2>

<p>Antes de especificar um Sink Roll, o engenheiro de manutenção precisa avaliar:</p>

<ul>
  <li><strong>Composição e temperatura do banho</strong>: dados necessários para selecionar o material adequado.</li>
  <li><strong>Geometria e velocidade da linha</strong>: condições que influenciam o projeto do rolo e de suas pontas.</li>
  <li><strong>Histórico de operação</strong>: desgaste, manutenção e falhas anteriores ajudam a orientar a solução.</li>
</ul>

<h2>Componentes que formam o conjunto</h2>

<p>O catálogo Aceros apresenta Sink Rolls, buchas para a ponta do rolo, braços, Snout e conjuntos montados para zincagem. Cada item é fabricado conforme o desenho e a condição informada pelo cliente.</p>

<h3>Seleção da liga</h3>
<p>A escolha do material não deve ser feita por uma regra única. A engenharia considera temperatura, composição do banho, esforços, dimensões e histórico da aplicação antes de definir a liga.</p>

<h2>Como a Aceros fabrica</h2>

<p>A Aceros integra <strong>centrifugação</strong>, usinagem e controle técnico. Conforme o projeto, a verificação pode envolver análise química, dureza, ultrassom e inspeção dimensional.</p>

<p>Antes de recomendar a liga, nossa engenharia analisa o histórico da sua linha: composição do banho, velocidade, ciclos térmicos e histórico de falhas anteriores. É esse casamento fino que garante o melhor custo-benefício.</p>
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
    imagem: '/images/aceros/generated/blog-astm-a297-tubos-v2.webp',
    imagemAlt: 'Tubos centrifugados usinados para aplicações em ligas ASTM A297',
    keywords: ['ASTM A297', 'HK', 'HH', 'HP', 'aço fundido resistente ao calor'],
    conteudo: `
<p>A norma <strong>ASTM A297</strong> reúne classes de aços fundidos resistentes ao calor com diferentes teores de cromo e níquel. HH, HK e HP possuem faixas de composição e características próprias, que precisam ser avaliadas de acordo com o desenho, a temperatura, a atmosfera e o regime de operação.</p>

<h2>Diferenças de composição química</h2>

<ul>
  <li><strong>HH</strong>: 24-28% Cr, 11-14% Ni</li>
  <li><strong>HK</strong>: 24-28% Cr, 18-22% Ni</li>
  <li><strong>HP</strong>: 24-28% Cr, 33-37% Ni</li>
</ul>

<p>Todas contêm carbono na faixa de 0,20-0,60% (essencial para resistência à fluência), silício até 2,5% e teores controlados de manganês, enxofre e fósforo.</p>

<h2>Temperatura máxima de trabalho</h2>

<ul>
  <li><strong>HH</strong>: até 1.050 °C em atmosferas oxidantes</li>
  <li><strong>HK</strong>: até 1.150 °C</li>
  <li><strong>HP</strong>: até 1.150 °C com melhor resistência à fluência</li>
</ul>

<h2>Aplicações típicas</h2>

<h3>Gr. HH: Rolos de forno e grelhas</h3>
<p>Uso mais comum em rolos de forno de tratamento térmico contínuo (temperaturas até 1.050 °C), grelhas de fornos de poço e cestos de tratamento. Boa relação custo-benefício quando a temperatura não passa dos 1.050 °C.</p>

<h3>Gr. HK: Aplicações versáteis</h3>
<p>Uma das ligas mais utilizadas em componentes de fornos siderúrgicos, como sink rolls, snouts, tubos radiantes de tratamento térmico. Bom equilíbrio entre resistência à fluência, à oxidação e ao custo.</p>

<h3>Gr. HP: Reforma catalítica e petroquímica</h3>
<p>Padrão internacional para tubos de fornos de reforma catalítica (produção de hidrogênio, metanol, amônia). O alto teor de níquel garante estabilidade dimensional em ciclos térmicos severos e operação contínua acima de 900 °C. Frequentemente modificada com nióbio (HP-Nb) para melhorar ainda mais a resistência à fluência.</p>

<h2>Como a Aceros trabalha com essas ligas</h2>

<p>A Aceros avalia o grau da liga conforme a temperatura de trabalho, a atmosfera do forno, os ciclos térmicos e o histórico da aplicação. A especificação final deve constar no desenho e na documentação técnica do fornecimento.</p>

<p><strong>Nota técnica:</strong> os valores apresentados são referências gerais. A especificação final deve considerar a edição aplicável da norma, os requisitos do projeto e as condições reais de serviço.</p>
`,
  },
  {
    slug: 'fundicao-centrifugada-vantagens',
    titulo: 'Fundição centrifugada: vantagens e quando utilizar o processo',
    descricao:
      'Entenda como funciona a centrifugação, suas vantagens para peças tubulares e quando a fundição estática pode ser indicada.',
    categoria: 'Processo',
    tempoLeitura: '5 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/generated/blog-fundicao-centrifugada-v2.webp',
    imagemAlt: 'Vazamento de aço em máquina de fundição centrífuga horizontal',
    keywords: ['fundição centrifugada', 'centrifugação', 'força centrífuga', 'ASTM A297'],
    conteudo: `
<p>A <strong>fundição por centrifugação</strong> é um processo de fabricação em que o aço líquido é vazado em uma matriz de aço baixo carbono (coquilha) pré-aquecida e em rotação. A força centrífuga direciona o metal contra as paredes da matriz, formando peças tubulares com controle dos diâmetros interno e externo.</p>

<h2>Como funciona o processo</h2>

<p>Na Aceros, o aço é fundido em forno elétrico e chega à coquilha a temperaturas entre <strong>1.500 e 1.630 °C</strong>. A matriz gira em alta rotação, calculada especificamente para cada diâmetro e massa da peça, garantindo controle preciso da granulometria e da densidade do metal solidificado.</p>

<p>Depois do vazamento e resfriamento, a peça bruta passa por processos de beneficiamento térmico (solubilização e envelhecimento) para atingir as propriedades mecânicas finais.</p>

<h2>Vantagens da centrifugação</h2>

<h3>1. Estrutura densa</h3>
<p>A força centrífuga favorece a deposição do metal contra a parede interna da coquilha e a formação de uma estrutura densa. A integridade da peça é confirmada pelos controles e ensaios definidos para o projeto.</p>

<h3>2. Controle de concentricidade</h3>
<p>O processo é adequado à formação de peças tubulares com diâmetros interno e externo concêntricos. A usinagem posterior permite atingir as dimensões e tolerâncias indicadas no desenho.</p>

<h3>3. Parâmetros definidos para cada peça</h3>
<p>Rotação, diâmetro da coquilha, perímetro e massa do tubo são considerados no processo para controlar a formação da peça.</p>

<h3>4. Ideal para tubos e buchas</h3>
<p>A geometria tubular torna a centrifugação especialmente adequada à fabricação de tubos mecânicos, buchas e outros componentes cilíndricos avaliados pela engenharia.</p>

<h2>Quando a fundição estática pode ser indicada?</h2>

<p>A Aceros também trabalha com fundição estática em geometrias que não permitem centrifugação, como carcaças complexas, peças assimétricas e componentes com múltiplas seções. Ambos os processos coexistem na fábrica, e nossa engenharia especifica o mais adequado a cada projeto.</p>
`,
  },
  {
    slug: 'bucha-bimetalica-sink-roll',
    titulo: 'Buchas para Sink Roll: critérios de especificação e fabricação',
    descricao:
      'Entenda quais dados do conjunto e da linha devem ser avaliados na especificação de buchas para ponta de Sink Roll.',
    categoria: 'Aplicações',
    tempoLeitura: '5 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/generated/blog-buchas-centrifugadas-v2.webp',
    imagemAlt: 'Buchas centrifugadas de aço inox usinadas em diferentes diâmetros',
    keywords: ['bucha sink roll', 'ponta sink roll', 'galvanização', 'bucha centrifugada'],
    conteudo: `
<p>Nas linhas de galvanização por imersão a quente, a <strong>bucha da ponta do Sink Roll</strong> faz parte do conjunto que trabalha no pote de zincagem. Material, dimensões, acabamento e tolerâncias precisam ser definidos conforme o projeto e as condições reais de operação.</p>

<h2>O que deve ser informado para especificar a bucha?</h2>

<p>A análise técnica deve considerar, no mínimo:</p>

<ul>
  <li><strong>Desenho e dimensões</strong> da ponta, da bucha e dos componentes associados.</li>
  <li><strong>Condição de operação</strong>, incluindo banho, temperatura, carga e histórico de desgaste.</li>
  <li><strong>Material utilizado atualmente</strong> e registros de falha ou manutenção, quando disponíveis.</li>
</ul>

<h2>O que o fornecimento precisa garantir</h2>

<p>O objetivo é entregar uma bucha compatível com o conjunto e com a condição de serviço:</p>

<ul>
  <li>Dimensões e tolerâncias conforme desenho</li>
  <li>Material selecionado para a aplicação</li>
  <li>Usinagem e acabamento adequados à montagem</li>
  <li>Inspeções e documentação definidas no projeto</li>
</ul>

<h2>Aplicações típicas</h2>

<p>Buchas para Sink Roll são utilizadas principalmente em:</p>

<ul>
  <li>Ponta de Sink Roll (linhas de galvanização a quente)</li>
  <li>Conjuntos de Sink Roll em linhas de galvanização</li>
  <li>Aplicações industriais semelhantes, após avaliação da engenharia</li>
</ul>

<h2>Fabricação Aceros</h2>

<p>A Aceros fabrica buchas por <strong>centrifugação</strong> e realiza usinagem conforme desenho. O controle técnico pode incluir análise química, dureza, ultrassom e inspeção dimensional, de acordo com os requisitos do fornecimento.</p>
`,
  },
  {
    slug: 'ligas-304-316-310-alta-temperatura',
    titulo: 'Ligas 304, 316 e 310 para alta temperatura: qual escolher',
    descricao:
      'Comparativo técnico entre as três ligas de aço inox mais utilizadas em ambientes de alta temperatura. Composição, resistência e aplicações típicas.',
    categoria: 'Ligas',
    tempoLeitura: '5 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/generated/blog-ligas-inox-v2.webp',
    imagemAlt: 'Tubos centrifugados em etapas de acabamento bruto, usinado e polido',
    keywords: ['aço inox 304', 'aço inox 316', 'aço inox 310', 'alta temperatura'],
    conteudo: `
<p>Escolher entre as ligas <strong>304, 316 e 310</strong> é uma das decisões técnicas mais frequentes em projetos de engenharia industrial. Todas são aços inoxidáveis austeníticos, mas com composições diferentes e faixas de aplicação distintas. Este guia ajuda o engenheiro de projeto a especificar a liga certa desde o primeiro esboço.</p>

<h2>AISI 304 e 304L</h2>

<p>Composição: 18% Cromo + 8% Níquel. A liga inoxidável mais utilizada no mundo. Excelente resistência à corrosão em ambientes atmosféricos, químicos leves e alimentícios. Trabalha bem até <strong>~870 °C</strong> em serviço contínuo (mas com perda de propriedades mecânicas acima de 500 °C).</p>

<p>A versão L (baixo carbono) é indicada quando há necessidade de soldagem intensiva, pois evita sensitização (perda de resistência à corrosão intergranular).</p>

<p><strong>Aplicações típicas:</strong> equipamentos químicos leves, tanques alimentícios, estruturas arquitetônicas, tubulações de baixa pressão.</p>

<h2>AISI 316 e 316L</h2>

<p>Composição: 16% Cromo + 10% Níquel + <strong>2-3% Molibdênio</strong>. O molibdênio é o segredo: confere resistência excelente a cloretos, ambientes marítimos e químicos agressivos. Também trabalha até ~870 °C em contínuo.</p>

<p><strong>Aplicações típicas:</strong> equipamentos offshore, indústria petroquímica, sistemas de tratamento de água salobra, componentes farmacêuticos, tubulações químicas.</p>

<h2>AISI 310</h2>

<p>Composição: <strong>25% Cromo + 20% Níquel</strong>. Alto teor de ambos os elementos garante máxima resistência à oxidação e à fluência em altas temperaturas contínuas. Trabalha bem até <strong>~1.100 °C</strong>.</p>

<p><strong>Aplicações típicas:</strong> componentes internos de fornos de tratamento térmico, tubos radiantes, cestos de tratamento, grelhas de fornos siderúrgicos.</p>

<h2>Comparativo rápido</h2>

<ul>
  <li>Temperatura máxima em contínuo: <strong>304/316 até ~870 °C, 310 até ~1.100 °C</strong></li>
  <li>Resistência a cloretos: <strong>316 muito superior a 304 e 310</strong></li>
  <li>Resistência à fluência a alta temperatura: <strong>310 muito superior aos outros dois</strong></li>
  <li>Custo relativo: <strong>304 &lt; 316 &lt; 310</strong></li>
</ul>

<h2>Quando ir além dessas ligas</h2>

<p>Em condições de temperatura elevada ou com requisitos mais severos de fluência, classes da <strong>ASTM A297</strong> podem ser consideradas após a análise da temperatura de trabalho, da atmosfera, do desenho e do regime operacional.</p>

<p><strong>Nota técnica:</strong> temperaturas de referência não substituem a análise das condições de serviço, do desenho e da norma aplicável ao projeto.</p>
`,
  },
];
