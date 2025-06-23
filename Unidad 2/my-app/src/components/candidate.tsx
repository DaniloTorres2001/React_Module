// File: my-app/src/components/candidate.tsx
import type { CandidateType } from "@/types/candidates";
import { cn } from '../utils/styles'; // Importamos la función cn

type CandidateProps = CandidateType & {
    className?: string;
    onClick: (name: string) => void;
};

const Candidate = (props: CandidateProps) => {
    const { name, age, experience, status, skills, working, onClick } = props;

    // Función para copiar los datos del candidato al portapapeles
    const handleCopyData = async () => {
        const candidateData = `
            Name: ${name || "Jon Doe"}
            Age: ${age || 'N/A'} años
            Experience: ${experience} años
            Status: ${status.toUpperCase()}
            Working: ${working ? "Yes ✅" : "No ❌"}
            Habilidades: ${skills.join(', ')}
        `.trim();
        try {
            await navigator.clipboard.writeText(candidateData);
            alert(`¡Datos de ${name || "este candidato"} copiados exitosamente!`);
        } catch (err) {
            console.error('Error al copiar al portapapeles:', err);
            alert('No se pudieron copiar los datos. Por favor, inténtalo de nuevo.');
        }
    };


    // Clases condicionales para el borde y la sombra
    const borderColorClass = working ? "border-green-400" : "border-red-400";
    const shadowColorClass = working ? "shadow-lg hover:shadow-xl transition-shadow duration-300" : "shadow-md hover:shadow-lg transition-shadow duration-300";

    return (
        <div className={cn(
            props.className,
            "border border-gray-300 shadow-md ",
            "flex-col rounded-lg p-4",
            "min-w-[200px]",
            "border-2",
            borderColorClass,
            "p-6",
            "m-4",
            "rounded-xl",
            "bg-white",
            shadowColorClass,
            "transform",
            "hover:-translate-y-1",
            "transition-all",
            "duration-300",
            "ease-in-out",
            "w-full",
            "sm:w-1/2",
            "lg:w-1/4",
            "flex-shrink-0"
        )}
            onClick={() => onClick(name)}
        >
            <div className="flex items-center justify-between mb-2 gap-x-2">
                <h2 className={cn(
                    "text-2xl",
                    "justify text-center ",
                    "font-extrabold",
                    "text-gray-900",
                    "mb-3",
                    "border-b",
                    "pb-2",
                    "border-gray-200"
                )}>
                    {name?.toUpperCase() || "Jon Doe"}
                </h2>
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
            {/* Botón para copiar datos */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleCopyData();
                }}
                className={cn(
                    "mt-4",
                    "w-full",
                    "bg-blue-500",
                    "hover:bg-blue-600",
                    "text-white",
                    "font-bold",
                    "py-2 px-4",
                    "rounded-md",
                    "transition-colors duration-200"
                )}>
            
                Copiar datos
            </button>
        </div>
    )
    function getStatusColor(status: CandidateType['status']) {
        if (status === 'Hired') {
            return 'bg-green-600 hover:bg-green-700 ';
        }
        if (status === 'Interviewing') {
            return 'bg-yellow-600 hover:bg-yellow-700 ';
        }
        if (status === 'Reviewing') {
            return 'bg-blue-600 hover:bg-blue-700 ';
        }
        if (status === 'Pending') {
            return 'bg-gray-600 hover:bg-gray-700 ';
        }
        return 'bg-red-600 ';
    }
}

export default Candidate;
