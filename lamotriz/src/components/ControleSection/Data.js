import anfis1 from "../../static/docs/Projetos/images/anfis1.png"
import anfis2 from "../../static/docs/Projetos/images/anfis2.png"
import motores from "../../static/docs/Projetos/images/motores.png"
import perfil_carga from "../../static/docs/Projetos/images/perfil_carga.png"
import torque from "../../static/docs/Projetos/images/torque.png"
import bancada_observadores from "../../static/docs/Projetos/images/bancada_observadores.png"
import resultados_observadores from "../../static/docs/Projetos/images/resultados_observadores.png"

export const textoControle = {
    headline: "Automação Industrial",
    subtitle1: "As plantas do LAMOTRIZ foram idealizadas para que tenham aspecto industrial no que diz respeito ao acionamento da força motriz, que se dá através de inversor de frequência com entrada analógica externa. Dessa forma, torna-se possível ampliar os mecanismos de automação e controle das plantas industriais através de sistemas embarcados em placas microprocessadas. Assim, pode-se expandir para além dos CLPs, as possibilidades de acionamento e sensoriamento tornando possível o estudo de otimização dos sistemas de força motriz.",
}

export const dataControle = [
    {
        "id": 1,
        "titulo": "IDENTIFICAÇÃO E CONTROLE DE SISTEMAS NÃO LINEARES APLICANDO MÉTODOS INFERÊNCIA NEURO FUZZY ADAPTATIVO (ANFIS) E MODELO DE CONTROLE PREDITIVO (MPC)",
        "subtitle1": "Os sistemas não lineares que possuem modelos matemáticos complexos estão cada vez mais frequentes na industria. Com efeito, a identificação desses sistemas utilizando o modelo da caixa preta vem se tornando eficiente e prático, motivando o nosso estudo em encontrar soluções utilizando Machine Learning e Redes Neurais.",
        "subtitle2": "O método de Inferência Neuro Fuzzy Adaptativo (ANFIS) é a nossa principal linha de pesquisa para a identificação de qualquer sistema não linear. Outrossim, unimos a força do ANFIS com um modelo de controle preditivo (MPC) para validar a eficiência desse sistema de controle de sistemas não lineares.",
        "url": "/automacao_controle/1",
        "img1": anfis1,
        "img2": anfis2,
    },
    {
        "id": 2,
        "titulo": "CONTROLE DA MALHA DE TORQUE COM ACIONAMENTO DE VELOCIDADE APLICADO A UMA BANCADA EXPERIMENTAL PARA ENSAIO DE MOTORES",
        "subtitle1": "Neste trabalho estratégias de controle aplicadas à malha de torque de um motor de indução trifásico tendo a velocidade do motor como variável de controle. Dessa forma, pode-se analisar a viabilidade de se implementar o controle de torque de forma assíncrona em relação ao controle de velocidade e de corrente das malhas mais internas.",
        "subtitle2": "O Controle em cascata se deve pelo fato de se configurar o controle de corrente em um inversor industrial, enquanto aquele um algoritmo de controle (LQG ou RST) é implementado em um computador, conectado ao inversor através de uma placa de aquisição de dados (entradas e saídas analógicas). O principal propósito do estudo está na observação da resposta de torque a uma referência do tipo degrau, assim o desempenho dos controladores é destacado.",
        "url": "/automacao_controle/2",
        "img1": motores,
        "img2": torque,
    },
    {
        "id": 3,
        "titulo": "BANCADA DE TESTE DE MOTORES PARA EMULAÇÃO DE PERFIL DE CARGA",
        "subtitle1": "Estudos de mudanças de cargas em motores elétricos representam um tópico de estudo importante devido à aplicabilidade em sistemas industriais. Em relação a esse ponto, ajustar uma bancada de motores para este propósito a torna uma ferramenta versátil.",
        "subtitle2": "Para este propósito, no entanto, se faz necessário implementar uma estratégia de controle de torque para o motor de emulação de carga enquanto o motor em teste é deixado livre de qualquer controle. Nesse contexto, este trabalho investiga o controle de torque aplicado em computador, e cuja interação com um inversor industrial se dá através de placa de aquisição de dados, no âmbito da emulação de perfis de carga.",
        "url": "/automacao_controle/3",
        "img1": motores,
        "img2": perfil_carga,
    },
    {
        "id": 4,
        "titulo": "ESTUDO DE OBSERVADORES DE ESTADO COMBINADOS PARA ACIONAMENTO SENSORLESS DE MOTORES DE INDUÇÃO TRIFÁSICOS",
        "subtitle1": "O desempenho de um motor de indução trifásico passa naturalmente pela necessidade de se observar variáveis internas como fluxo magnético, a fim de se estimar as medidas de variáveis mecânicas. Essas estimativas são dadas por modelos matemáticos que relacionam medições de corrente e tensão com torque e velocidade. Nesse contexto, se faz necessário embarcar esses modelos matemáticos em sistemas microprocessados equipados com DSPs (Processadores Digitais de Sinais).",
        "subtitle2": "Este trabalho compara soluções combinadas de estimadores adaptativos com base em modelo de referência (MRAS), estimadores de modos deslizantes (SMO) e estimadores ótimos não-lineares baseados no Filtro de Kalman (EKF).",
        "url": "/automacao_controle/4",
        "img1": bancada_observadores,
        "img2": resultados_observadores,
    },
]

export const textoEficiencia = {
    headline: "Automação Industrial",
    subtitle1: "As plantas do LAMOTRIZ foram idealizadas para que tenham aspecto industrial no que diz respeito ao acionamento da força motriz, que se dá através de inversor de frequência com entrada analógica externa. Dessa forma, torna-se possível ampliar os mecanismos de automação e controle das plantas industriais através de sistemas embarcados em placas microprocessadas. Assim, pode-se expandir para além dos CLPs, as possibilidades de acionamento e sensoriamento tornando possível o estudo de otimização dos sistemas de força motriz.",
}

export const dataEficiencia = [
    {
        "id": 1,
        "titulo": "IDENTIFICAÇÃO E CONTROLE DE SISTEMAS NÃO LINEARES APLICANDO MÉTODOS INFERÊNCIA NEURO FUZZY ADAPTATIVO (ANFIS) E MODELO DE CONTROLE PREDITIVO (MPC)",
        "subtitle1": "Os sistemas não lineares que possuem modelos matemáticos complexos estão cada vez mais frequentes na industria. Com efeito, a identificação desses sistemas utilizando o modelo da caixa preta vem se tornando eficiente e prático, motivando o nosso estudo em encontrar soluções utilizando Machine Learning e Redes Neurais.",
        "subtitle2": "O método de Inferência Neuro Fuzzy Adaptativo (ANFIS) é a nossa principal linha de pesquisa para a identificação de qualquer sistema não linear. Outrossim, unimos a força do ANFIS com um modelo de controle preditivo (MPC) para validar a eficiência desse sistema de controle de sistemas não lineares.",
        "url": "/automacao_controle/1",
        "img1": anfis1,
        "img2": anfis2,
    },
    {
        "id": 2,
        "titulo": "CONTROLE DA MALHA DE TORQUE COM ACIONAMENTO DE VELOCIDADE APLICADO A UMA BANCADA EXPERIMENTAL PARA ENSAIO DE MOTORES",
        "subtitle1": "Neste trabalho estratégias de controle aplicadas à malha de torque de um motor de indução trifásico tendo a velocidade do motor como variável de controle. Dessa forma, pode-se analisar a viabilidade de se implementar o controle de torque de forma assíncrona em relação ao controle de velocidade e de corrente das malhas mais internas.",
        "subtitle2": "O Controle em cascata se deve pelo fato de se configurar o controle de corrente em um inversor industrial, enquanto aquele um algoritmo de controle (LQG ou RST) é implementado em um computador, conectado ao inversor através de uma placa de aquisição de dados (entradas e saídas analógicas). O principal propósito do estudo está na observação da resposta de torque a uma referência do tipo degrau, assim o desempenho dos controladores é destacado.",
        "url": "/automacao_controle/2",
        "img1": motores,
        "img2": torque,
    },
    {
        "id": 3,
        "titulo": "BANCADA DE TESTE DE MOTORES PARA EMULAÇÃO DE PERFIL DE CARGA",
        "subtitle1": "Estudos de mudanças de cargas em motores elétricos representam um tópico de estudo importante devido à aplicabilidade em sistemas industriais. Em relação a esse ponto, ajustar uma bancada de motores para este propósito a torna uma ferramenta versátil.",
        "subtitle2": "Para este propósito, no entanto, se faz necessário implementar uma estratégia de controle de torque para o motor de emulação de carga enquanto o motor em teste é deixado livre de qualquer controle. Nesse contexto, este trabalho investiga o controle de torque aplicado em computador, e cuja interação com um inversor industrial se dá através de placa de aquisição de dados, no âmbito da emulação de perfis de carga.",
        "url": "/automacao_controle/3",
        "img1": motores,
        "img2": perfil_carga,
    },
    {
        "id": 4,
        "titulo": "ESTUDO DE OBSERVADORES DE ESTADO COMBINADOS PARA ACIONAMENTO SENSORLESS DE MOTORES DE INDUÇÃO TRIFÁSICOS",
        "subtitle1": "O desempenho de um motor de indução trifásico passa naturalmente pela necessidade de se observar variáveis internas como fluxo magnético, a fim de se estimar as medidas de variáveis mecânicas. Essas estimativas são dadas por modelos matemáticos que relacionam medições de corrente e tensão com torque e velocidade. Nesse contexto, se faz necessário embarcar esses modelos matemáticos em sistemas microprocessados equipados com DSPs (Processadores Digitais de Sinais).",
        "subtitle2": "Este trabalho compara soluções combinadas de estimadores adaptativos com base em modelo de referência (MRAS), estimadores de modos deslizantes (SMO) e estimadores ótimos não-lineares baseados no Filtro de Kalman (EKF).",
        "url": "/automacao_controle/4",
        "img1": bancada_observadores,
        "img2": resultados_observadores,
    },
]