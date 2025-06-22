import { z } from 'zod';

export const candidateSchema = z.object({
    name: z
        .string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(100, "El nombre no puede exceder los 100 caracteres"),
    age: z
        .number()
        .min(0, "La edad debe ser un número positivo")
        .optional(),
    experience: z
        .number()
        .min(0, "La experiencia debe ser un número positivo"),
    status: z
        .enum(["Pending", "Reviewing", "Interviewed", "Hired", "Refused"], {
            errorMap: () => ({ message: "Estado inválido" }),
        }),
        skills: z
        .array(z.string()),
        working: z
        .boolean()
});

export type CandidateType = z.infer<typeof candidateSchema>;
