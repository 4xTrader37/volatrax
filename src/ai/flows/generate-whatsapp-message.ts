'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating pre-filled WhatsApp messages
 *  based on the course the user is interested in.
 *
 * - generateWhatsAppMessage - A function that generates a pre-filled WhatsApp message.
 * - GenerateWhatsAppMessageInput - The input type for the generateWhatsAppMessage function.
 * - GenerateWhatsAppMessageOutput - The return type for the generateWhatsAppMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWhatsAppMessageInputSchema = z.object({
  courseTitle: z
    .string()
    .describe('The title of the course the user is interested in.'),
});
export type GenerateWhatsAppMessageInput = z.infer<
  typeof GenerateWhatsAppMessageInputSchema
>;

const GenerateWhatsAppMessageOutputSchema = z.object({
  prefilledMessage: z
    .string()
    .describe('The pre-filled WhatsApp message to send.'),
});
export type GenerateWhatsAppMessageOutput = z.infer<
  typeof GenerateWhatsAppMessageOutputSchema
>;

export async function generateWhatsAppMessage(
  input: GenerateWhatsAppMessageInput
): Promise<GenerateWhatsAppMessageOutput> {
  return generateWhatsAppMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWhatsAppMessagePrompt',
  input: {schema: GenerateWhatsAppMessageInputSchema},
  output: {schema: GenerateWhatsAppMessageOutputSchema},
  prompt: `You are an AI assistant that generates pre-filled WhatsApp messages for users who are interested in a specific course.

  The user is interested in the following course:
  Course Title: {{{courseTitle}}}

  Generate a pre-filled WhatsApp message that includes the course title and a general inquiry about the course. The message should be friendly and inviting.
  The message should start with "I am interested in the course titled".
  The message should end with "I would like to know more about the course.".
  The message must not include the recipient's phone number.

  Here's an example of a pre-filled WhatsApp message:
  "I am interested in the course titled [Course Title]. I would like to know more about the course."

  Return ONLY the pre-filled WhatsApp message.  Do not return any extra text.
  `,
});

const generateWhatsAppMessageFlow = ai.defineFlow(
  {
    name: 'generateWhatsAppMessageFlow',
    inputSchema: GenerateWhatsAppMessageInputSchema,
    outputSchema: GenerateWhatsAppMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
