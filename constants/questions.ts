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

export const personalityDescriptions: Record<string, string> = {
  ESTJ: "Você é organizado, prático e gosta de liderança. Toma decisões baseadas na lógica e na eficiência.",
  ESTP: "Você é enérgico, adaptável e adora desafios. Age rápido e confia na experiência para resolver problemas.",
  ESFJ: "Você é sociável, leal e gosta de ajudar os outros. Valoriza harmonia e mantém boas relações interpessoais.",
  ESFP: "Você é divertido, espontâneo e vive o momento. Gosta de interagir e trazer alegria para os outros.",
  ENTJ: "Você é estratégico, determinado e gosta de liderar. Consegue ver o panorama geral e tomar decisões eficazes.",
  ENTP: "Você é curioso, inovador e adora debates. Gosta de explorar novas ideias e desafiar o status quo.",
  ENFJ: "Você é carismático, inspirador e se preocupa com o bem-estar dos outros. Motiva pessoas ao seu redor.",
  ENFP: "Você é criativo, entusiasmado e cheio de energia. Sempre busca novas possibilidades e experiências.",
  ISTJ: "Você é responsável, confiável e segue regras. Prefere organização e estabilidade no dia a dia.",
  ISTP: "Você é independente, prático e gosta de resolver problemas de forma lógica. Adapta-se bem a novas situações.",
  ISFJ: "Você é cuidadoso, protetor e dedicado às pessoas. Valoriza tradição e estabilidade nas relações.",
  ISFP: "Você é sensível, artístico e gosta de expressar emoções. Vive no presente e valoriza a liberdade pessoal.",
  INTJ: "Você é analítico, determinado e tem visão de longo prazo. Gosta de planejamento e estratégia.",
  INTP: "Você é lógico, inovador e questionador. Adora explorar ideias complexas e resolver problemas abstratos.",
  INFJ: "Você é profundo, intuitivo e se preocupa com o impacto das suas ações. Tem uma visão clara do futuro.",
  INFP: "Você é idealista, criativo e busca significado nas coisas. Gosta de ajudar os outros e seguir seus valores.",
}
