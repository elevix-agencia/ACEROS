// Conteúdo SEO complementar por setor. Renderizado server-side (sem depender de client components)
// para garantir que o Google indexe texto rico em cada landing de /atuacao/[slug].

export type SectorSeoContent = {
  intro: string;
  paragraphs: string[];
  keyPoints: string[];
};

export const sectorSeoContent: Record<string, SectorSeoContent> = {
  mineracao: {
    intro:
      'A Aceros fornece componentes centrifugados em aços inoxidáveis e superligas ASTM A297 para toda a cadeia de mineração e beneficiamento mineral: extração, britagem, peneiramento, transporte e pelotização. Nossas peças são projetadas para operar sob abrasão severa, impacto contínuo e ambientes corrosivos.',
    paragraphs: [
      'A indústria de mineração é um dos ambientes mais agressivos para componentes mecânicos. Britadores, peneiras, transportadores e carros de sinterização operam com abrasão constante de minérios, choques térmicos e exposição a agentes químicos. Os aços comuns falham rapidamente; por isso, nossas peças são fabricadas em ligas de alta liga fundidas por centrifugação, com microestrutura densa e livre de porosidades.',
      'Fornecemos rolos para deck de peneiramento a quente e a frio, com opção de revestimento em WC-carbonetos para resistência extrema ao desgaste. Também produzimos paredes laterais superiores e inferiores para carros de pelotização e sinterização, barras de grelha em ligas totalmente austeníticas, blindagens e placas de desgaste para altos-fornos Paul Wurth e Double Bell. Cada componente é dimensionado conforme a aplicação e o regime de operação.',
      'Para plantas menores, projetamos e fabricamos carros completos de pelotização e sinterização (estrutura, paredes laterais, barras de grelha, rodas). Nossas superligas suportam operação em temperaturas de até 1.100 °C, garantindo maior tempo entre paradas de manutenção e melhor produtividade da linha.',
    ],
    keyPoints: [
      'Rolos para deck de peneiramento com ou sem revestimento WC',
      'Carros completos de pelotização e sinterização para pequenas plantas',
      'Blindagens e placas de desgaste para altos-fornos Paul Wurth e Double Bell',
      'Barras de grelha em ligas 100% austeníticas',
      'Peneiras de rolos TPC e TDE para classificação de pellets',
      'Superligas resistentes a 1.100 °C',
    ],
  },
  naval: {
    intro:
      'A Aceros fornece peças fundidas por centrifugação e usinadas de precisão para a indústria naval: sistemas de propulsão, componentes de leme, buchas de eixo, hélices e toberas Kort. Trabalhamos conforme normas classificadoras internacionais e atendemos estaleiros, retrofits e manutenções embarcadas.',
    paragraphs: [
      'O ambiente marinho impõe desafios únicos: corrosão salina permanente, cargas dinâmicas variáveis, vibração de máquinas rotativas e necessidade de altíssima confiabilidade em componentes submersos. A Aceros desenvolve peças específicas para propulsão naval, incluindo hélices, componentes de eixo, buchas centrifugadas para linha de eixo e toberas Kort para embarcações que operam com máxima eficiência propulsiva.',
      'Nosso portfólio contempla também sistemas de governo (leme), componentes de ancoragem, guinchos navais e conjuntos estruturais complexos para navios-sonda e embarcações de apoio offshore. As peças passam por tratamento superficial de fosfato de manganês, aumentando a resistência ao desgaste, reduzindo o atrito e conferindo proteção adicional contra corrosão.',
      'Cada componente naval é validado por análise técnica detalhada, simulações estruturais e ensaios não destrutivos. Fornecemos peças com rastreabilidade completa, laudos metalúrgicos e certificações que atendem às sociedades classificadoras internacionais utilizadas no mercado brasileiro.',
    ],
    keyPoints: [
      'Toberas Kort completas: da fabricação à aplicação em navios-sonda',
      'Hélices e componentes de propulsão naval de alta eficiência',
      'Buchas de linha de eixo centrifugadas',
      'Sistemas de governo (leme) e ancoragem',
      'Tratamento superficial em fosfato de manganês',
      'Rastreabilidade total conforme sociedades classificadoras',
    ],
  },
  siderurgia: {
    intro:
      'A Aceros é parceira estratégica de siderúrgicas brasileiras e internacionais, fornecendo rolos de forno, sink rolls, furnace rolls e componentes centrifugados para lingotamento contínuo, laminação a quente, recozimento (CAPL/CGL) e galvanização por imersão a quente. Nossas peças suportam temperaturas extremas e ciclos térmicos severos.',
    paragraphs: [
      'A siderurgia opera com processos contínuos onde uma parada não programada custa milhões. Por isso, cada componente da linha precisa oferecer previsibilidade de vida útil e desempenho consistente. A Aceros fornece rolos para as principais estações do processo: mesa de transferência, mesa de saída, looper, tensioner, pinch rollers e wrappers. Trabalhamos com rolos mono-metálicos e bi-metálicos centrifugados, garantindo runout máximo de 0,3 mm por milhão de tonelada processada.',
      'Para linhas de recozimento (CAPL) e galvanização contínua (CGL), fornecemos tubos radiantes (tipos W, U, P simples e duplo) com recuperadores de calor, rolos de forno revestidos com tecnologia HVOF ou SUPER D-GUN, rolos escova (brush) e componentes acessórios. Para linhas de galvanização por imersão a quente (potes de zinco, zincalume e alumínio+Si), produzimos rolos de imersão, estabilizadores, braços, berços e bicos fundidos em peça única, com ligas C.I.S. totalmente livres de ferrita δ.',
      'Um dos nossos produtos mais reconhecidos é a bucha bi-metálica para ponta de sink roll, que oferece desempenho de 3 a 7 vezes maior que soluções tradicionais. Também produzimos rolos para fornos walking beam e componentes para fornos de barras, entrada e saída, com opções revestidas ou não conforme a necessidade do cliente.',
    ],
    keyPoints: [
      'Sink rolls e stabilizer rolls para linhas de galvanização',
      'Furnace rolls e tubos radiantes para linhas CAPL/CGL',
      'Rolos bi-metálicos com runout 0,3 mm/milhão ton',
      'Buchas para ponta de sink roll com vida 3-7× maior',
      'Rolos walking beam e para fornos de barras',
      'Ligas C.I.S. totalmente δ-ferrita free',
    ],
  },
  oleo_e_gas: {
    intro:
      'A Aceros produz componentes críticos para o setor de óleo e gás: corpos de válvulas de alta pressão, tubos para fornos de refinaria, flanges e conexões, peças customizadas para equipamentos submarinos. Todas as peças fabricadas em ligas especiais resistentes a corrosão, alta pressão e temperaturas extremas.',
    paragraphs: [
      'A cadeia de óleo e gás — da exploração ao refino — exige componentes que trabalham no limite: pressões acima de 10.000 psi, temperaturas variando de -50 °C a mais de 800 °C, ambientes com H2S, CO2 e cloretos. A escolha da liga correta e a integridade estrutural da peça são vitais. Fabricamos corpos e componentes internos de válvulas em ligas ASTM A297 e superduplex, garantindo controle de fluxo seguro em plataformas, refinarias e linhas subaquáticas.',
      'Nossos tubos centrifugados para fornos de refinaria (reformadores catalíticos, unidades de craqueamento, aquecedores de processo) atendem às normas API e ASTM. A microestrutura densa e livre de porosidade obtida pela centrifugação garante resistência à fluência em regime de operação contínua acima de 900 °C, requisito crítico em unidades de reforma a vapor e produção de hidrogênio.',
      'Também fornecemos flanges e conexões forjadas ou centrifugadas para sistemas de tubulação críticos, além de peças customizadas para exploração subsea. Trabalhamos em parceria com engenharias de projeto de refinarias e operadoras para desenvolver soluções sob medida com prazos compatíveis com paradas programadas e projetos brownfield.',
    ],
    keyPoints: [
      'Corpos de válvulas de alta pressão em ligas duplex e superduplex',
      'Tubos centrifugados para fornos de reforma catalítica',
      'Flanges e conexões conforme API e ASTM',
      'Peças customizadas para equipamentos subsea',
      'Resistência a H2S, CO2 e ambientes salinos (NACE)',
      'Fornecimento com rastreabilidade completa e laudos metalúrgicos',
    ],
  },
  guseira: {
    intro:
      'A Aceros fornece componentes de alto desempenho para a indústria guseira: staves (placas de resfriamento) para altos-fornos, ventaneiras (tuyeres), carcaças usinadas, colunas de reação serpentinas Glendons e peças estruturais para manuseio de ferro-gusa. Peças fabricadas para máxima produtividade e segurança operacional.',
    paragraphs: [
      'A siderurgia primária, que produz o ferro-gusa no alto-forno, é um dos ambientes mais extremos da indústria pesada. Temperaturas superiores a 2.000 °C na zona de combustão, ciclos térmicos agressivos, cargas mecânicas variáveis e ataque químico por escórias e gases fazem com que os componentes precisem ser projetados com máxima robustez. A Aceros fabrica staves (placas de resfriamento) essenciais para manter a integridade estrutural do alto-forno, usando ligas de alta condutividade térmica que dissipam calor de forma eficiente.',
      'Nossas ventaneiras (tuyeres) são projetadas para a injeção precisa de ar quente na zona de combustão, resistindo a temperaturas extremas e a agentes altamente agressivos. Trabalhamos com ligas fundidas por centrifugação que oferecem excelente combinação de resistência ao choque térmico e à corrosão a quente. Cada ventaneira é dimensionada conforme o alto-forno específico do cliente.',
      'Fornecemos ainda carcaças usinadas com tolerâncias rigorosas para proteção de componentes internos, colunas de reação serpentinas para sistemas Glendons e peças estruturais para o manuseio de gusa líquido. Todos os componentes são acompanhados por laudos metalúrgicos, ensaios não destrutivos e certificados de rastreabilidade.',
    ],
    keyPoints: [
      'Staves (placas de resfriamento) de alto-forno',
      'Ventaneiras (tuyeres) resistentes a temperaturas extremas',
      'Colunas de reação serpentinas para sistemas Glendons',
      'Carcaças usinadas com tolerâncias apertadas',
      'Peças estruturais para manuseio de ferro-gusa',
      'Ligas de alta condutividade térmica',
    ],
  },
  tratamento_termico: {
    intro:
      'A Aceros fabrica componentes centrifugados para fornos de tratamento térmico: rolos de forno (furnace rolls), grelhas para forno de poço, cestos e dispositivos que operam sob ciclos térmicos severos. Peças que suportam têmpera, revenimento, cementação, nitretação e recozimento.',
    paragraphs: [
      'O tratamento térmico é o processo que confere ao aço as propriedades mecânicas finais desejadas — dureza, tenacidade, resistência ao desgaste. Para isso, as peças precisam passar por fornos que operam em temperaturas controladas, muitas vezes acima de 1.100 °C, com atmosferas específicas. Os componentes internos desses fornos — rolos, grelhas, cestos, dispositivos de fixação — sofrem ciclos térmicos violentos que causam fluência, oxidação e deformação.',
      'A Aceros produz rolos de forno em ligas ASTM A297 (HK, HH, HP) que suportam operação contínua em altas temperaturas, com resistência à fluência e à carbonetação. Fabricamos grelhas para fornos de poço com geometria robusta, cestos para tratamento térmico em designs modulares que otimizam carga e fluxo de gás, e dispositivos customizados para linhas específicas de clientes.',
      'Trabalhamos tanto com plantas industriais de grande porte (siderúrgicas, autopeças, ferramentaria) quanto com prestadores de serviço de tratamento térmico. Nossa engenharia dimensiona cada componente conforme o forno, a atmosfera, o ciclo de operação e o histórico de falhas anteriores — buscando sempre estender a vida útil do conjunto.',
    ],
    keyPoints: [
      'Rolos de forno (furnace rolls) para tratamento térmico contínuo',
      'Grelhas para forno de poço em ligas HK, HH e HP',
      'Cestos modulares para tratamento térmico',
      'Dispositivos customizados por cliente',
      'Resistência à fluência acima de 1.100 °C',
      'Engenharia de projeto para maximizar vida útil',
    ],
  },
};
