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
    imagem: '/images/aceros/generated/blog-sink-roll-instalado-v2.webp',
    imagemAlt: 'Conjunto Sink Roll instalado em linha industrial de galvanização',
    keywords: ['sink roll', 'liga sink roll', 'galvanização', 'pote de zinco', 'ASTM A297'],
    conteudo: `
<p>O <strong>Sink Roll</strong> é um componente de linhas de galvanização por imersão a quente. Por trabalhar submerso no pote de zincagem e submetido a esforços mecânicos, sua especificação deve considerar o banho, a temperatura, a geometria do conjunto e o regime de operação.</p>

<h2>Os 3 critérios técnicos que definem a liga</h2>

<p>Antes de especificar um Sink Roll, o engenheiro de manutenção precisa avaliar:</p>

<ul>
  <li><strong>Composição e temperatura do banho</strong> — dados necessários para selecionar o material adequado.</li>
  <li><strong>Geometria e velocidade da linha</strong> — condições que influenciam o projeto do rolo e de suas pontas.</li>
  <li><strong>Histórico de operação</strong> — desgaste, manutenção e falhas anteriores ajudam a orientar a solução.</li>
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
    titulo: 'ASTM A297: HK, HH e HP — qual usar em cada aplicação',
    descricao:
      'As três principais superligas resistentes ao calor da norma ASTM A297 explicadas. Composição, propriedades mecânicas e aplicações típicas de HK, HH e HP.',
    categoria: 'Ligas',
    tempoLeitura: '7 min',
    dataPublicacao: '2026-08-24',
    imagem: '/images/aceros/generated/blog-astm-a297-tubos-v2.webp',
    imagemAlt: 'Tubos centrifugados usinados para aplicações em ligas ASTM A297',
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

<p>A Aceros avalia o grau da liga conforme a temperatura de trabalho, a atmosfera do forno, os ciclos térmicos e o histórico da aplicação. A especificação final deve constar no desenho e na documentação técnica do fornecimento.</p>
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

<h2>Quando ainda usamos fundição estática?</h2>

<p>A Aceros também trabalha com fundição estática em geometrias que não permitem centrifugação — como carcaças complexas, peças assimétricas e componentes com múltiplas seções. Ambos os processos coexistem na fábrica, e nossa engenharia especifica o mais adequado a cada projeto.</p>
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
