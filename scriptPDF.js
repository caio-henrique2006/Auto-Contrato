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

/*
  LocadoraNome, Nacionalidade, Trabalho, Estado civil
  RG, CPF, Endereço, Alda;
  LocatarioNome, Nacionalidade, Estado civil, RG,
  CPF, Residência;
  Finalidade, Vencimento, Início, Término, Valor Mensal
  da Locação;
  
  ids: 
  nomeLocador
  nomeLocatario
  enderecoLocador
  endereçoLocatario
  civilLocador
  civilLocatario
  CPFLocador
  CPFLocatario
  RGLocador
  RGLocatario
  nacionalidadeLocador
  nacionalidadeLocatario
  trabalhoLocador
  trabalhoLocatario
  valorRs
  valorPorExtenso
  dataInicio
  dataTermino
  OBS
*/
submit.onclick = function() {

  // variáveis strings:
  var nomeLocador = document.getElementById("nomeLocador").value.toUpperCase();
  var nomeLocatario = document.getElementById("nomeLocatario").value.toUpperCase();

  var enderecoLocador = document.getElementById("enderecoLocador").value.toUpperCase();
  var enderecoLocatario = document.getElementById("enderecoLocatario").value.toUpperCase();
  var enderecoImovel = document.getElementById("enderecoImovel").value.toUpperCase();

  var civilLocador = document.getElementById("civilLocador").value.toUpperCase();
  var civilLocatario = document.getElementById("civilLocatario").value.toUpperCase();

  var CPFLocador = document.getElementById("CPFLocador").value.toUpperCase();
  var CPFLocatario = document.getElementById("CPFLocatario").value.toUpperCase();

  var RGLocador = document.getElementById("RGLocador").value.toUpperCase();
  var RGLocatario = document.getElementById("RGLocatario").value.toUpperCase();

  var nacionalidadeLocador = document.getElementById("nacionalidadeLocador").value.toUpperCase();
  var nacionalidadeLocatario = document.getElementById("nacionalidadeLocatario").value.toUpperCase();

  var trabalhoLocador = document.getElementById("trabalhoLocador").value.toUpperCase();
  var trabalhoLocatario = document.getElementById("trabalhoLocatario").value.toUpperCase();

  var dataInicio = document.getElementById("dataInicio").value.toUpperCase();
  var dataTermino = document.getElementById("dataTermino").value.toUpperCase();
  var prazoLocacao = document.getElementById("prazoLocacao").value.toUpperCase();

  var valorRs = document.getElementById("valorRs").value.toUpperCase();
  var valorPorExtenso = document.getElementById("valorPorExtenso").value.toUpperCase();

  var OBS = document.getElementById("OBS").value.toUpperCase();

  // Variáveis Booleanas:
  if(document.getElementById("representadoSIM").selected){
    var representado = "REPRESENTADO PELA CORRETORA DE IMOVEIS: ALDA BRITO, REGISTRADA NO CRECI: 15108";
    aldaBrito = "ALDA MARIA ALVES DE BRITO";
  } else {
    var representado = "";
    aldaBrito = nomeLocador;
  }


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
        margin: [0, 0, 0, 15],
      },

      {
        text: "LOCADOR(A): "+nomeLocador+", "+nacionalidadeLocador+", "+trabalhoLocador+", "+civilLocador+
        ", PORTADOR(A) DO RG Nº:"+RGLocador+", E CPF Nº:"+CPFLocador+" RESIDENTE E DOMICILIADA À RUA: "+enderecoLocador+" "+
        ""+representado+".",
        bold: true,
      },
      
      // Estilo Geral:
      {
        text: "\nLOCATÁRIO(A): "+nomeLocatario+", "+nacionalidadeLocatario+", PORTADOR(A) DO RG: "+RGLocatario+", E CPF: "+
        " "+CPFLocatario+", RESIDENTE EM "+enderecoLocatario+".",
        bold: true,
      },

      {
        text: ("FINALIDADE: RESIDENCIAL\n" +
               "VENCIMENTO: 30 DE CADA MÊS \n" + 
               "INÍCIO: "+dataInicio+"                                                TÉRMINO: "+dataTermino+" \n" +
               "VALOR MENSAL DA LOCAÇÃO: R$"+valorRs+""),
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "PRIMEIRA CLAUSULA",
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "Constitui objeto do presente Contrato a locação do imóvel residencial localizado nesta "+
        "Cidade, na RUA: "+enderecoImovel+", cujo locador é o legítimo dono do "+
        "imóvel, dando-o em locação ao locatário para fins exclusivamente residenciais.",
      },
      {
        text: "\nCLÁUSULA SEGUNDA",
        bold: true,
      },
      {
        text: "O prazo de locação é de "+prazoLocacao+", com termo inicial em "+dataInicio+" e termo final "+
        "em "+dataTermino+", por ambas as parte com "+prazoLocacao+", data em que o locatário se obriga a "+
        "restituir o imóvel livre e desocupado, em condições idênticas à que recebeu, ressalvando o "+
        "desgaste natural do imóvel."
      },
      {text: [
          {
            text: "PRIMEIRO - ",
            bold: true,
          },

          {
            text: "Findo o prazo estipulado no caput desta Cláusula, operar-se-á o "+
            "término da avença somente através de notificação por escrito do (a) locador (a).",
          }

        ],
        margin: [0, 10, 0, 0],
      },

      {text: [
        {
          text: "SEGUNDO - ",
          bold: true,
        },
        {
          text: "O(A) LOCATÁRIO(A) juntamente com O(A) LOCADOR(A), declara que vistoriarão o imóvel deste "+
          "Contrato, registrando suas reais condições por meio de fotografias, as quais seguem em "+
          "anexo, passando a compor o presente contrato. Vistoria inicial, essa, que servirá como "+
          "base comparativa na vistoria final, que ocorrerá no momento da entrega do imóvel, onde "+
          "serão identificados possíveis danos e / ou alterações no imóvel.",
        }

        ],
        margin: [0, 10, 0, 0],
      },

      {
        text: "CLÁUSULA TERCEIRA",
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "O aluguel mensal ficara estipulado em R$: "+valorRs+", devendo ser pago até o 5º dia útil"+
        " após o vencimento, AG:3542 CONTA:00977-6 (ALDA MARIA ALVES DE BRITO PINTO) BRADESCO."
      },
      {text: [
      { 
        text: "\nPRIMEIRO – ",
        bold: true
      },
      {
        text: "O valor locativo será reajustado anualmente, de acordo com a variação acumulada do "+
        "IGP-M/FGV. Na ausência deste índice será eleito outro legalmente previsto, conforme prévia "+
        "convenção das partes."
      },
      ]},
      {
        text: [
          {
            text: "\nTERCEIRO – ",
            bold: true,
          },
          {
            text: "Sobre o aluguel pago após o respectivo vencimento, fica obrigado a pagar multa de 10% "+
            "(dez por cento) sobre o valor do aluguel estipulado neste contrato, bem como juros de "+
            "mora de 1%(um por cento) ao mês, mais correção monetária"
          }
        ]
      },
      {
        text: "CLÁUSULA QUARTA",
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "Fica vedada a sublocação do imóvel ou a cessão dos direitos decorrentes"+
        " deste instrumento a terceiros, mesmo que parcial ou temporária, seja a que título for, por parte"+
        " da (a) LOCATARIO(A), sem a anuência, por escrito, do Locador (a).",
      },
      {
        text: "CLÁUSULA QUINTA",
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "Além do aluguel mensal, incumbirá O(A) LOCATÁRIO(A) o pagamento de todas as despesas e tributos "+
        "incidentes sobre o imóvel, como, por exemplo, taxas de energia elétrica, água.",
      },
      {text: [
      {
        text: "\nPRIMEIRO ",
        bold: true
      },
      {
        text: "- Os encargos da locação, especificados no caput desta cláusula, são de inteira"+
        " responsabilidade do (a) LOCATÁRIO(A), que se obriga a pagá-los em seus respectivos vencimentos, devendo"+
        " comprová-los Administradora sempre que solicitado, e, em especial, quando do encerramento do Contrato.",
      },
      ]},
      {text: [
      {
        text: "\nSEGUNDO ",
        bold: true
      },
      {
        text: "- O(A) LOCATÁRIO(A) obriga-se a manter as dependências locadas em boas condições de "+
        "higiene e limpeza, dentro das normas legais pertinentes."
      },
      ]},
      {
        text: "CLÁUSULA SEXTA",
        margin: [0, 20, 0, 0],
        bold: true,
      },
      {
        text: "Nenhuma obra, modificação ou instalação, seja de qualquer natureza for poderá ser feita "+
        "no imóvel sem o consentimento por escrito do (a) LOCADOR(A).",
      },
      {
        text: "O(A) LOCATÁRIO(A) terá direito à indenização por benfeitorias necessárias e úteis, valendo-se, "+
        "sobre tais benfeitorias, o direito de retenção, desde que as benfeitorias úteis tenham sido "+
        "consentidas e autorizadas pelo LOCADOR(A)."
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
        text: "O(A) LOCADOR(A) fica a vistoriar o imóvel, objeto da locação, desde que agende antecipadamente"+
        " tal visita com O(A) LOCATÁRIO(A), de forma a não causar constrangimentos ou perturbações a este."
      },
      {
        text: "CLÁUSULA NONA",
        bold: true,
        margin: [0, 10, 0, 0],
      },
      {
        text: "O(A) LOCATARIO(A) não poderá infringir as normas de vizinhanças, levando em consideração "+
        "a não perturbação do sossego alheio, respeitando, desta forma, horários e bons costumes."
      },
      {
        text: "CLÁUSULA DÉCIMA PRIMEIRA",
        bold: true, 
        margin: [0, 10, 0, 0],
      },
      {
        text: "Havendo interesse do Locatário (a), ao término do prazo contratual, devolver ao "+
        "Locador (a) o referido imóvel, deverá notificar, por escrito e com antecedência mínima "+
        "de 30 (trinta) dias, sobre tal decisão, sob pena de se obrigar a pagar mais 30 (trinta) "+
        "dias de aluguel reajustado a contar da data da entrega das respectivas chaves."
      },
      {text: [
      {
        text: "\nPRIMEIRA ",
        bold: true
      },
      {
        text: "- Quando da Devolução das chaves o (a) Locatário (a), deverão ser apresentados "+
        "todos os recibos pagos durante todo período da Locação.",
      },
      ]},
      {text: [
      {
        text: "\nQUARTO ",
        bold: true
      },
      {
        text: "- Efetuada a vistoria no Imóvel e constadas irregularidades de responsabilidade "+
        "do Locatário (a), ficará este (a) responsável pela reparação, ocorrendo os aluguéis ainda por "+
        "sua conta até efetiva assinatura do Termo de Quitação, quando do término dos consertos.",
      },
      ]},
      {
        text: "CLÁUSULA DÉCIMA SEGUNDA",
        margin: [0, 10, 0, 0],
        bold: true,
      },
      {
        text: "Fica eleito o Foro da comarca de SEABRA- BA - dirimir eventuais controvérsias oriundas "+
        "deste Contrato, com renúncia a qualquer outro, por mais privilegiado que seja. E por estarem, "+
        "assim, justas e contratadas, as partes assinam o presente instrumento particular em duas vias "+
        "de igual teor, na presença de duas testemunhas, a tudo presentes e que de tudo dão fé.",
      },
      {
        text: OBS,
        margin: [0, 10, 0, 0],
      },
      {
        canvas: [ { type: 'rect', x: 0, y: 0, w: 220, h: 0} ],
        margin: [0, 25, 0, 0],
      },
      {
        text: "LOCADOR: "+aldaBrito+"",
        margin: [0, 0, 0, 0],
      },
      {
        canvas: [ { type: 'rect', x: 0, y: 0, w: 220, h: 0} ],
        margin: [0, 15, 0, 0],
      },
      {
        text: "LOCATÁRIO: "+nomeLocatario+"",
        margin: [0, 0, 0, 0],
      },
      {
        text: "\n1ª TESTEMUNHA: ______________________________2ª:_____________________________"
      }
    ],

    defaultStyle: {
      font: "Times",
      fontSize: 11,
    }
  }

  pdfMake.createPdf(PDFContrato).open()
}