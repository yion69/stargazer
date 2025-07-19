import { CircleQuestionMark } from "lucide-react";
import Button, { type ButtonColor, type ButtonSize } from "../../components/Button";
import TextField, { type TextFieldType } from "../../components/TextField";
import clsx from "clsx";

export default function DesignShowcase() {

    const Button_Size_Test:ButtonSize[] = [
        "icon","sm", "md", "lg", "full",
    ]
    const Button_Color_Test:ButtonColor[] = [
        'primary', 'secondary', 'success', 'danger', 'outline'
    ]

    const TextField_Size_Test = [
        'max-w-1/4', 'max-w-2/4', 'max-w-3/4', 'max-w-full'
    ]
    const TextField_Type_Test:TextFieldType[] = [
        'text', 'password'
    ]

    return (
        <div className="h-auto w-full flex flex-col p-4 gap-10">
            <div className="flex gap-4 w-full h-auto">
                <div className="flex flex-col w-1/2 h-auto gap-4">
                {
                    Button_Size_Test.map((e,i) => (
                        <Button key={ i }
                                type="button"
                                size={ e } 
                                color={"primary"} 
                                loading={false}>
                                    { e == 'icon' ? <CircleQuestionMark /> : "Button" }
                        </Button>
                    ))
                }
                </div>
                <div className="flex w-1/2 h-auto gap-4">
                    <div className="flex flex-col gap-4">
                    {
                        Button_Color_Test.map((e,i) => (
                            <Button key={ i }
                                    type={"submit"} 
                                    size={"md"} 
                                    color={ e } 
                                    loading={false} 
                                    className={""}>
                                        Button
                            </Button>
                        ))
                    }
                    </div>
                    <div className="grow flex flex-col gap-4">
                    {
                        Button_Color_Test.map((e,i) => (
                            <Button key={ i } 
                                    type={"submit"} 
                                    size={ "md" } 
                                    color={ e } 
                                    loading={true} 
                                    className={""}>
                                        Button
                            </Button>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className="flex w-full h-auto gap-4">
                <div className="flex flex-col gap-4 w-1/2 h-auto">
                {
                    TextField_Size_Test.map((e,i) => (
                        <TextField  key={ i }
                                    type={"text"} 
                                    title={"input"} 
                                    placeholder="Input"
                                    className={ clsx( "font-mono", e) } />
                    ))
                }
                </div>
                <div className="flex flex-col gap-4 w-1/2 h-auto">
                {
                    TextField_Type_Test.map((e,i) => (
                        <TextField  key={ i }
                                    type={ e } 
                                    title={"input"} 
                                    placeholder={ e } 
                                    className={ clsx( "font-mono") } />
                    ))
                }
                        <TextField  type={ 'text' } 
                                    title={"input"} 
                                    disabled
                                    placeholder={ "Disabled" } 
                                    className={ clsx( "font-mono") } />
                        <TextField  type={ 'password' } 
                                    title={"input"} 
                                    disabled
                                    placeholder={ "Disabled" } 
                                    className={ clsx( "font-mono") } />
                </div>
            </div>
        </div>
    )
}