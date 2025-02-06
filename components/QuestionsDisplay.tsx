import { Progress } from "./ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const QuestionsDisplay = () => {
  return (
    <section className="w-full grid place-content-center">
      <section className="w-full min-[840px]:w-[800px] min-[840px]:h-[500px] flex flex-col space-y-14 p-12">
      
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{1}/{10}</span>
        </div>
        <Progress value={10} className="h-2" />
      </div>
      
      <div className="space-y-12 ">
        <div className="space-y-1">
          <h1 className="text-2xl text-center font-bold tracking-tight text-muted-foreground">
          Você faz novos amigos com frequência.
          </h1>
        </div>

        <div className="pt-10 flex items-center gap-6">
          <span className="text-2xl font-semibold text-zinc-600">Concordo</span>
        <RadioGroup className="w-full flex justify-between">
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-12 w-12" value="1" id="r1" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-10 w-10" value="2" id="r2" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-8 w-8" value="3" id="r3" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-6 w-6" value="4" id="r4" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-8 w-8" value="5" id="r5" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-10 w-10" value="6" id="r6" />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem className="h-12 w-12" value="7" id="r7" />
          </div>
        </RadioGroup>
        <span className="text-2xl font-semibold text-zinc-600">Discordo</span>

        </div>
      </div>
    </section >
    </section>
  )
}