import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no mínimo 3 caracteres' }),
  description: z.string(),
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm<CreateRoomFormData>() {
  const CreateRoomForm = useForm({
    resolver: zodResolver(createRoomSchema),
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntas e receber respotas
          da I.A.
        </CardDescription>
        <CardContent>
          <form className="flex flex-col gap-4" />
        </CardContent>
      </CardHeader>
    </Card>
  )
}
