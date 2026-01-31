import {z} from "zod"

type FormSchemaData = z.infer<typeof formSchema>;

const formSchema = z.object({
    name: 
        z.string()
        .min(2,"Name too short")
        .max(100,"Name too long")
        .trim(),
    email:
        z.string().email({message: "PLease provide a valid email address"}).trim(),
    message:
      z.string().min(10,"Please provide more details about your project")
      .max(1500, "Message too long")
      .trim()
      .refine((val)=> !val.includes("<") && !val.includes(">"),{message: "Invalid characters in message"}),
    })

export default formSchema
export type {FormSchemaData};