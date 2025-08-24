import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-900 text-white p-6">
      {/* Conteúdo de cada página filha será inserido aqui */}
      <Slot />
    </div>
  );
});
