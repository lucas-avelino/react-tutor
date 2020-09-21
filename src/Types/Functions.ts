import { Step } from "./Step";
export type RegistryStep = (step: Step, sequence?: number) => void
export type RegistryStyle = (step: React.CSSProperties, name: string) => void