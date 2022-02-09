// Definindo fontes:
pdfMake.fonts = {
  Times: {
    normal: 'times-new-roman-14.ttf',
    bold: 'times-new-roman-bold.otf',
    italics: 'times-new-roman-italic.ttf',
    bolditalics: 'times-new-roman-bold-italic.ttf'
  },
  Calibri: {
    normal: 'calibri.ttf',
    bold: 'calibri-bold.ttf',
    italics: 'calibri-italic.ttf',
    bolditalics: 'calibri-bold-italic.ttf'
  }
};

var PDFContrato = {
  content: [
    {
        image: "logoAldaBrito.png", width: 240,
        alignment: "center",
        margin: [0, 25, 0, 0],
    },
    {
      text: "CONTRATO DE LOCAÇÂO RESIDENCIAL:",
      alignment: "center",
      bold: true,
    },
    {
      text: ("LOCADOR: (A) AURENI JESUS DE SOUZA, BRASILEIRA, CASADA, AUTÔNOMA, PORTADORA DO RG N°:" + 
        "25947126-40 - SSP/BA E CPF Nº: 552081935-15, RESIDENTE À RUA: MANOEL BENTO TEIXEIRA FILHO, Nº: " + 
        "374, SEABRA-BA."),
      margin: [0, 10, 0, 0],
    },
    {
      text: ("LOCATÁRIO: (A) CONSORCIO BARRAGEM BARAUNAS, REGISTRADO NO CNPJ: 43.788.516/0001- 55, "+
        "LOCALIZADO: ROD BR 230 KM 468, N°: 1, DISTRITO INDUSTRIAL, SOUSA, PB, CEP: 58.800-970."),
      margin: [0, 10, 0, 0],
    },
    {
      text: ("VENCIMENTO: DIA 05 DE CADA MÊS \n" + 
             "INÍCIO: 10/12/2021                                                    TÉRMINO: 10/12/2022 \n" +
             "VALOR MENSAL DA LOCAÇÃO: R$: 650,00 (SEISCENTOS E CINQUENTA REAIS)"),
      margin: [0, 10, 0, 0],
      bold: true,
    },
    {
      text: "PRIMEIRA CLAUSULA",
      margin: [0, 10, 0, 0],
      bold: true,
    },
    {
      text: "Constitui objeto do presente Contrato a locação do imóvel residencial, "+
      "localizado nesta Cidade, na Rua: Manoel Bento Teixeira Filho, Nº:374, Bairro; "+
      "Arthur Alves (MERCADÃO) Seabra-Ba. Locador (a) é o legítimo dono do imóvel, "+
      "dando em locação ao locatário para fins exclusivamente residencial. " + 
      "Findo o acordo o locatário se obriga a restituir o imóvel livre e desocupado, "+
      "em condições idênticas à que recebeu, ressalvando o desgaste natural do imóvel.",
    },
    {
      text: "PRIMEIRO: Findo o prazo estipulado no caput desta Cláusula, operar-se-á o "+
      "término da avença somente através de notificação por escrito do locador.",
      margin: [0, 10, 0, 0],
    },
    {
      text: "SEGUNDO: A LOCATÁRIA juntamente com A LOCADORA, declara que vistoriarão o imóvel deste "+
      "Contrato, registrando suas reais condições por meio de fotografias, as quais seguem em "+
      "anexo, passando a compor o presente contrato. Vistoria inicial, essa, que servirá como "+
      "base comparativa na vistoria final, que ocorrerá no momento da entrega do imóvel, onde "+
      "serão identificados possíveis danos e / ou alterações no imóvel.",
    },
    {
      text: "CLÁUSULA TERCEIRA",
      margin: [0, 10, 0, 0],
      bold: true,
    },
    {
      text: "O aluguel mensal fica estipulado em R$: 650,00 (SEISCENTOS E CINQUENTA REAIS) "+
      "devendo ser pago até o 5° dia após o vencimento – AO LOCADOR (A) O valor locativo será "+
      "reajustado anualmente, de acordo com a variação acumulada do IGP-M/FGV. Na ausência deste "+
      "índice será eleito outro legalmente previsto, conforme prévia convenção das partes.",
    },
    {
      text: "PRIMEIRO– Sobre o aluguel pago após o respectivo vencimento, fica obrigado a pagar"+
      " multa de 10% (dez por cento) sobre o valor do aluguel estipulado neste contrato, bem como"+
      " juros de mora de 1% (um por cento) ao mês, mais correção monetária.",
    },
    {
      text: "CLÁUSULA QUARTA",
      margin: [0, 10, 0, 0],
      bold: true,
    },
    {
      text: "Fica vedada a sublocação do imóvel ou a cessão dos direitos decorrentes"+
      " deste instrumento a terceiros, mesmo que parcial ou temporária, seja a que título for, por parte"+
      " da LOCATARIA, sem a anuência, por escrito, do Locador.",
    },
    {
      text: "CLÁUSULA QUINTA",
      margin: [0, 10, 0, 0],
      bold: true,
    },
    {
      text: "Além do aluguel mensal, incumbirá A LOCATÁRIA o pagamento de todas as despesas e tributos "+
      "incidentes sobre o imóvel, como, por exemplo, taxas de energia elétrica, água.",
    },
    {
      text: "PRIMEIRO – Os encargos da locação, especificados no caput desta cláusula, são de inteira"+
      " responsabilidade da LOCATÁRIA, que se obriga a pagá-los em seus respectivos vencimentos, devendo"+
      " comprová-los Administradora sempre que solicitado, e, em especial, quando do encerramento do Contrato.",
    },
    {
      text: "SEGUNDO – A LOCATÁRIA obriga-se a manter as dependências locadas em boas condições de "+
      "higiene e limpeza, dentro das normas legais pertinentes."
    },
    {
      text: "CLÁUSULA SEXTA",
      margin: [0, 20, 0, 0],
      bold: true,
    },
    {
      text: "Nenhuma obra, modificação ou instalação, seja de qualquer natureza for poderá ser feita "+
      "no imóvel sem o consentimento por escrito do LOCADOR.",
    },
    {
      text: "A LOCATÁRIA terá direito à indenização por benfeitorias necessárias e úteis, valendo-se, "+
      "sobre tais benfeitorias, o direito de retenção, desde que as benfeitorias úteis tenham sido "+
      "consentidas e autorizadas pelo LOCADOR."
    },
    {
      text: "CLÁUSULA SÉTIMA",
      margin: [0, 20, 0, 0],
      bold: true,
    },
    {
      text: "A parte que infringir qualquer cláusula deste Contrato pagará à outra multa pecuniária "+
      "correspondente ao valor de dois aluguéis vigentes na data da infração. A multa será sempre paga "+
      "por inteiro, atualizada, independentemente do tempo decorrido do Contrato."
    },
    {
      text: "CLÁUSULA OITAVA",
      margin: [0, 20, 0, 0],
      bold: true,
    },
    {
      text: "O LOCADOR fica a vistoriar o imóvel, objeto da locação, desde que agende antecipadamente"+
      " tal visita com ALOCATÁRIA, de forma a não causar constrangimentos ou perturbações a este."
    },
    {
      text: "A LOCATARIA não poderá infringir as normas de vizinhanças, levando em consideração a não "+
      "perturbação do sossego alheio, respeitando, desta forma, horários e bons costumes."
    }



  ],

  defaultStyle: {
    font: "Times",
  }
}

pdfMake.createPdf(PDFContrato).open()