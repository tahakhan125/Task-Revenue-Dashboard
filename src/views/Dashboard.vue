<template>
  <div class="vh-100 p-0 flex min-h-screen">
    <TheSidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <TheHeader />

      <div class="mb-auto">
        <RouterView />
      </div>

      <TheFooter />
    </div>
  </div>
</template>
