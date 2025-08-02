import { Navigate } from "@tanstack/react-router";
import ViteLogo from "@/assets/vite.svg";

import { UserAuthForm } from "./components/user-auth-form";
import { useAuthStore } from "@/store/authStore";

export default function SignIn2() {
  const { auth } = useAuthStore();

  if (!!auth.accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-[#121835]" />

        <img
          src={ViteLogo}
          className="relative m-auto"
          width={301}
          height={60}
          alt="Vite"
        />

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              El trabajo en equipo no solo hace que los sueños se vuelvan
              realidad, sino que los hace más grandes y más rápidos. Juntos,
              somos imparables.
            </p>
            <footer className="text-sm">Danny Gonzalez</footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8 space-y-10 lg:space-y-0">
        <img
          src={ViteLogo}
          className="relative m-auto lg:hidden"
          width={60}
          height={60}
          alt="Vite"
        />
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Iniciar sesión
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingresa tu email y contraseña a continuación <br />
              Para iniciar sesión en su cuenta
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
