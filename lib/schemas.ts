import z from "zod";

export const identifyFormSchema = z.object({
    name: z.string().min(3, 'Mínimo 3 letras plis').max(30, 'Máx 30 letras, no te chifles').toLowerCase(),
})