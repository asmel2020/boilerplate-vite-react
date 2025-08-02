import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

import { useAuthStore } from "@/store/authStore";

export const Route = createFileRoute("/_authenticated")({
  component: () => (
    <AuthProtectedRoute>
      <RouteComponent />
    </AuthProtectedRoute>
  ),
});

function RouteComponent() {
  return <Outlet />;
}

function AuthProtectedRoute({ children }: { children: React.ReactNode }) {
  const { auth } = useAuthStore();
  if (!auth.accessToken) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}
