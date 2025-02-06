export const likertOptions = [
  { label: "Discordo totalmente", value: 1 },
  { label: "Discordo", value: 2 },
  { label: "Discordo parcialmente", value: 3 },
  { label: "Neutro", value: 4 },
  { label: "Concordo parcialmente", value: 5 },
  { label: "Concordo", value: 6 },
  { label: "Concordo totalmente", value: 7 },
]

export const questions = [
  {
    id: 1,
    text: "Eu me sinto energizado ao estar em grandes grupos de pessoas.",
    dimension: "EI",
    direction: "E", // Concordar indica Extroversão
  },
  {
    id: 2,
    text: "Prefiro passar tempo sozinho para recarregar minhas energias.",
    dimension: "EI",
    direction: "I", // Concordar indica Introversão (note que a lógica inverte o sinal)
  },
  {
    id: 3,
    text: "Eu costumo confiar mais em fatos e dados do que em intuições.",
    dimension: "SN",
    direction: "S", // Concordar favorece Sensação
  },
  {
    id: 4,
    text: "Eu confio mais em minhas intuições do que em dados concretos.",
    dimension: "SN",
    direction: "N", // Concordar favorece Intuição
  },
  {
    id: 5,
    text: "Ao tomar decisões, eu priorizo a lógica e a objetividade.",
    dimension: "TF",
    direction: "T", // Concordar favorece Pensamento
  },
  {
    id: 6,
    text: "Eu valorizo mais os sentimentos e valores pessoais ao tomar decisões.",
    dimension: "TF",
    direction: "F", // Concordar favorece Sentimento
  },
  {
    id: 7,
    text: "Gosto de planejar minhas atividades e seguir um cronograma definido.",
    dimension: "JP",
    direction: "J", // Concordar favorece Julgamento
  },
  {
    id: 8,
    text: "Prefiro ser espontâneo e manter minhas opções em aberto.",
    dimension: "JP",
    direction: "P", // Concordar favorece Percepção
  },
]