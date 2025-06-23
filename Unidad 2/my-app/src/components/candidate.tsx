// File: my-app/src/components/candidate.tsx
import type { CandidateType } from "@/types/candidates";
import { cn } from '../utils/styles'; // Importamos la función cn

type CandidateProps = CandidateType & {
    className?: string;
    onClick: (name: string) => void;
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, status, skills, working, onClick } = props;

    // Clases condicionales para el borde y la sombra
    // const borderColorClass = working ? "border-green-400" : "border-red-400";
    // const shadowColorClass = working ? "shadow-lg hover:shadow-xl transition-shadow duration-300" : "shadow-md hover:shadow-lg transition-shadow duration-300";

    return (
        <div className={cn(
            // "border-2",
            // borderColorClass,
            // "p-6",
            // "m-4",
            // "rounded-xl",
            // "bg-white",
            // shadowColorClass,
            // "transform",
            // "hover:-translate-y-1",
            // "transition-all",
            // "duration-300",
            // "ease-in-out",
            // "w-full",
            // "sm:w-1/2",
            // "lg:w-1/4",
            // "flex-shrink-0"
            props.className,
            "border border-gray-300 shadow-md ",
            "flex-col rounded-lg p-4",
            "min-w-[200px]",
        )}
            onClick={() => onClick(name)}
        >
            <div className="flex items-center justify-between mb-2 gap-x-2">
                <h2 className="text-xl font-bold">{name?.toUpperCase() || "Jon Doe"}</h2>
                <span
                    className={cn(
                        "text-sm font-medium text-white",
                        "px-4 py-1 rounded-full",
                        getStatusColor(status),
                    )}>
                    {status.toUpperCase()}
                </span>
            </div>
            <p className="text-gray-500">Age: {age || 'N/A'} años</p>
            <p className="text-gray-500">Experience: {experience} años</p>
            <p className={cn(
                "text-gray-500",
                working ?
                    "text-green-600" : "text-red-600"
            )}>
                Working: {working ? "Yes ✅" : "No ❌"}
            </p>
            <h3 className="text-gray-500">Skills:</h3>
            <ol className="list-decimal list-inside text-gray-700">
                {skills.map((skill, index) => (
                    <span key={index} className="block ml-1">
                        {skill}
                    </span>
                ))}
            </ol>
            {/* <h2 className="text-2xl justify text-center font-extrabold text-gray-900 mb-3 border-b pb-2 border-gray-200">
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
                <span className={cn(
                    "font-bold",
                    "ml-1",
                    working ? "text-green-600" : "text-red-600"
                )}>
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
            )} */}
        </div>
    )
    function getStatusColor(status: CandidateType['status']) {
        if (status === 'Hired') {
            return 'bg-green-600';
        }
        if (status === 'Interviewing') {
            return 'bg-yellow-600 ';
        }
        if (status === 'Reviewing') {
            return 'bg-blue-600 ';
        }
        if (status === 'Pending') {
            return 'bg-gray-600 ';
        }
        return 'bg-red-600 ';
    }
}

export default Candidate;
