'use client';

import { useForm } from 'react-hook-form';

import { useAuth } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserIcon, EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';

const schema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(5, 'A senha precisa ter no mínimo 8 caracteres')
});

type DataForm = z.infer<typeof schema>;

export const SignIn = () => {
  const { handleClickSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataForm>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  });

  return (
    <div className="flex flex-col px-5 py-5 bg-slate-300">
      <form
        onSubmit={handleSubmit((data) => handleClickSignIn(data))}
        className="flex flex-col gap-4"
      >
        <InputGroup.Root>
          <InputGroup.Icon>
            <UserIcon className="w-5 h-5 text-gray-400" />
          </InputGroup.Icon>

          <Input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register('email')}
            hasIconLeft
            isError={!!errors.email?.message}
          />
        </InputGroup.Root>

        <InputGroup.Root>
          <InputGroup.Icon>
            <LockIcon className="w-5 h-5 text-gray-400" />
          </InputGroup.Icon>
          <InputGroup.Icon direction="right">
            <EyeIcon className="w-5 h-5 text-gray-400" />
            <EyeOffIcon className="w-5 h-5 text-gray-400" />
          </InputGroup.Icon>
          <Input
            id="password"
            type="password"
            placeholder="Senha"
            {...register('password')}
            hasIconLeft
            isError={!!errors.password?.message}
          />
        </InputGroup.Root>
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
};
