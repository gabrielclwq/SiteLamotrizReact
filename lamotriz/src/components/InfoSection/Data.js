import lab_img from "../../images/lab_img.png"
import control_img from "../../images/control_img.svg"
import eficiencia_img from "../../images/eficiencia_img.svg"
import publicacoes_img from "../../images/publicacoes_img.svg"
import logo from "../../images/logo-lamotriz.png"

export const homeObjOne = {
    id: 'quem_somos',
    to: "/quem_somos",
    isExternal: false,
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    headline: 'LAMOTRIZ',
    description: 'O Laboratório de Sistemas Motrizes do Departamento de Engenharia Elétrica da Universidade Federal do Ceará, inaugurado em março de 2006. Temos foco em simulações e ensaios de cargas industriais, analisando o comportamento destas cargas em face de técnicas de automação e controle e eficiência energética.',
    buttonLabel: 'Saiba mais',
    imgStart: false,
    img: logo,
    alt: 'quem_somos',
    darkBg: true,
    darkText: true
};

export const homeObjTwo = {
    id: 'automacao',
    to: "/automacao_controle",
    isExternal: false,
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    headline: 'Automação e Controle',
    description: '',
    buttonLabel: 'Saiba mais',
    imgStart: true,
    img: control_img,
    alt: 'automacao',
    darkBg: true,
    darkText: true
};

export const homeObjThree = {
    id: 'eficiencia',
    to: "/eficiencia_energetica",
    isExternal: false,
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    headline: 'Eficiência Energética',
    description: '',
    buttonLabel: 'Saiba mais',
    imgStart: false,
    img: eficiencia_img,
    alt: 'eficiencia',
    darkBg: true,
    darkText: true
};

export const homeObjFour = {
    id: 'publicacoes',
    isExternal: false,
    to: "/publicacoes",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    headline: 'Publicações',
    description: '',
    buttonLabel: 'Saiba mais',
    imgStart: true,
    img: publicacoes_img,
    alt: 'publicacoes',
    darkBg: true,
    darkText: true
};

