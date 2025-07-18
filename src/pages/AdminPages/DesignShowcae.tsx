import { CircleQuestionMark } from "lucide-react";
import Button from "../../components/Button";

export default function DesignShowcase() {
    return (
        <div className="h-full w-full flex-col">
            <div className="flex gap-4 w-full h-auto border">
                <div className="flex flex-col w-1/2 h-auto p-4 gap-4">
                    <Button type={"submit"} 
                            size={"icon"} 
                            color={"primary"} 
                            loading={false} 
                            className={""}>
                                <CircleQuestionMark />
                    </Button>
                    <Button type={"submit"} 
                            size={"sm"} 
                            color={"primary"} 
                            loading={false} 
                            className={""}>
                                Button
                    </Button>
                    <Button type={"submit"} 
                            size={"md"} 
                            color={"primary"} 
                            loading={false} 
                            className={""}>
                                Button
                    </Button>
                    <Button type={"submit"} 
                            size={"lg"} 
                            color={"primary"} 
                            loading={false} 
                            className={""}>
                                Button
                    </Button>
                    <Button type={"submit"} 
                            size={"full"} 
                            color={"primary"} 
                            loading={false} 
                            className={""}>
                                Button
                    </Button>
                </div>
                <div className="flex w-1/2 h-auto p-4 gap-4">
                    <div className="flex flex-col gap-4">
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"primary"} 
                                loading={false} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"secondary"} 
                                loading={false} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"success"} 
                                loading={false} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"danger"} 
                                loading={false} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"outline"} 
                                loading={false} 
                                className={""}>
                                    Button
                        </Button>
                    </div>
                    <div className="grow flex flex-col gap-4">
                        <Button type={"submit"} 
                                size={"icon"} 
                                color={"primary"} 
                                loading={true} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"sm"} 
                                color={"secondary"} 
                                loading={true} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"md"} 
                                color={"success"} 
                                loading={true} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"lg"} 
                                color={"danger"} 
                                loading={true} 
                                className={""}>
                                    Button
                        </Button>
                        <Button type={"submit"} 
                                size={"full"} 
                                color={"outline"} 
                                loading={true} 
                                className={""}>
                                    Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}