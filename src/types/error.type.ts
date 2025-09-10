export type TyeType = "validation" | "auth" | "network" | "other"


export type ErrorContextType = {
    error: string | null
    setError?: React.Dispatch<React.SetStateAction<string | null>>
    tip?: string | null
    setTip?: React.Dispatch<React.SetStateAction<string | null>>
    type?: TyeType
    setType?: React.Dispatch<React.SetStateAction<TyeType>>
}