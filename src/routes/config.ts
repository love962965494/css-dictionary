import { ComponentClass } from "react"

// tslint:disable-next-line:no-var-requires 
const importComponent = require('./_import_' + process.env.NODE_ENV).default

export enum CSSReference {
  PSEUDOCLASS = 'Pseudo-class',
  PROPERTY    = 'Property',
  FUNCTION    = 'Function',
  DATATYPE    = 'Data Type',
  CONCEPT     = 'Concept',
  RULE        = '@rule'
}

type IEnumTpProp<R> = {
  [key in CSSReference]: R 
};

interface IItemProps {
  id: string
  title: string
  path: string
  component: ComponentClass
}

export interface ICSSSeriesProps {
  id: string,
  color: string,
  hoverColor: string,
  path: string,
  properties: IItemProps[]
}

const CSSConfig: IEnumTpProp<ICSSSeriesProps> = {
  // ------------------ 伪类属性 ------------------
  [CSSReference.PSEUDOCLASS]: {
    id: '01',
    color: 'rgb(227, 223, 240)',
    hoverColor: 'rgb(158, 145, 200)',
    path: '/app/pseudo-class',
    properties: [
      {
        id: '011',
        title: '::after',
        path: '/after',
        component: importComponent('Pseudo-class/After')
      },
      {
        id: '012',
        title: '::before',
        path: '/before',
        component: importComponent('Pseudo-class/Before')
      }
    ]
  },

  // ------------------ 常规属性 ------------------
  [CSSReference.PROPERTY]: {
    id: '02',
    color: 'rgb(245, 226, 226)',
    hoverColor: 'rgb(213, 141, 141)',
    path: '/app/property',
    properties: []
  },

  // ------------------ 属性方法 ------------------
  [CSSReference.FUNCTION]: {
    id: '03',
    color: 'rgb(245, 220, 185)',
    hoverColor: 'rgb(245, 195, 123)',
    path: '/app/function',
    properties: []
  },

  // ------------------ 单位类型 ------------------
  [CSSReference.DATATYPE]: {
    id: '04',
    color: 'rgb(212, 239, 215)',
    hoverColor: 'rgb(163, 208, 168)',
    path: '/app/data-type',
    properties: []
  },

  // ------------------ CSS常见概念 ------------------
  [CSSReference.CONCEPT]: {
    id: '05',
    color: 'rgb(242, 208, 218)',
    hoverColor: 'rgb(210, 112, 141)',
    path: '/app/concept',
    properties: []
  },

  // ------------------ CSS常见概念 ------------------
  [CSSReference.RULE]: {
    id: '06',
    color: 'rgb(245, 244, 217)',
    hoverColor: 'rgb(218, 215, 129)',
    path: '/app/rule',
    properties: []
  }
}

export default CSSConfig