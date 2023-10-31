'use client';

import { useForm } from 'react-hook-form';
import { HiLockClosed, HiUser, HiEye, HiEyeOff } from 'react-icons/hi';

import { useAuth } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
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
  const { viewPassword, setViewPassword, handleClickSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataForm>({
    mode: 'onBlur',
    resolver: zodResolver(schema)
  });

  return (
    <div className="flex flex-col w-full h-fit gap-10 px-5 py-5 sm:bg-white sm:shadow-md sm:max-w-[400px]">
      <h1 className="text-2xl text-gray-900 font-bold m-auto">
        Faça login na sua conta
      </h1>
      <form
        onSubmit={handleSubmit((data) => handleClickSignIn(data))}
        className="flex flex-col gap-4"
      >
        <section>
          <InputGroup.Root>
            <InputGroup.Icon>
              <HiUser className="w-5 h-5 text-gray-400" />
            </InputGroup.Icon>

            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              {...register('email')}
              isError={!!errors.email?.message}
              hasIconLeft
            />
          </InputGroup.Root>
          {errors.email?.message && (
            <span className="text-sm text-rose-500">
              {errors.email?.message}
            </span>
          )}
        </section>

        <section>
          <div className="inline-flex w-full justify-end">
            <Button
              type="button"
              variant="link"
              className="text-sm text-primary font-semibold p-0 h-fit"
            >
              Esqueceu sua senha?
            </Button>
          </div>
          <InputGroup.Root>
            <InputGroup.Icon>
              <HiLockClosed className="w-5 h-5 text-gray-400" />
            </InputGroup.Icon>
            <InputGroup.Icon
              direction="right"
              className="cursor-pointer"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {!viewPassword && <HiEye className="w-5 h-5 text-gray-400" />}
              {viewPassword && <HiEyeOff className="w-5 h-5 text-gray-400" />}
            </InputGroup.Icon>
            <Input
              id="password"
              type={viewPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
              isError={!!errors.password?.message}
              hasIconLeft
            />
          </InputGroup.Root>
          {errors.password?.message && (
            <span className="text-sm text-rose-500">
              {errors.password?.message}
            </span>
          )}
        </section>
        <Button type="submit">Entrar</Button>
      </form>

      <footer className="inline-flex w-full justify-center mt">
        <span className="text-sm text-gray-500">
          Como solicitar cadastro?{' '}
          <Button
            variant="link"
            type="button"
            className="text-sm text-primary font-semibold p-0"
          >
            Clique aqui
          </Button>
        </span>
      </footer>
    </div>
  );
};
