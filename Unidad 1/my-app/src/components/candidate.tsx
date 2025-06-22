// File: my-app/src/components/candidate.tsx
import type { CandidateType } from "@/types/candidates";

type CandidateProps = CandidateType & {
    children: React.ReactNode;
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, skills, working } = props;

    // Sombra Basado en el Estado de Trabajo
    const borderColorClass = working ? "border-green-400" : "border-red-400";
    const shadowColorClass = working ? "shadow-lg hover:shadow-xl transition-shadow duration-300" : "shadow-md hover:shadow-lg transition-shadow duration-300";


    return (
        <div className={`
            border-2 ${borderColorClass} p-6 m-4 rounded-xl bg-white
            ${shadowColorClass}
            transform hover:-translate-y-1 transition-all duration-300 ease-in-out
            w-full sm:w-1/2 lg:w-1/4  flex-shrink-0
        `}>
            <h2 className="text-2xl justif text-center font-extrabold text-gray-900 mb-3 border-b pb-2 border-gray-200">
                {name?.toUpperCase() || "Jon Doe"}
            </h2>
            <p className="text-gray-700 text-base mb-1">
                <span className="font-semibold text-gray-800">Edad:</span> {age || 'N/A'} años
            </p>
            <p className="text-gray-700 text-base mb-1">
                <span className="font-semibold text-gray-800">Experiencia:</span> {experience} años
            </p>
            <p className="text-gray-700 text-base mb-1">
                <span className="font-semibold text-gray-800">Estado:</span> {props.status}
            </p>
            <p className="text-gray-700 text-base mb-1">
                <span className="font-semibold text-gray-800">Habilidades:</span>
                <span className="text-blue-600 font-medium ml-1">{skills.join(", ")}</span>
            </p>
            <p className="text-gray-700 text-base mb-3">
                <span className="font-semibold text-gray-800">Trabajando:</span>
                <span className={`font-bold ml-1 ${working ? "text-green-600" : "text-red-600"}`}>
                    {working ? "Sí ✅" : "No ❌"}
                </span>
            </p>
            <p className="text-gray-700 text-sm italic border-t pt-2 border-gray-200">
                Número aleatorio: <span className="font-medium text-gray-600">{randomNumber()}</span>
            </p>
            {props.children && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                    {props.children}
                </div>
            )}
        </div>
    )
    function randomNumber() {
        return Math.floor(Math.random() * 100);
    }
}
export default Candidate;

