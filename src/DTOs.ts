import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const userSchema = z.object({
  id: z.string().describe('uuid v4'),
  name: z.string().describe('user name'),
});

export class UserDto extends createZodDto(userSchema) {}
