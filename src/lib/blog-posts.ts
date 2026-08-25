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

export const blogPosts: BlogPost[] = [
  {
    slug: 'sink-roll-como-escolher-liga',
    titulo: 'Sink Roll: como escolher a liga certa para sua linha de galvanização',
    descricao:
      'Guia técnico para engenheiros de compras: entenda os critérios de seleção da liga do Sink Roll conforme temperatura, ambiente químico e produtividade da linha de galvanização.',
    categoria: 'Aplicações',
    tempoLeitura: '6 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/tubos/tubo-aco-inox-polido-aceros-05.jpg',
    imagemAlt: 'Sink Roll centrifugado Aceros — aço inox usinado e polido',
    keywords: ['sink roll', 'liga sink roll', 'galvanização', 'pote de zinco', 'ASTM A297'],
    conteudo: `
<p>O <strong>Sink Roll</strong> é um dos componentes mais críticos de uma linha de galvanização por imersão a quente. Ele opera submerso em um pote de zinco fundido a temperaturas de 450 a 480 °C, com constante ataque químico do zinco e cargas mecânicas cíclicas. A escolha incorreta da liga pode reduzir drasticamente a vida útil do rolo — de 90 dias esperados para apenas 20-30, resultando em paradas não programadas e perdas de produção.</p>

<h2>Os 3 critérios técnicos que definem a liga</h2>

<p>Antes de especificar um Sink Roll, o engenheiro de manutenção precisa avaliar:</p>

<ul>
  <li><strong>Temperatura do banho</strong> — zinco puro (450 °C), Zincalume (600 °C) ou alumínio + silício (660 °C).</li>
  <li><strong>Velocidade da linha</strong> — quanto maior, mais crítica a resistência à abrasão do zinco fundido nas laterais do rolo.</li>
  <li><strong>Frequência de troca de bobina</strong> — impacta ciclos térmicos e desgaste mecânico das pontas.</li>
</ul>

<h2>Ligas mais utilizadas para Sink Roll</h2>

<p>Na prática do mercado brasileiro e internacional, três famílias de ligas são utilizadas:</p>

<h3>Ligas ASTM A297 Gr. HH e HK</h3>
<p>Ligas fundidas centrifugadas com alto teor de cromo e níquel. Resistência à corrosão pelo zinco fundido é boa, mas em banhos com maior teor de alumínio (Zincalume) a vida útil pode ser reduzida.</p>

<h3>Ligas C.I.S. livres de δ-ferrita</h3>
<p>Desenvolvidas especificamente para potes de galvanização. A ausência de δ-ferrita elimina pontos de ataque preferencial pelo zinco fundido, aumentando significativamente a vida útil comparada às ligas convencionais.</p>

<h3>Buchas bi-metálicas para as pontas</h3>
<p>A ponta do Sink Roll (munhão) é a região que mais sofre — combinação de temperatura, carga mecânica e desgaste no acoplamento. Buchas bi-metálicas centrifugadas, com camada externa dura e núcleo mais tenaz, entregam <strong>3 a 7 vezes mais vida útil</strong> que soluções mono-metálicas.</p>

<h2>Como a Aceros fabrica</h2>

<p>Todos os Sink Rolls e buchas de sink roll da Aceros são fundidos por <strong>centrifugação</strong> em ligas da norma ASTM A297, seguidos por usinagem CNC de precisão e beneficiamento térmico (solubilização e envelhecimento). Cada peça sai da fábrica com análise química, ensaio de dureza e laudo de ultrassom.</p>

<p>Antes de recomendar a liga, nossa engenharia analisa o histórico da sua linha: composição do banho, velocidade, ciclos térmicos e histórico de falhas anteriores. É esse casamento fino que garante o melhor custo-benefício.</p>
`,
  },
  {
    slug: 'astm-a297-hk-hh-hp-diferencas',
    titulo: 'ASTM A297: HK, HH e HP — qual usar em cada aplicação',
    descricao:
      'As três principais superligas resistentes ao calor da norma ASTM A297 explicadas. Composição, propriedades mecânicas e aplicações típicas de HK, HH e HP.',
    categoria: 'Ligas',
    tempoLeitura: '7 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/tubos/tubo-aco-inox-usinado-aceros-03.jpg',
    imagemAlt: 'Tubo de aço inox ASTM A297 usinado — Aceros',
    keywords: ['ASTM A297', 'HK', 'HH', 'HP', 'liga refrataria', 'superliga'],
    conteudo: `
<p>A norma <strong>ASTM A297</strong> padroniza aços fundidos resistentes ao calor com alto teor de cromo e níquel. As três ligas mais utilizadas no mercado industrial brasileiro são HK, HH e HP, cada uma com composição química e propriedades mecânicas específicas. Escolher a errada compromete a vida útil da peça e a segurança operacional.</p>

<h2>Diferenças de composição química</h2>

<ul>
  <li><strong>HH</strong> — 24-28% Cr, 11-14% Ni</li>
  <li><strong>HK</strong> — 24-28% Cr, 18-22% Ni</li>
  <li><strong>HP</strong> — 24-28% Cr, 33-37% Ni</li>
</ul>

<p>Todas contêm carbono na faixa de 0,20-0,60% (essencial para resistência à fluência), silício até 2,5% e teores controlados de manganês, enxofre e fósforo.</p>

<h2>Temperatura máxima de trabalho</h2>

<ul>
  <li><strong>HH</strong> — até 1.050 °C em atmosferas oxidantes</li>
  <li><strong>HK</strong> — até 1.150 °C</li>
  <li><strong>HP</strong> — até 1.150 °C com melhor resistência à fluência</li>
</ul>

<h2>Aplicações típicas</h2>

<h3>Gr. HH — Rolos de forno e grelhas</h3>
<p>Uso mais comum em rolos de forno de tratamento térmico contínuo (temperaturas até 1.050 °C), grelhas de fornos de poço e cestos de tratamento. Boa relação custo-benefício quando a temperatura não passa dos 1.050 °C.</p>

<h3>Gr. HK — Aplicações versáteis</h3>
<p>Uma das ligas mais utilizadas em componentes de fornos siderúrgicos — sink rolls, snouts, tubos radiantes de tratamento térmico. Bom equilíbrio entre resistência à fluência, à oxidação e ao custo.</p>

<h3>Gr. HP — Reforma catalítica e petroquímica</h3>
<p>Padrão internacional para tubos de fornos de reforma catalítica (produção de hidrogênio, metanol, amônia). O alto teor de níquel garante estabilidade dimensional em ciclos térmicos severos e operação contínua acima de 900 °C. Frequentemente modificada com nióbio (HP-Nb) para melhorar ainda mais a resistência à fluência.</p>

<h2>Como a Aceros trabalha com essas ligas</h2>

<p>A Aceros fabrica peças em <strong>todas as três grades</strong> (HH, HK, HP) por centrifugação, com controle químico realizado durante a fusão pelo Spectromax. Nossa engenharia auxilia na seleção da liga com base em temperatura de trabalho, atmosfera do forno, ciclos térmicos e histórico da aplicação.</p>
`,
  },
  {
    slug: 'fundicao-centrifugada-vantagens',
    titulo: 'Fundição Centrifugada: por que é superior à fundição estática',
    descricao:
      'Entenda o processo de centrifugação de aço, como funciona a força centrífuga na formação da peça e as vantagens em relação à fundição estática convencional.',
    categoria: 'Processo',
    tempoLeitura: '5 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/tubos/tubo-aco-inox-bruto-aceros-01.jpg',
    imagemAlt: 'Tubos centrifugados brutos — Aceros',
    keywords: ['fundição centrifugada', 'centrifugação', 'força centrífuga', 'ASTM A297'],
    conteudo: `
<p>A <strong>fundição por centrifugação</strong> é um processo de fabricação em que o aço líquido é vazado em uma matriz de aço baixo carbono (coquilha) pré-aquecida e em rotação. A força centrífuga expulsa o metal contra as paredes da matriz, formando peças tubulares com diâmetros interno e externo perfeitamente concêntricos.</p>

<h2>Como funciona o processo</h2>

<p>Na Aceros, o aço é fundido em forno elétrico e chega à coquilha a temperaturas entre <strong>1.500 e 1.630 °C</strong>. A matriz gira em alta rotação, calculada especificamente para cada diâmetro e massa da peça, garantindo controle preciso da granulometria e da densidade do metal solidificado.</p>

<p>Depois do vazamento e resfriamento, a peça bruta passa por processos de beneficiamento térmico (solubilização e envelhecimento) para atingir as propriedades mecânicas finais.</p>

<h2>Vantagens da centrifugação</h2>

<h3>1. Microestrutura densa e sem porosidade</h3>
<p>A força centrífuga elimina bolhas, inclusões não metálicas e vazios internos — problemas comuns em fundições estáticas convencionais. O resultado é uma peça com resistência mecânica superior e integridade estrutural garantida.</p>

<h3>2. Concentricidade perfeita</h3>
<p>Os diâmetros interno e externo são perfeitamente concêntricos, dispensando etapas adicionais de usinagem para correção. Isso reduz custo e prazo de fabricação para peças tubulares.</p>

<h3>3. Melhor aproveitamento da liga</h3>
<p>O sistema de vazamento centrifugado produz menos sucata que a fundição estática, permitindo controle mais rigoroso da composição química e melhor rendimento da matéria-prima.</p>

<h3>4. Ideal para tubos e buchas</h3>
<p>Toda a geometria naturalmente tubular do processo torna a centrifugação a escolha padrão do mercado para tubos, buchas, anéis e coletores — componentes centrais em siderurgia, petroquímica e tratamento térmico.</p>

<h2>Quando ainda usamos fundição estática?</h2>

<p>A Aceros também trabalha com fundição estática em geometrias que não permitem centrifugação — como carcaças complexas, peças assimétricas e componentes com múltiplas seções. Ambos os processos coexistem na fábrica, e nossa engenharia especifica o mais adequado a cada projeto.</p>
`,
  },
  {
    slug: 'bucha-bimetalica-sink-roll',
    titulo: 'Bucha bimetálica para Sink Roll: por que dura 3 a 7 vezes mais',
    descricao:
      'A engenharia por trás das buchas bimetálicas centrifugadas: camada externa dura e núcleo tenaz explicam vida útil superior nas pontas de Sink Roll.',
    categoria: 'Aplicações',
    tempoLeitura: '5 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/buchas/bucha-aco-inox-aceros-02.jpg',
    imagemAlt: 'Bucha bi-metálica de aço inox — Aceros',
    keywords: ['bucha bimetálica', 'bucha sink roll', 'ponta sink roll', 'galvanização'],
    conteudo: `
<p>Nas linhas de galvanização por imersão a quente, a <strong>ponta do Sink Roll</strong> (munhão) é a região que mais sofre desgaste. Combinação de alta temperatura, ataque químico do zinco fundido e carga mecânica cíclica reduz drasticamente a vida útil de buchas convencionais. A resposta técnica é a <strong>bucha bimetálica centrifugada</strong>.</p>

<h2>O que é uma bucha bimetálica?</h2>

<p>É uma bucha fundida por centrifugação com <strong>duas camadas de ligas diferentes</strong>:</p>

<ul>
  <li><strong>Camada externa</strong> (superfície de contato) — liga de alta dureza, projetada para resistir à abrasão do zinco fundido e ao desgaste mecânico do acoplamento.</li>
  <li><strong>Camada interna</strong> (núcleo) — liga mais tenaz, absorve impactos e cargas cíclicas sem quebrar.</li>
</ul>

<p>Essa combinação é possível apenas pelo processo de centrifugação, que permite depositar diferentes ligas em sequência dentro da mesma matriz.</p>

<h2>Ganho real de vida útil</h2>

<p>Comparado a buchas mono-metálicas convencionais, a bucha bimetálica entrega:</p>

<ul>
  <li><strong>3 a 7 vezes mais vida útil</strong> em serviço contínuo</li>
  <li>Redução significativa de paradas para troca</li>
  <li>Melhor previsibilidade de manutenção</li>
  <li>Menor custo total ao longo do ciclo de vida do equipamento</li>
</ul>

<h2>Aplicações típicas</h2>

<p>Buchas bimetálicas são utilizadas principalmente em:</p>

<ul>
  <li>Ponta de Sink Roll (linhas de galvanização a quente)</li>
  <li>Ponta de Furnace Roll (rolos de forno de tratamento térmico)</li>
  <li>Rolos de pote (Pot Rolls) em Zincalume e Alumínio+Si</li>
  <li>Mancais de rolos de estabilização em linhas contínuas</li>
</ul>

<h2>Fabricação Aceros</h2>

<p>Todas as buchas bimetálicas da Aceros são <strong>centrifugadas em duas etapas</strong>, com cada camada tendo composição química controlada pelo Spectromax durante a fusão. Após o vazamento, cada peça passa por usinagem CNC de precisão, ensaio de dureza, análise química completa e inspeção por ultrassom.</p>
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
    imagem: '/images/aceros/tubos/tubo-aco-inox-polido-aceros-01.jpg',
    imagemAlt: 'Tubos de aço inox em várias ligas — Aceros',
    keywords: ['aço inox 304', 'aço inox 316', 'aço inox 310', 'alta temperatura'],
    conteudo: `
<p>Escolher entre as ligas <strong>304, 316 e 310</strong> é uma das decisões técnicas mais frequentes em projetos de engenharia industrial. Todas são aços inoxidáveis austeníticos, mas com composições diferentes e faixas de aplicação distintas. Este guia ajuda o engenheiro de projeto a especificar a liga certa desde o primeiro esboço.</p>

<h2>AISI 304 e 304L</h2>

<p>Composição: 18% Cromo + 8% Níquel. A liga inoxidável mais utilizada no mundo. Excelente resistência à corrosão em ambientes atmosféricos, químicos leves e alimentícios. Trabalha bem até <strong>~870 °C</strong> em serviço contínuo (mas com perda de propriedades mecânicas acima de 500 °C).</p>

<p>A versão L (baixo carbono) é indicada quando há necessidade de soldagem intensiva, pois evita sensitização (perda de resistência à corrosão intergranular).</p>

<p><strong>Aplicações típicas:</strong> equipamentos químicos leves, tanques alimentícios, estruturas arquitetônicas, tubulações de baixa pressão.</p>

<h2>AISI 316 e 316L</h2>

<p>Composição: 16% Cromo + 10% Níquel + <strong>2-3% Molibdênio</strong>. O molibdênio é o segredo — confere resistência excelente a cloretos, ambientes marítimos e químicos agressivos. Também trabalha até ~870 °C em contínuo.</p>

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

<p>Para temperaturas contínuas acima de 1.100 °C ou requisitos mais severos de fluência, as ligas <strong>ASTM A297 (HH, HK, HP)</strong> são a escolha correta. Nossa engenharia auxilia na especificação da liga ideal com base em temperatura de trabalho, ambiente químico e regime operacional.</p>
`,
  },
];
